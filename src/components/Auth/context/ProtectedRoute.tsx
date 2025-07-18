import { useAuth } from './useAuth';
import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  if (user === null) {
    return <Navigate to="/auth" replace />;
  }

  return children;
};
