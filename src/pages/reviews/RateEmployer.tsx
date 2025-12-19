import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { DashboardLayout } from '../../components/layout';
import { Modal, Button } from '../../components/ui';
import { useAuth } from '../../context/AuthContext';
import shellLogo from '../../assets/images/shell-logo.webp';
import './RateEmployer.css';

// Mock companies for search
const COMPANIES = [
  { id: 1, name: 'Shell Petroleum Company', industry: 'Oil and Gas', logo: shellLogo },
  { id: 2, name: 'Chevron Nigeria', industry: 'Oil and Gas', logo: shellLogo },
  { id: 3, name: 'Total Energies', industry: 'Oil and Gas', logo: shellLogo },
  { id: 4, name: 'Dangote Industries', industry: 'Manufacturing', logo: shellLogo },
  { id: 5, name: 'Julius Berger', industry: 'Construction', logo: shellLogo },
  { id: 6, name: 'NNPC', industry: 'Oil and Gas', logo: shellLogo },
  { id: 7, name: 'Schlumberger', industry: 'Oil and Gas Services', logo: shellLogo },
  { id: 8, name: 'Lafarge Africa', industry: 'Building Materials', logo: shellLogo },
  { id: 9, name: 'ExxonMobil', industry: 'Oil and Gas', logo: shellLogo },
  { id: 10, name: 'Halliburton', industry: 'Oil and Gas Services', logo: shellLogo },
];

const SALARY_RANGES = [
  { value: '', label: 'Select salary range' },
  { value: '0-100k', label: '₦0 - ₦100,000' },
  { value: '100k-200k', label: '₦100,000 - ₦200,000' },
  { value: '200k-300k', label: '₦200,000 - ₦300,000' },
  { value: '300k-500k', label: '₦300,000 - ₦500,000' },
  { value: '500k-1m', label: '₦500,000 - ₦1,000,000' },
  { value: '1m+', label: '₦1,000,000+' },
];

const RATINGS = [
  { value: '', label: 'Select rating' },
  { value: '1', label: '1 - Poor' },
  { value: '2', label: '2 - Fair' },
  { value: '3', label: '3 - Good' },
  { value: '4', label: '4 - Very Good' },
  { value: '5', label: '5 - Excellent' },
];

const FEEDBACK_MAX_LENGTH = 500;

