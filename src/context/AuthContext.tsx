import { createContext, useContext, useState, type ReactNode } from 'react';

type UserRole = 'jobseeker' | 'company' | null;

export interface UserProfile {
  fullName: string;
  email: string;
  phone?: string;
  location?: string;
  title?: string;
  about?: string;
  engineeringField?: string;
  yearsOfExperience?: string;
  linkedin?: string;
  profileImage?: string;
  country?: string;
  companyName?: string;
  // Job seeker specific
  experience?: Array<{
    id: number;
    title: string;
    company: string;
    location: string;
    period: string;
    description: string;
  }>;
  education?: Array<{
    id: number;
    degree: string;
    school: string;
    period: string;
  }>;
  skills?: string[];
  resumes?: Array<{
    id: number;
    name: string;
    date: string;
    isDefault: boolean;
  }>;
}

export interface User {
  id: string;
  role: UserRole;
  profile: UserProfile;
}

interface SignupData {
  fullName: string;
  email: string;
  password: string;
  country?: string;
}

interface AuthContextType {
  user: User | null;
  login: (role: 'jobseeker' | 'company', email?: string, password?: string) => void;
  signup: (role: 'jobseeker' | 'company', data: SignupData) => void;
  updateProfile: (profileData: Partial<UserProfile>) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Generate a simple unique ID
const generateId = () => Math.random().toString(36).substring(2, 15);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const signup = (role: 'jobseeker' | 'company', data: SignupData) => {
    const newUser: User = {
      id: generateId(),
      role,
      profile: {
        fullName: data.fullName,
        email: data.email,
        country: data.country,
        // Initialize with empty arrays for job seekers
        ...(role === 'jobseeker' && {
          experience: [],
          education: [],
          skills: [],
          resumes: [],
        }),
      },
    };
    setUser(newUser);
  };

  const login = (role: 'jobseeker' | 'company', _email?: string, _password?: string) => {
    // For demo purposes, create a user with sample data when logging in
    if (role === 'jobseeker') {
      setUser({
        id: generateId(),
        role: 'jobseeker',
        profile: {
          fullName: 'John Doe',
          email: 'john.doe@email.com',
          phone: '+234 801 234 5678',
          location: 'Lagos, Nigeria',
          title: 'Mechanical Engineer',
          about: 'Experienced Mechanical Engineer with over 5 years of expertise in the oil and gas industry.',
          linkedin: 'linkedin.com/in/johndoe',
          experience: [
            {
              id: 1,
              title: 'Senior Mechanical Engineer',
              company: 'Shell Petroleum Company',
              location: 'Lagos, Nigeria',
              period: 'Jan 2022 - Present',
              description: 'Lead mechanical engineering projects for offshore platforms.'
            }
          ],
          education: [
            {
              id: 1,
              degree: 'Bachelor of Engineering in Mechanical Engineering',
              school: 'University of Lagos',
              period: '2015 - 2019'
            }
          ],
          skills: ['AutoCAD', 'SolidWorks', 'Project Management', 'Team Leadership'],
          resumes: [
            {
              id: 1,
              name: 'Resume_JohnDoe_2025.pdf',
              date: 'Dec 15, 2025',
              isDefault: true
            }
          ]
        }
      });
    } else {
      setUser({
        id: generateId(),
        role: 'company',
        profile: {
          fullName: 'Shell Petroleum',
          email: 'hr@shell.com',
          companyName: 'Shell Petroleum',
          location: 'Lagos, Nigeria',
          country: 'Nigeria'
        }
      });
    }
  };

  const updateProfile = (profileData: Partial<UserProfile>) => {
    if (user) {
      setUser({
        ...user,
        profile: {
          ...user.profile,
          ...profileData,
        },
      });
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, updateProfile, logout, isAuthenticated: !!user }}>
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
