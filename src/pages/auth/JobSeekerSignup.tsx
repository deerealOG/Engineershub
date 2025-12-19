import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthLayout } from '../../components/layout';
import { Logo, Input, Button, SocialButtons } from '../../components/ui';
import jobSeeker from '../../assets/images/job-seeker-sign-up.webp';
import jobSeekerTrust from '../../assets/images/job-seeker-trust.webp';
import './JobSeekerSignup.css';

export function JobSeekerSignup() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Job seeker signup:', formData);
  };

  return (
    <AuthLayout
      imageUrl={jobSeeker}
      imageOverlay="rgba(38, 34, 98, 0.5)"
      leftContent={
        <div className="jobseeker-signup__left">
          <h2>Ready to take your career and Job search to the next level?
            Join <span className="text-accent">Engineers Hub</span> <br></br>today!</h2>
          
          <div className="jobseeker-signup__members">
            <div className="jobseeker-signup__avatars">
              <img src={jobSeekerTrust} alt="Job Seeker Trust Badge" />
            </div>
            <span className="jobseeker-signup__count">5.5k members</span>
          </div>
        </div>
      }
    >
      <div className="jobseeker-signup">
        <div className="jobseeker-signup__header">
          <Logo size="md" />
          <p>
            Recruiter? <Link to="/recruiter/signup">Sign up</Link>
          </p>
        </div>

        <div className="jobseeker-signup__form-card">
          <h1>Sign Up</h1>
          <p className="jobseeker-signup__subtitle">
            Get started with an account on Engineers Hub
          </p>

          <form onSubmit={handleSubmit}>
            <div className="jobseeker-signup__fields">
              <Input
                label="Full Name"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                placeholder="John Doe"
              />

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
                helperText="At least 8 characters"
              />

              <Input
                label="Confirm Password"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
              />
            </div>

            <Button type="submit" fullWidth size="lg">
              Sign up
            </Button>
          </form>

          <p className="jobseeker-signup__signin">
            Already have an account? <Link to="/jobseeker/login">Sign in</Link>
          </p>

          <div className="jobseeker-signup__divider">
            <span>or</span>
          </div>

          <SocialButtons action="Sign up" />
        </div>
      </div>
    </AuthLayout>
  );
}
