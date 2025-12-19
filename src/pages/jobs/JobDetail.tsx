import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DashboardLayout } from '../../components/layout';
import shellLogo from '../../assets/images/shell-logo.webp';
import './JobDetail.css';

// Mock job data
const JOB_DATA = {
  id: '1',
  title: 'Mechanical Engineer',
  company: 'Shell Petroleum Company',
  logo: shellLogo,
  location: 'Lagos, Nigeria',
  type: 'Full-time',
  salary: '₦200,000 - ₦400,000',
  postedDate: '2 days ago',
  deadline: 'December 31, 2025',
  experience: '3-5 years',
  description: `We are seeking a skilled Mechanical Engineer to join our innovative team in Lagos, Nigeria. The successful candidate will be responsible for designing, developing, and testing mechanical components and systems used in oil and gas production facilities.

This role offers an exciting opportunity to work on cutting-edge projects in one of the world's leading energy companies. You'll collaborate with cross-functional teams and have the chance to make a significant impact on our operations.`,
  responsibilities: [
    'Design and develop mechanical systems and components for oil & gas facilities',
    'Conduct feasibility studies and perform engineering calculations',
    'Prepare technical specifications, drawings, and reports',
    'Collaborate with project teams to ensure timely delivery of projects',
    'Ensure compliance with industry standards and safety regulations',
    'Perform root cause analysis and troubleshooting of mechanical systems',
    'Supervise installation and commissioning of mechanical equipment',
    'Mentor junior engineers and provide technical guidance'
  ],
  requirements: [
    'Bachelor\'s degree in Mechanical Engineering or related field',
    'Minimum 3-5 years of experience in oil & gas or similar industry',
    'Strong knowledge of CAD software (AutoCAD, SolidWorks)',
    'Familiarity with ASME, API, and other relevant standards',
    'Excellent problem-solving and analytical skills',
    'Strong communication and teamwork abilities',
    'Professional engineering certification is a plus'
  ],
  benefits: [
    'Competitive salary package',
    'Health insurance',
    'Pension contribution',
    'Performance bonus',
    'Professional development',
    'Flexible work arrangements'
  ],
  tags: ['Mechanical Engineering', 'Oil & Gas', 'CAD', 'Project Management'],
  companyInfo: {
    industry: 'Oil and Gas',
    employees: '10,000+',
    founded: '1907',
    website: 'www.shell.com.ng'
  }
};

const SIMILAR_JOBS = [
  {
    id: '2',
    title: 'Senior Safety Engineer',
    company: 'Shell Petroleum Company',
    logo: shellLogo,
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    salary: '₦250,000 - ₦500,000'
  },
  {
    id: '3',
    title: 'Process Engineer',
    company: 'Total Energies',
    logo: shellLogo,
    location: 'Port Harcourt, Nigeria',
    type: 'Contract',
    salary: '₦180,000 - ₦350,000'
  },
  {
    id: '4',
    title: 'Electrical Engineer',
    company: 'Chevron Nigeria',
    logo: shellLogo,
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    salary: '₦200,000 - ₦400,000'
  }
];

