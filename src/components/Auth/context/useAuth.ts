import { useContext } from 'react';
import { AuthContext } from './authContext';

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('no Auth Context');
  }
  return context;
}
