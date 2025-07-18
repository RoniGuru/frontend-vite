import { useState } from 'react';
import type { ReactNode } from 'react';
import type { User } from './type';
import { AuthContext } from './authContext';
import type { AuthContextType } from './authContext';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const value: AuthContextType = {
    user,
    setUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
