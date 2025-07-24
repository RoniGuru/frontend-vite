import { createContext } from 'react';

export type AuthContextType = {
  accessToken: string;
  setAccessToken: React.Dispatch<React.SetStateAction<string>>;
  logout: () => void;
  get: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
