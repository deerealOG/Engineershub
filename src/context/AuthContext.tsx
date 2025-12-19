import { createContext, useContext, useState, type ReactNode } from 'react';

type UserRole = 'jobseeker' | 'company' | null;

interface User {
  username: string;
  role: UserRole;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (role: 'jobseeker' | 'company') => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (role: 'jobseeker' | 'company') => {
    if (role === 'jobseeker') {
        setUser({
            username: 'jobseeker',
            role: 'jobseeker',
            name: 'John Doe'
        });
    } else {
        setUser({
            username: 'company',
            role: 'company',
            name: 'Shell Petroleum'
        });
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
