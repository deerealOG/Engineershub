import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: ('jobseeker' | 'company')[];
}

export function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to role selection if not authenticated
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  if (allowedRoles && user && !allowedRoles.includes(user.role as any)) {
      // Redirect to appropriate dashboard if role doesn't match
      if (user.role === 'jobseeker') {
          return <Navigate to="/jobs" replace />;
      } else {
          return <Navigate to="/recruiter/dashboard" replace />;
      }
  }

  return <>{children}</>;
}
