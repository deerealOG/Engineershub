import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DashboardLayout } from '../../components/layout';
import shellLogo from '../../assets/images/shell-logo.webp';
import './JobApplication.css';

const JOB_INFO = {
  title: 'Mechanical Engineer',
  company: 'Shell Petroleum Company',
  logo: shellLogo
};

export function JobApplication() {
  const { id } = useParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [useSavedResume, setUseSavedResume] = useState(true);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedIn: '',
    portfolio: '',
    coverLetter: '',
    experience: '',
    expectedSalary: '',
    availability: '',
    heardFrom: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
      setUseSavedResume(false);
    }
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(4); // Success
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const steps = [
    { number: 1, label: 'Personal Info' },
    { number: 2, label: 'Resume & Cover Letter' },
    { number: 3, label: 'Additional Questions' }
  ];

  // Success Screen
  if (currentStep === 4) {
    return (
      <DashboardLayout>
        <div className="job-application-page">
          <div className="job-application-success">
            <div className="job-application-success__icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
            </div>
            <h2>Application Submitted!</h2>
            <p>
              Your application for {JOB_INFO.title} at {JOB_INFO.company} has been successfully submitted. 
              We'll notify you once the employer reviews your application.
            </p>
            <div className="job-application-success__actions">
              <Link to="/applications" className="job-application-success__btn-primary">
                View My Applications
              </Link>
              <Link to="/jobs" className="job-application-success__btn-secondary">
                Browse More Jobs
              </Link>
            </div>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="job-application-page">
        {/* Header */}
        <header className="job-application-header">
          <div className="job-application-header__job">
            <img src={JOB_INFO.logo} alt={JOB_INFO.company} className="job-application-header__logo" />
            <div className="job-application-header__info">
              <h2>{JOB_INFO.title}</h2>
              <p>{JOB_INFO.company}</p>
            </div>
          </div>
          
          {/* Progress Steps */}
          <div className="job-application-progress">
            {steps.map(step => (
              <div 
                key={step.number}
                className={`job-application-step ${currentStep === step.number ? 'active' : ''} ${currentStep > step.number ? 'completed' : ''}`}
              >
                <div className="job-application-step__number">
                  {currentStep > step.number ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  ) : (
                    step.number
                  )}
                </div>
                <span className="job-application-step__label">{step.label}</span>
              </div>
            ))}
          </div>
        </header>

        {/* Form */}
        <div className="job-application-form">
          {/* Step 1: Personal Info */}
          {currentStep === 1 && (
            <div className="job-application-form__section">
              <h3>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Personal Information
              </h3>
              
              <div className="job-application-form__row">
                <div className="job-application-form__group">
                  <label htmlFor="firstName">First Name <span>*</span></label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div className="job-application-form__group">
                  <label htmlFor="lastName">Last Name <span>*</span></label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>
              
              <div className="job-application-form__row">
                <div className="job-application-form__group">
                  <label htmlFor="email">Email Address <span>*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="job-application-form__group">
                  <label htmlFor="phone">Phone Number <span>*</span></label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+234 800 000 0000"
                    required
                  />
                </div>
              </div>
              
              <div className="job-application-form__row">
                <div className="job-application-form__group">
                  <label htmlFor="linkedIn">LinkedIn Profile</label>
                  <input
                    type="url"
                    id="linkedIn"
                    name="linkedIn"
                    value={formData.linkedIn}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
                <div className="job-application-form__group">
                  <label htmlFor="portfolio">Portfolio/Website</label>
                  <input
                    type="url"
                    id="portfolio"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    placeholder="https://yourportfolio.com"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Resume & Cover Letter */}
          {currentStep === 2 && (
            <>
              <div className="job-application-form__section">
                <h3>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <path d="M14 2v6h6" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                  Resume / CV
                </h3>
                
                <label className="job-application-saved-resume">
                  <input
                    type="checkbox"
                    checked={useSavedResume}
                    onChange={() => setUseSavedResume(!useSavedResume)}
                  />
                  <div className="job-application-saved-resume__info">
                    <h4>Use my saved resume</h4>
                    <p>Resume_JohnDoe_2025.pdf • Uploaded Dec 15, 2025</p>
                  </div>
                </label>
                
                {!useSavedResume && (
                  <label className={`job-application-upload ${uploadedFile ? 'has-file' : ''}`}>
                    {uploadedFile ? (
                      <div className="job-application-upload__file">
                        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                          <path d="M22 4L12 14.01l-3-3" />
                        </svg>
                        <span>{uploadedFile.name}</span>
                        <button type="button" onClick={(e) => { e.preventDefault(); setUploadedFile(null); }}>
                          Remove
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="job-application-upload__icon">
                          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                            <polyline points="17 8 12 3 7 8" />
                            <line x1="12" y1="3" x2="12" y2="15" />
                          </svg>
                        </div>
                        <p><span>Click to upload</span> or drag and drop</p>
                        <small>PDF, DOC, or DOCX (Max 5MB)</small>
                      </>
                    )}
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      style={{ display: 'none' }}
                    />
                  </label>
                )}
              </div>
              
              <div className="job-application-form__section">
                <h3>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                  </svg>
                  Cover Letter
                </h3>
                
                <div className="job-application-form__group">
                  <label htmlFor="coverLetter">Why are you interested in this role? <span>*</span></label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    placeholder="Tell us why you're a great fit for this position..."
                    required
                  />
                </div>
              </div>
            </>
          )}

          {/* Step 3: Additional Questions */}
          {currentStep === 3 && (
            <div className="job-application-form__section">
              <h3>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                Additional Questions
              </h3>
              
              <div className="job-application-form__group">
                <label htmlFor="experience">
                  How many years of relevant experience do you have? <span>*</span>
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select experience level</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>
              
              <div className="job-application-form__group">
                <label htmlFor="expectedSalary">What is your expected salary range? <span>*</span></label>
                <select
                  id="expectedSalary"
                  name="expectedSalary"
                  value={formData.expectedSalary}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select salary range</option>
                  <option value="100-200">₦100,000 - ₦200,000</option>
                  <option value="200-300">₦200,000 - ₦300,000</option>
                  <option value="300-500">₦300,000 - ₦500,000</option>
                  <option value="500-1000">₦500,000 - ₦1,000,000</option>
                  <option value="1000+">₦1,000,000+</option>
                </select>
              </div>
              
              <div className="job-application-form__group">
                <label htmlFor="availability">When can you start? <span>*</span></label>
                <select
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select availability</option>
                  <option value="immediately">Immediately</option>
                  <option value="2-weeks">2 weeks notice</option>
                  <option value="1-month">1 month notice</option>
                  <option value="2-months">2 months notice</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="job-application-form__group">
                <label htmlFor="heardFrom">How did you hear about this job?</label>
                <select
                  id="heardFrom"
                  name="heardFrom"
                  value={formData.heardFrom}
                  onChange={handleChange}
                >
                  <option value="">Select an option</option>
                  <option value="engineershub">Engineers Hub</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="referral">Employee Referral</option>
                  <option value="social-media">Social Media</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="job-application-actions">
            {currentStep > 1 ? (
              <button type="button" className="job-application-back-btn" onClick={handleBack}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back
              </button>
            ) : (
              <Link to={`/jobs/${id}`} className="job-application-back-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Cancel
              </Link>
            )}
            <button type="button" className="job-application-next-btn" onClick={handleNext}>
              {currentStep === 3 ? 'Submit Application' : 'Continue'}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
