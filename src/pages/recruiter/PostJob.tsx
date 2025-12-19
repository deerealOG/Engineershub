import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DashboardLayout } from '../../components/layout';
import './PostJob.css';

const BENEFITS_OPTIONS = [
  'Health Insurance', 'Pension', 'Performance Bonus', 'Flexible Hours',
  'Remote Work', 'Training Budget', 'Paid Leave', 'Transport Allowance', 'Meal Allowance'
];

export function PostJob() {
  const [currentStep, setCurrentStep] = useState(1);
  const [tags, setTags] = useState<string[]>(['Mechanical Engineering']);
  const [selectedBenefits, setSelectedBenefits] = useState<string[]>(['Health Insurance', 'Pension']);
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    type: '',
    experience: '',
    salaryMin: '',
    salaryMax: '',
    description: '',
    responsibilities: '',
    requirements: '',
    deadline: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.currentTarget.value.trim()) {
      e.preventDefault();
      const newTag = e.currentTarget.value.trim();
      if (!tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      e.currentTarget.value = '';
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const toggleBenefit = (benefit: string) => {
    setSelectedBenefits(prev =>
      prev.includes(benefit) ? prev.filter(b => b !== benefit) : [...prev, benefit]
    );
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(4); // Success
    }
  };

  const steps = [
    { number: 1, label: 'Job Details' },
    { number: 2, label: 'Requirements' },
    { number: 3, label: 'Preview & Publish' }
  ];

  // Success Screen
  if (currentStep === 4) {
    return (
      <DashboardLayout>
        <div className="post-job-page">
          <div className="post-job-success">
            <div className="post-job-success__icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
            </div>
            <h2>Job Posted Successfully!</h2>
            <p>Your job listing is now live and visible to thousands of engineering professionals.</p>
            <div className="post-job-success__actions">
              <Link to="/recruiter/jobs" className="post-job-success__btn-primary">
                View My Jobs
              </Link>
              <button onClick={() => setCurrentStep(1)} className="post-job-success__btn-secondary">
                Post Another Job
              </button>
            </div>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="post-job-page">
        {/* Header */}
        <div className="post-job-header">
          <h1>Post a New Job</h1>
          <p>Create a job listing to attract top engineering talent</p>
        </div>

        {/* Progress */}
        <div className="post-job-progress">
          {steps.map(step => (
            <div
              key={step.number}
              className={`post-job-step ${currentStep === step.number ? 'active' : ''} ${currentStep > step.number ? 'completed' : ''}`}
            >
              <div className="post-job-step__number">
                {currentStep > step.number ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                ) : (
                  step.number
                )}
              </div>
              <span className="post-job-step__label">{step.label}</span>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="post-job-form">
          {/* Step 1: Job Details */}
          {currentStep === 1 && (
            <>
              <div className="post-job-form__section">
                <h3>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                  </svg>
                  Basic Information
                </h3>

                <div className="post-job-form__group">
                  <label htmlFor="title">Job Title <span>*</span></label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="e.g. Mechanical Engineer"
                    required
                  />
                </div>

                <div className="post-job-form__row">
                  <div className="post-job-form__group">
                    <label htmlFor="location">Location <span>*</span></label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Lagos, Nigeria"
                      required
                    />
                  </div>
                  <div className="post-job-form__group">
                    <label htmlFor="type">Employment Type <span>*</span></label>
                    <select id="type" name="type" value={formData.type} onChange={handleChange} required>
                      <option value="">Select type</option>
                      <option value="full-time">Full-time</option>
                      <option value="part-time">Part-time</option>
                      <option value="contract">Contract</option>
                      <option value="internship">Internship</option>
                    </select>
                  </div>
                </div>

                <div className="post-job-form__row">
                  <div className="post-job-form__group">
                    <label htmlFor="experience">Experience Level <span>*</span></label>
                    <select id="experience" name="experience" value={formData.experience} onChange={handleChange} required>
                      <option value="">Select level</option>
                      <option value="entry">Entry Level (0-2 years)</option>
                      <option value="mid">Mid Level (3-5 years)</option>
                      <option value="senior">Senior Level (5-10 years)</option>
                      <option value="executive">Executive (10+ years)</option>
                    </select>
                  </div>
                  <div className="post-job-form__group">
                    <label htmlFor="deadline">Application Deadline</label>
                    <input
                      type="date"
                      id="deadline"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="post-job-form__row">
                  <div className="post-job-form__group">
                    <label htmlFor="salaryMin">Salary Range (Min)</label>
                    <input
                      type="text"
                      id="salaryMin"
                      name="salaryMin"
                      value={formData.salaryMin}
                      onChange={handleChange}
                      placeholder="e.g. 200,000"
                    />
                  </div>
                  <div className="post-job-form__group">
                    <label htmlFor="salaryMax">Salary Range (Max)</label>
                    <input
                      type="text"
                      id="salaryMax"
                      name="salaryMax"
                      value={formData.salaryMax}
                      onChange={handleChange}
                      placeholder="e.g. 400,000"
                    />
                  </div>
                </div>
              </div>

              <div className="post-job-form__section">
                <h3>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <path d="M14 2v6h6" />
                  </svg>
                  Job Description
                </h3>

                <div className="post-job-form__group">
                  <label htmlFor="description">Description <span>*</span></label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe the role, responsibilities, and what makes this opportunity exciting..."
                    required
                  />
                </div>
              </div>
            </>
          )}

          {/* Step 2: Requirements */}
          {currentStep === 2 && (
            <>
              <div className="post-job-form__section">
                <h3>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                  Requirements & Qualifications
                </h3>

                <div className="post-job-form__group">
                  <label htmlFor="requirements">Requirements <span>*</span></label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    placeholder="List the qualifications, skills, and experience required..."
                    required
                  />
                </div>

                <div className="post-job-form__group">
                  <label htmlFor="responsibilities">Key Responsibilities</label>
                  <textarea
                    id="responsibilities"
                    name="responsibilities"
                    value={formData.responsibilities}
                    onChange={handleChange}
                    placeholder="List the main responsibilities for this role..."
                  />
                </div>
              </div>

              <div className="post-job-form__section">
                <h3>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  Skills & Tags
                </h3>

                <div className="post-job-form__group">
                  <label>Add relevant skills (press Enter to add)</label>
                  <div className="post-job-tags">
                    {tags.map(tag => (
                      <span key={tag} className="post-job-tag">
                        {tag}
                        <button type="button" onClick={() => removeTag(tag)}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12" />
                          </svg>
                        </button>
                      </span>
                    ))}
                    <input
                      type="text"
                      placeholder="Type and press Enter..."
                      onKeyDown={handleTagKeyDown}
                    />
                  </div>
                </div>
              </div>

              <div className="post-job-form__section">
                <h3>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Benefits & Perks
                </h3>

                <div className="post-job-benefits">
                  {BENEFITS_OPTIONS.map(benefit => (
                    <label key={benefit} className={`post-job-benefit ${selectedBenefits.includes(benefit) ? 'selected' : ''}`}>
                      <input
                        type="checkbox"
                        checked={selectedBenefits.includes(benefit)}
                        onChange={() => toggleBenefit(benefit)}
                      />
                      <span>{benefit}</span>
                    </label>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Step 3: Preview */}
          {currentStep === 3 && (
            <div className="post-job-form__section">
              <h3>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                Preview Your Job Listing
              </h3>

              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                Review your job listing before publishing. Make sure all information is correct.
              </p>

              <div className="post-job-preview">
                <h4>Job Preview</h4>
                <div className="post-job-preview__card">
                  <div className="post-job-preview__title">
                    {formData.title || 'Mechanical Engineer'}
                  </div>
                  <div className="post-job-preview__company">Shell Petroleum Company</div>
                  <div className="post-job-preview__meta">
                    <span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {formData.location || 'Lagos, Nigeria'}
                    </span>
                    <span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                      </svg>
                      {formData.type || 'Full-time'}
                    </span>
                    {formData.salaryMin && formData.salaryMax && (
                      <span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="12" y1="1" x2="12" y2="23" />
                          <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                        </svg>
                        ₦{formData.salaryMin} - ₦{formData.salaryMax}
                      </span>
                    )}
                  </div>
                  <p className="post-job-preview__desc">
                    {formData.description || 'No description provided.'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="post-job-actions">
            {currentStep > 1 ? (
              <button type="button" className="post-job-back-btn" onClick={() => setCurrentStep(currentStep - 1)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back
              </button>
            ) : (
              <Link to="/recruiter/dashboard" className="post-job-back-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Cancel
              </Link>
            )}
            <div className="post-job-action-btns">
              <button type="button" className="post-job-draft-btn">
                Save as Draft
              </button>
              <button type="button" className="post-job-next-btn" onClick={handleNext}>
                {currentStep === 3 ? 'Publish Job' : 'Continue'}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
