import type { ReactNode } from 'react';
import { useState } from 'react';
import { AuthContext } from './authContext';
import type { AuthContextType } from './authContext';
import { api } from '../../api/api';
import type { RootState, AppDispatch } from '../../state/store';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser, setUser } from '../../state/user/userSlice';
import type { LoginResponseData } from './type';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch<AppDispatch>();

  // Single loading state for all auth operations
  const [isLoading, setIsLoading] = useState(false);

  async function login(name: string, password: string): Promise<boolean> {
    setIsLoading(true);
    try {
      const response = await api.post('/login', { name, password });
      console.log('response ', response);
      if (response.status === 200) {
        const data: LoginResponseData = response.data;
        dispatch(setUser(data.user));
        api.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${data.accessToken}`;
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      return false;
    } finally {
      setIsLoading(false);
    }
  }

  async function register(name: string, password: string) {
    setIsLoading(true);
    try {
      const response = await api.post('/register', {
        name,
        password,
      });

      if (response.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function logout() {
    if (user) {
      setIsLoading(true);
      try {
        const response = await api.post(`/logout/${user.id}`);
        console.log(response);

        if (response.status === 200) {
          dispatch(clearUser());
          api.defaults.headers.common['Authorization'] = '';
          //set refresh token to empty
          document.cookie =
            'refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  }

  async function get() {
    if (user) {
      setIsLoading(true);
      try {
        console.log(document.cookie);
        const response = await api.get(`/user/${user.id}`);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  }

  const value: AuthContextType = {
    logout,
    get,
    login,
    register,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
