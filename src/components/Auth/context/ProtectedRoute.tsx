import { useAuth } from './useAuth';
import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

/**
 *
 * @param children - is the pages that the route is protecting
 * @returns  The children if user is authenticated, otherwise redirects to auth page
 */
export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  if (user === null) {
    return <Navigate to="/auth" replace />;
  }

  return children;
};
