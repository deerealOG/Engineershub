import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo, Button } from '../../components/ui';
import { RoleCard } from '../../components/auth';
import roleSelection from '../../assets/images/role-selection.webp';
import './RoleSelection.css';

type Role = 'recruiter' | 'jobseeker' | null;

export function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState<Role>(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedRole === 'recruiter') {
      navigate('/recruiter/signup');
    } else if (selectedRole === 'jobseeker') {
      navigate('/jobseeker/signup');
    }
  };

  return (
    <div
      className="role-selection"
      style={{ backgroundImage: `url(${roleSelection})` }}
    >
      <div className="role-selection__overlay" />
      <div className="role-selection__container">
        <div className="role-selection__card">
          <div className="role-selection__logo">
            <Logo size="lg" />
          </div>

          <h1 className="role-selection__title">Join as a client or Job Seeker</h1>

          <div className="role-selection__options">
            <RoleCard
              icon={
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-6 8v-2c0-2.66 5.33-4 8-4h.5l2 2H14c-1.97 0-5.26.67-6 2v2H6zm14.07-4.64l-3.54 3.54-1.41-1.41-1.06 1.06 2.47 2.47 4.6-4.6-1.06-1.06z" />
                </svg>
              }
              title="I'm a recruiter or an Engineering firm"
              selected={selectedRole === 'recruiter'}
              onClick={() => setSelectedRole('recruiter')}
            />

            <RoleCard
              icon={
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                </svg>
              }
              title="I'm seeking for career or job opportunity"
              selected={selectedRole === 'jobseeker'}
              onClick={() => setSelectedRole('jobseeker')}
            />
          </div>

          <Button
            fullWidth
            size="lg"
            disabled={!selectedRole}
            onClick={handleContinue}
          >
            Create an account
          </Button>

          <p className="role-selection__signin">
            Already have an account? <a href="/login">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
}
