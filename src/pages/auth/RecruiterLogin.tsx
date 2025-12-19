import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthLayout } from '../../components/layout';
import { Logo, Input, Button } from '../../components/ui';
import { useAuth } from '../../context/AuthContext';
import modernBuilding from '../../assets/images/modern-building.webp';
import './RecruiterLogin.css';

export function RecruiterLogin() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Recruiter login:', formData);
    login('company');
    navigate('/recruiter/dashboard');
  };

  return (
    <AuthLayout imageUrl={modernBuilding} imageOverlay="none">
      <div className="recruiter-login">
        <div className="recruiter-login__logo">
          <Logo size="lg" />
        </div>

        <div className="recruiter-login__card">
          <h1>Welcome Back!</h1>
          <p className="recruiter-login__subtitle">
            Sign in to access your Engineers Hub account
          </p>

          <form onSubmit={handleSubmit}>
            <div className="recruiter-login__fields">
              <Input
                label="Work Email Address"
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

          <p className="recruiter-login__signup">
            Don't have an account? <Link to="/recruiter/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}
