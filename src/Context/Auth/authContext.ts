import { createContext } from 'react';
import type { User } from './type';

export type AuthContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  accessToken: string;
  setAccessToken: React.Dispatch<React.SetStateAction<string>>;
  logout: () => void;
  get: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
