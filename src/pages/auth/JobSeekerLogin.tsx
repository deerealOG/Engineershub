import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthLayout } from '../../components/layout';
import { Logo, Input, Button } from '../../components/ui';
import { useAuth } from '../../context/AuthContext';
import building from '../../assets/images/modern-building.webp';
import './JobSeekerLogin.css';

export function JobSeekerLogin() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Job seeker login:', formData);
    login('jobseeker');
    navigate('/jobs');
  };

  return (
    <AuthLayout imageUrl={building} imageOverlay="none">
      <div className="jobseeker-login">
        <div className="jobseeker-login__logo">
          <Logo size="lg" />
        </div>

        <div className="jobseeker-login__card">
          <h1>Welcome Back!</h1>
          <p className="jobseeker-login__subtitle">
            Sign in to access your Engineers Hub account
          </p>

          <form onSubmit={handleSubmit}>
            <div className="jobseeker-login__fields">
              <Input
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              <Input
                label="Password"
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>

            <Button type="submit" fullWidth size="lg">
              Sign in
            </Button>
          </form>

          <p className="jobseeker-login__signup">
            Don't have an account? <Link to="/jobseeker/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}
