import { createContext } from 'react';
import type { User } from './type';

export type AuthContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
