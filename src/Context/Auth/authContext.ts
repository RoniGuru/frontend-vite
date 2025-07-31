import { createContext } from 'react';

export type AuthContextType = {
  logout: () => void;
  login: (
    name: string,
    password: string
  ) => Promise<{ success: boolean; error?: string }>;
  register: (
    name: string,
    password: string
  ) => Promise<{ success: boolean; error?: string }>;
  get: () => void;
  isLoading: boolean;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
