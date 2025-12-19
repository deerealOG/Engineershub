import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthLayout } from '../../components/layout';
import { Logo, Input, Select, Button, Checkbox, SocialButtons } from '../../components/ui';
import { useAuth } from '../../context/AuthContext';
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
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    country: '',
    emailTips: true,
    agreeTerms: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (!formData.country) {
      newErrors.country = 'Please select a country';
    }
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the terms';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Get the full country name
    const countryLabel = countries.find(c => c.value === formData.country)?.label || formData.country;

    // Sign up the user using AuthContext
    signup('company', {
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
      country: countryLabel,
    });

    // Navigate to company registration page
    navigate('/company/register');
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
                error={errors.fullName}
              />

              <Input
                label="Work Email Address"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                error={errors.email}
              />

              <Input
                label="Password"
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                helperText="At least 8 characters"
                error={errors.password}
              />

              <Select
                label="Country"
                options={countries}
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
                error={errors.country}
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
                    <Link to="/terms">Engineers Hub Terms of Service</Link>, including the{' '}
                    <Link to="/user-agreement">User Agreement</Link> and{' '}
                    <Link to="/privacy">Privacy Policy</Link>.
                  </>
                }
                checked={formData.agreeTerms}
                onChange={(e) =>
                  setFormData({ ...formData, agreeTerms: e.target.checked })
                }
              />
              {errors.agreeTerms && (
                <span className="recruiter-signup__error">{errors.agreeTerms}</span>
              )}
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