export function JobDetail() {
  const { id } = useParams();
  const [isSaved, setIsSaved] = useState(false);
  
  // In a real app, fetch job data based on id
  const job = JOB_DATA;

  return (
    <DashboardLayout>
      <div className="job-detail-page">
        <div className="job-detail-grid">
          {/* Main Content */}
          <div className="job-detail-main">
            {/* Header */}
            <header className="job-detail-header">
              <img src={job.logo} alt={job.company} className="job-detail-header__logo" />
              <div className="job-detail-header__info">
                <h1>{job.title}</h1>
                <Link to={`/company/${job.company}`} className="job-detail-header__company">
                  {job.company}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                    <path d="M15 3h6v6" />
                    <path d="M10 14L21 3" />
                  </svg>
                </Link>
                <div className="job-detail-header__meta">
                  <span className="job-detail-header__meta-item">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {job.location}
                  </span>
                  <span className="job-detail-header__meta-item">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                    </svg>
                    {job.type}
                  </span>
                  <span className="job-detail-header__meta-item">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                      <line x1="12" y1="1" x2="12" y2="23" />
                      <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                    </svg>
                    {job.salary}
                  </span>
                  <span className="job-detail-header__meta-item">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    Posted {job.postedDate}
                  </span>
                </div>
              </div>
              <div className="job-detail-header__actions">
                <button 
                  className={`job-detail-header__save-btn ${isSaved ? 'saved' : ''}`}
                  onClick={() => setIsSaved(!isSaved)}
                  aria-label={isSaved ? 'Unsave job' : 'Save job'}
                >
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
                  </svg>
                </button>
                <button className="job-detail-header__share-btn" aria-label="Share job">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                    <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8" />
                    <polyline points="16 6 12 2 8 6" />
                    <line x1="12" y1="2" x2="12" y2="15" />
                  </svg>
                </button>
              </div>
            </header>

            {/* Description */}
            <section className="job-detail-section">
              <h2>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <path d="M14 2v6h6" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                Job Description
              </h2>
              {job.description.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </section>

            {/* Responsibilities */}
            <section className="job-detail-section">
              <h2>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                </svg>
                Key Responsibilities
              </h2>
              <ul>
                {job.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Requirements */}
            <section className="job-detail-section">
              <h2>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                Requirements
              </h2>
              <ul>
                {job.requirements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Benefits */}
            <section className="job-detail-section">
              <h2>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Benefits
              </h2>
              <div className="job-detail-benefits">
                {job.benefits.map((benefit, i) => (
                  <div key={i} className="job-detail-benefit">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Tags */}
            <div className="job-detail-tags">
              {job.tags.map((tag, i) => (
                <span key={i} className="job-detail-tag">{tag}</span>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="job-detail-sidebar">
            {/* Apply Card */}
            <div className="job-detail-apply-card">
              <h3>Ready to Apply?</h3>
              <p>Application deadline: {job.deadline}</p>
              <Link to={`/jobs/${id}/apply`} className="job-detail-apply-btn">
                Apply Now
              </Link>
              <button className="job-detail-easy-apply">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Easy Apply with Saved CV
              </button>
              <p className="job-detail-apply-note">
                Your application will be sent directly to the hiring team.
              </p>
            </div>

            {/* Company Card */}
            <div className="job-detail-company-card">
              <div className="job-detail-company-card__header">
                <img src={job.logo} alt={job.company} className="job-detail-company-card__logo" />
                <div className="job-detail-company-card__info">
                  <h3>{job.company}</h3>
                  <p>{job.companyInfo.industry}</p>
                </div>
              </div>
              <div className="job-detail-company-card__stats">
                <div className="job-detail-company-stat">
                  <div className="job-detail-company-stat__value">{job.companyInfo.employees}</div>
                  <div className="job-detail-company-stat__label">Employees</div>
                </div>
                <div className="job-detail-company-stat">
                  <div className="job-detail-company-stat__value">{job.companyInfo.founded}</div>
                  <div className="job-detail-company-stat__label">Founded</div>
                </div>
              </div>
              <Link to={`/company/${job.company}`} className="job-detail-company-card__link">
                View Company Profile
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </aside>
        </div>

        {/* Similar Jobs */}
        <section className="job-detail-similar">
          <h2>Similar Jobs</h2>
          <div className="job-detail-similar__grid">
            {SIMILAR_JOBS.map(similarJob => (
              <div key={similarJob.id} className="job-detail-similar-card">
                <div className="job-detail-similar-card__header">
                  <img src={similarJob.logo} alt={similarJob.company} className="job-detail-similar-card__logo" />
                  <div className="job-detail-similar-card__info">
                    <h4>{similarJob.title}</h4>
                    <p>{similarJob.company}</p>
                  </div>
                </div>
                <div className="job-detail-similar-card__meta">
                  <span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {similarJob.location}
                  </span>
                  <span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                    </svg>
                    {similarJob.type}
                  </span>
                </div>
                <Link to={`/jobs/${similarJob.id}`} className="job-detail-similar-card__apply">
                  View Job
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
