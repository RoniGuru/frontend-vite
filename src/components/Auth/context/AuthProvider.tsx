import { useState } from 'react';
import type { ReactNode } from 'react';
import type { User } from './type';
import { AuthContext } from './authContext';
import type { AuthContextType } from './authContext';
import { api } from '../../../api/api';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string>('');

  async function logout() {
    if (user) {
      const response = await api.post(`/logout/${user.id}`);

      if (response.status === 200) {
        setUser(null);
        setAccessToken('');
        //set refresh token to empty
        document.cookie =
          'refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      }
    }
  }

  const value: AuthContextType = {
    user,
    setUser,
    accessToken,
    setAccessToken,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
