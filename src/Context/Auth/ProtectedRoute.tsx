import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import type { RootState } from '../../state/store';
import { useSelector } from 'react-redux';

/**
 *
 * @param children - is the pages that the route is protecting
 * @returns  The children if user is authenticated, otherwise redirects to auth page
 */
export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const user = useSelector((state: RootState) => state.user.user);

  if (!user || user.id === 0 || user.id === undefined) {
    return <Navigate to="/auth" replace />;
  }
  return children;
};
