import type { ReactNode } from 'react';
import { AuthContext } from './authContext';
import type { AuthContextType } from './authContext';
import { api } from '../../api/api';
import type { RootState, AppDispatch } from '../../state/store';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../../state/user/userSlice';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch<AppDispatch>();

  async function logout() {
    if (user) {
      const response = await api.post(`/logout/${user.id}`);
      console.log(response);

      if (response.status === 200) {
        dispatch(clearUser());
        api.defaults.headers.common['Authorization'] = '';
        //set refresh token to empty
        document.cookie =
          'refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      }
    }
  }

  async function get() {
    if (user) {
      console.log(document.cookie);
      const response = await api.get(`/user/${user.id}`);
      console.log(response.data);
    }
  }

  const value: AuthContextType = {
    logout,
    get,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
