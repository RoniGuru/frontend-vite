import { createContext } from 'react';

export type AuthContextType = {
  logout: () => void;
  login: (name: string, password: string) => Promise<boolean>;
  register: (name: string, password: string) => void;
  get: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
