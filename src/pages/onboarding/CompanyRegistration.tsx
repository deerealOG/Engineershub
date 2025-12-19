import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input, Button, FileUpload, Stepper } from '../../components/ui';
import constructionWorkers from '../../assets/images/construction-workers.webp';
import './CompanyRegistration.css';

const STEPS = ['Company Details', 'Verification Documents', 'Preview Registration'];

export function CompanyRegistration() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    registrationNumber: '',
    industry: '',
    companyAddress: '',
    companyWebsite: '',
    corporateEmail: '',
    phoneCode: '+234',
    phoneNumber: '',
    facebook: '',
    twitter: '',
    linkedin: '',
    companyLogo: null as File | null,
    cacCertificate: null as File | null,
    taxClearance: null as File | null,
    utilityBill: null as File | null,
  });

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Company registration:', formData);
    // Navigate to recruiter dashboard
    navigate('/recruiter/dashboard');
  };

  const handleSkip = () => {
    // Allow recruiter to skip and proceed to dashboard
    navigate('/recruiter/dashboard');
  };

  return (
    <div className="company-registration">
      <div
        className="company-registration__hero"
        style={{ backgroundImage: `url(${constructionWorkers})` }}
      >
        <div className="company-registration__hero-overlay" />
        <div className="company-registration__hero-content">
          <h1>Verification for Companies Only -</h1>
          <h2>Ensure Safe Hiring</h2>
        </div>
      </div>

      <div className="company-registration__content">
        <div className="company-registration__header">
          <h1>Company Registration</h1>
          <p>Register your engineering firm to get started with Engineers Hub.</p>
        </div>

        <Stepper steps={STEPS} currentStep={currentStep} />

        <form onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <div className="company-registration__step">
              <h2>Company Details</h2>

              <div className="company-registration__fields">
                <Input
                  label="Company Name"
                  value={formData.companyName}
                  onChange={(e) =>
                    setFormData({ ...formData, companyName: e.target.value })
                  }
                />

                <Input
                  label="Company Registration Number"
                  value={formData.registrationNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, registrationNumber: e.target.value })
                  }
                />

                <Input
                  label="Industry"
                  value={formData.industry}
                  onChange={(e) =>
                    setFormData({ ...formData, industry: e.target.value })
                  }
                />

                <Input
                  label="Company Address"
                  value={formData.companyAddress}
                  onChange={(e) =>
                    setFormData({ ...formData, companyAddress: e.target.value })
                  }
                />

                <Input
                  label="Company Website"
                  value={formData.companyWebsite}
                  onChange={(e) =>
                    setFormData({ ...formData, companyWebsite: e.target.value })
                  }
                />

                <Input
                  label="Corporate Email"
                  type="email"
                  value={formData.corporateEmail}
                  onChange={(e) =>
                    setFormData({ ...formData, corporateEmail: e.target.value })
                  }
                />

                <div className="company-registration__phone">
                  <label>Phone Number</label>
                  <div className="company-registration__phone-inputs">
                    <select
                      value={formData.phoneCode}
                      onChange={(e) =>
                        setFormData({ ...formData, phoneCode: e.target.value })
                      }
                      className="company-registration__phone-code"
                    >
                      <option value="+234">+234</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                    </select>
                    <input
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) =>
                        setFormData({ ...formData, phoneNumber: e.target.value })
                      }
                      className="company-registration__phone-number"
                    />
                  </div>
                </div>

                <div className="company-registration__social">
                  <label>Social Media Handle</label>
                  <div className="company-registration__social-inputs">
                    <div className="company-registration__social-input">
                      <span className="company-registration__social-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </span>
                      <input
                        type="text"
                        placeholder="Facebook"
                        value={formData.facebook}
                        onChange={(e) =>
                          setFormData({ ...formData, facebook: e.target.value })
                        }
                      />
                    </div>
                    <div className="company-registration__social-input">
                      <span className="company-registration__social-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </span>
                      <input
                        type="text"
                        placeholder="X, formerly Twitter"
                        value={formData.twitter}
                        onChange={(e) =>
                          setFormData({ ...formData, twitter: e.target.value })
                        }
                      />
                    </div>
                    <div className="company-registration__social-input">
                      <span className="company-registration__social-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </span>
                      <input
                        type="text"
                        placeholder="LinkedIn"
                        value={formData.linkedin}
                        onChange={(e) =>
                          setFormData({ ...formData, linkedin: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>

                <FileUpload
                  label="Upload Company Logo"
                  accept=".jpg,.jpeg,.png"
                  maxSize="5MB"
                  onChange={(file) =>
                    setFormData({ ...formData, companyLogo: file })
                  }
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="company-registration__step">
              <h2>Verification Documents</h2>

              <div className="company-registration__documents">
                <FileUpload
                  label="CAC Certificate"
                  accept=".pdf,.jpg,.jpeg"
                  maxSize="10MB"
                  onChange={(file) =>
                    setFormData({ ...formData, cacCertificate: file })
                  }
                />

                <FileUpload
                  label="Tax Clearance"
                  accept=".pdf,.jpg,.jpeg"
                  maxSize="5MB"
                  onChange={(file) =>
                    setFormData({ ...formData, taxClearance: file })
                  }
                />

                <FileUpload
                  label="Utility Bill"
                  accept=".pdf,.jpg,.jpeg"
                  maxSize="5MB"
                  onChange={(file) =>
                    setFormData({ ...formData, utilityBill: file })
                  }
                />
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="company-registration__step">
              <h2>Preview Registration</h2>

              <div className="company-registration__preview">
                <div className="company-registration__preview-section">
                  <h3>Company Details</h3>
                  <div className="company-registration__preview-grid">
                    <div className="company-registration__preview-item">
                      <label>Company Name</label>
                      <p>{formData.companyName || '-'}</p>
                    </div>
                    <div className="company-registration__preview-item">
                      <label>Registration Number</label>
                      <p>{formData.registrationNumber || '-'}</p>
                    </div>
                    <div className="company-registration__preview-item">
                      <label>Industry</label>
                      <p>{formData.industry || '-'}</p>
                    </div>
                    <div className="company-registration__preview-item">
                      <label>Company Address</label>
                      <p>{formData.companyAddress || '-'}</p>
                    </div>
                    <div className="company-registration__preview-item">
                      <label>Website</label>
                      <p>{formData.companyWebsite || '-'}</p>
                    </div>
                    <div className="company-registration__preview-item">
                      <label>Corporate Email</label>
                      <p>{formData.corporateEmail || '-'}</p>
                    </div>
                    <div className="company-registration__preview-item">
                      <label>Phone Number</label>
                      <p>{formData.phoneCode} {formData.phoneNumber || '-'}</p>
                    </div>
                  </div>
                </div>

                <div className="company-registration__preview-section">
                  <h3>Verification Documents</h3>
                  <div className="company-registration__preview-docs">
                    <div className="company-registration__preview-doc">
                      <label>CAC Certificate</label>
                      <p>{formData.cacCertificate?.name || 'Not uploaded'}</p>
                    </div>
                    <div className="company-registration__preview-doc">
                      <label>Tax Clearance</label>
                      <p>{formData.taxClearance?.name || 'Not uploaded'}</p>
                    </div>
                    <div className="company-registration__preview-doc">
                      <label>Utility Bill</label>
                      <p>{formData.utilityBill?.name || 'Not uploaded'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="company-registration__actions">
            {currentStep < 3 ? (
              <Button type="button" fullWidth size="lg" onClick={handleNext}>
                Proceed to Next Step
              </Button>
            ) : (
              <Button type="submit" fullWidth size="lg">
                Submit Registration
              </Button>
            )}
            <button 
              type="button" 
              className="company-registration__skip"
              onClick={handleSkip}
            >
              Skip for now →
            </button>
          </div>

          <p className="company-registration__login">
            Already Registered? <Link to="/recruiter/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