export function RateEmployer() {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [formData, setFormData] = useState({
    companyId: null as number | null,
    companyName: '',
    fullName: user?.profile?.fullName || '',
    email: user?.profile?.email || '',
    salary: '',
    role: '',
    feedback: '',
    rating: '',
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Filter companies based on search term
  const filteredCompanies = useMemo(() => {
    if (!searchTerm.trim()) return [];
    const term = searchTerm.toLowerCase();
    return COMPANIES.filter(company =>
      company.name.toLowerCase().includes(term)
    ).slice(0, 5);
  }, [searchTerm]);

  const handleCompanySelect = (company: typeof COMPANIES[0]) => {
    setFormData({
      ...formData,
      companyId: company.id,
      companyName: company.name,
    });
    setSearchTerm(company.name);
    setShowDropdown(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setShowDropdown(value.length > 0);
    // Clear company selection if search term changes
    if (formData.companyName && value !== formData.companyName) {
      setFormData({ ...formData, companyId: null, companyName: '' });
    }
  };

  const handleFindCompany = () => {
    if (filteredCompanies.length === 1) {
      handleCompanySelect(filteredCompanies[0]);
    } else if (filteredCompanies.length > 0) {
      setShowDropdown(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Review submitted:', formData);
    // Show success modal
    setShowSuccessModal(true);
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    navigate('/reviews');
  };

  const handleSubmitAnother = () => {
    setShowSuccessModal(false);
    setFormData({
      companyId: null,
      companyName: '',
      fullName: user?.profile?.fullName || '',
      email: user?.profile?.email || '',
      salary: '',
      role: '',
      feedback: '',
      rating: '',
    });
    setSearchTerm('');
  };

  const feedbackLength = formData.feedback.length;
  const feedbackRemaining = FEEDBACK_MAX_LENGTH - feedbackLength;

  return (
    <DashboardLayout>
      <div className="rate-employer-page">
        <div className="rate-employer__container">
            <div className="rate-employer__header">
                <h1>Rate your current or previous employers</h1>
                <p>Help your employers grow their rating and reach.</p>
            </div>

            <div className="rate-employer__search">
                <label className="rate-employer__search-label">Company name</label>
                <div className="rate-employer__search-input-group">
                    <div className="rate-employer__search-wrapper">
                        <svg className="rate-employer__search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                             <circle cx="11" cy="11" r="8"></circle>
                             <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                        <input 
                          type="text" 
                          className="rate-employer__search-input" 
                          placeholder="Search by company name..."
                          value={searchTerm}
                          onChange={handleSearchChange}
                          onFocus={() => searchTerm && setShowDropdown(true)}
                        />
                        {showDropdown && filteredCompanies.length > 0 && (
                          <div className="rate-employer__dropdown">
                            {filteredCompanies.map(company => (
                              <div 
                                key={company.id}
                                className="rate-employer__dropdown-item"
                                onClick={() => handleCompanySelect(company)}
                              >
                                <img src={company.logo} alt={company.name} />
                                <div>
                                  <span className="name">{company.name}</span>
                                  <span className="industry">{company.industry}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                    </div>
                    <button className="btn-find-company" onClick={handleFindCompany} type="button">
                      Find Company
                    </button>
                </div>
            </div>

            <div className="rate-employer__details">
                <h2>Company Details</h2>
                <form className="rate-employer__form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Company Name</label>
                        <input 
                          type="text" 
                          className="form-input" 
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          placeholder="Select a company from search above"
                          readOnly={!!formData.companyId}
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label">Your Full Name</label>
                            <input 
                              type="text" 
                              className="form-input" 
                              value={formData.fullName}
                              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                              placeholder="Enter your full name"
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Email Address</label>
                            <input 
                              type="email" 
                              className="form-input" 
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="Enter your email address"
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label">Salary Range</label>
                            <select 
                              className="form-select"
                              value={formData.salary}
                              onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                            >
                              {SALARY_RANGES.map(range => (
                                <option key={range.value} value={range.value}>{range.label}</option>
                              ))}
                            </select>
                        </div>
                         <div className="form-group">
                            <label className="form-label">Current / Previous Role</label>
                            <input 
                              type="text" 
                              className="form-input" 
                              value={formData.role}
                              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                              placeholder="e.g., Mechanical Engineer"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Feedback</label>
                        <textarea 
                          className="form-textarea" 
                          placeholder="Share your experience with this company... (max 500 characters)"
                          value={formData.feedback}
                          onChange={(e) => {
                            if (e.target.value.length <= FEEDBACK_MAX_LENGTH) {
                              setFormData({ ...formData, feedback: e.target.value });
                            }
                          }}
                          maxLength={FEEDBACK_MAX_LENGTH}
                        ></textarea>
                        <span className={`form-character-count ${feedbackRemaining < 50 ? 'warning' : ''}`}>
                          {feedbackRemaining} characters remaining
                        </span>
                    </div>

                    <div className="form-group">
                         <label className="form-label">Rate</label>
                         <select 
                           className="form-select"
                           value={formData.rating}
                           onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                         >
                           {RATINGS.map(rating => (
                             <option key={rating.value} value={rating.value}>{rating.label}</option>
                           ))}
                         </select>
                    </div>

                    <div className="rate-employer__footer">
                         <button type="submit" className="btn-submit-review">Submit Review</button>
                         <button type="button" className="btn-return-home" onClick={() => navigate('/reviews')}>Return home</button>
                    </div>
                </form>
            </div>
        </div>

        {/* Success Modal */}
        <Modal
          isOpen={showSuccessModal}
          onClose={handleCloseSuccessModal}
          title="Review Submitted!"
          footer={
            <>
              <Button variant="secondary" onClick={handleSubmitAnother}>Submit Another</Button>
              <Button onClick={handleCloseSuccessModal}>View Company Reviews</Button>
            </>
          }
        >
          <div className="success-modal-content">
            <div className="success-modal__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h3>Thank you for your feedback!</h3>
            <p>Your review for <strong>{formData.companyName}</strong> has been submitted successfully. It will be reviewed and published shortly.</p>
          </div>
        </Modal>
      </div>
    </DashboardLayout>
  );
}
