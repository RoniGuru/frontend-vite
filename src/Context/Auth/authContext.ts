import { createContext } from 'react';

export type AuthContextType = {
  logout: () => void;
  get: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
