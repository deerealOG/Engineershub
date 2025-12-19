import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthLayout } from '../../components/layout';
import { Logo, Input, Select, Button, Checkbox, SocialButtons } from '../../components/ui';
import hardhatSunset from '../../assets/images/hardhat-sunset.webp';
import companyTrust from '../../assets/images/company-trust.webp';
import './RecruiterSignup.css';

const countries = [
  { value: 'ng', label: 'Nigeria' },
  { value: 'gh', label: 'Ghana' },
  { value: 'ke', label: 'Kenya' },
  { value: 'za', label: 'South Africa' },
  { value: 'eg', label: 'Egypt' },
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
];

export function RecruiterSignup() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    country: '',
    emailTips: true,
    agreeTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Recruiter signup:', formData);
  };

  return (
    <AuthLayout
      imageUrl={hardhatSunset}
      imageOverlay="rgba(38, 34, 98, 0.8)"
      leftContent={
        <div className="recruiter-signup__left">
          <h2>Looking for the right talent to upscale work productivity?
            Join <span className="text-accent">Engineers Hub</span> <br></br>today!</h2>
          <div className="recruiter-signup__companies">
            <div className="recruiter-signup__logos">
              <img src={companyTrust} alt="Company Trust Badge" />
            </div>
            <span className="recruiter-signup__count">5.5k companies</span>
          </div>
        </div>
      }
    >
      <div className="recruiter-signup">
        <div className="recruiter-signup__header">
          <Logo size="md" />
          <p>
            Job Seeker? <Link to="/jobseeker/signup">Sign up</Link>
          </p>
        </div>

        <div className="recruiter-signup__form-card">
          <h1>Sign up to hire talent</h1>

          <form onSubmit={handleSubmit}>
            <div className="recruiter-signup__fields">
              <Input
                label="Full Name"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                placeholder="John Doe"
              />

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
                helperText="At least 8 characters"
              />

              <Select
                label="Country"
                options={countries}
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
              />
            </div>

            <div className="recruiter-signup__checkboxes">
              <Checkbox
                label="Send me emails with tips on how to find talent that fits my needs."
                checked={formData.emailTips}
                onChange={(e) =>
                  setFormData({ ...formData, emailTips: e.target.checked })
                }
              />

              <Checkbox
                label={
                  <>
                    Yes, I understand and agree to the{' '}
                    <a href="/terms">Engineers Hub Terms of Service</a>, including the{' '}
                    <a href="/user-agreement">User Agreement</a> and{' '}
                    <a href="/privacy">Privacy Policy</a>.
                  </>
                }
                checked={formData.agreeTerms}
                onChange={(e) =>
                  setFormData({ ...formData, agreeTerms: e.target.checked })
                }
              />
            </div>

            <Button type="submit" fullWidth size="lg">
              Create my account
            </Button>
          </form>

          <p className="recruiter-signup__signin">
            Already have an account? <Link to="/recruiter/login">Sign in</Link>
          </p>

          <div className="recruiter-signup__divider">
            <span>or</span>
          </div>

          <SocialButtons action="Sign up" />
        </div>
      </div>
    </AuthLayout>
  );
}
