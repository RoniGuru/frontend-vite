import { createContext } from 'react';

export type AuthContextType = {
  logout: () => Promise<boolean>;
  login: (name: string, password: string) => Promise<boolean>;
  get: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
