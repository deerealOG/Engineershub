import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DashboardLayout } from '../../components/layout';
import shellLogo from '../../assets/images/shell-logo.webp';
import emptySaved from '../../assets/images/empty-state-saved.webp';
import emptyInterview from '../../assets/images/empty-state-interview.webp';
import './MyApplications.css';

type TabType = 'saved' | 'applied' | 'interview';

interface Job {
  id: string;
  title: string;
  company: string;
  logo: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  tags: string[];
  status: 'applied' | 'interview' | 'saved';
  date: string;
}

const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Mechanical Engineer',
    company: 'Shell Petroleum Company',
    logo: shellLogo,
    location: 'Lagos Nigeria',
    type: 'Full-time',
    salary: '₦200,000-₦300,000',
    description: 'We are looking for a highly skilled Mechanical Engineer to join our innovative team in Lagos Nigeria...',
    tags: ['AWS', 'Machine Learning', 'Automation'],
    status: 'applied',
    date: '12/10/2025',
  },
  {
    id: '2',
    title: 'Mechanical Engineer',
    company: 'Shell Petroleum Company',
    logo: shellLogo,
    location: 'Lagos Nigeria',
    type: 'Full-time',
    salary: '₦20,000-₦300,000',
    description: 'We are looking for a highly skilled Mechanical Engineer to join our innovative team in Lagos Nigeria...',
    tags: ['AWS', 'Machine Learning', 'Automation'],
    status: 'applied',
    date: '12/10/2025',
  },
];

export function MyApplications() {
  const [activeTab, setActiveTab] = useState<TabType>('applied');
  const [currentPage] = useState(1);

  const filteredJobs = mockJobs.filter((job) => job.status === activeTab);

  return (
    <DashboardLayout>
      <div className="my-applications">
        <div className="my-applications__container">
          <h1>My Applications</h1>

          <div className="my-applications__tabs">
            <button
              className={`my-applications__tab ${activeTab === 'saved' ? 'my-applications__tab--active' : ''}`}
              onClick={() => setActiveTab('saved')}
            >
              Saved
            </button>
            <button
              className={`my-applications__tab ${activeTab === 'applied' ? 'my-applications__tab--active' : ''}`}
              onClick={() => setActiveTab('applied')}
            >
              Applied
            </button>
            <button
              className={`my-applications__tab ${activeTab === 'interview' ? 'my-applications__tab--active' : ''}`}
              onClick={() => setActiveTab('interview')}
            >
              Interview
            </button>
          </div>

          <div className="my-applications__list">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div key={job.id} className="job-card">
                  <div className="job-card__header">
                    <div className="job-card__company">
                      <img src={job.logo} alt={job.company} className="job-card__logo" />
                      <div className="job-card__info">
                        <h3 className="job-card__title">{job.title}</h3>
                        <p className="job-card__company-name">{job.company}</p>
                      </div>
                    </div>
                    <span className="job-card__date">{job.date}</span>
                  </div>

                  <div className="job-card__meta">
                    <span className="job-card__meta-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {job.location}
                    </span>
                    <span className="job-card__meta-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                      {job.type}
                    </span>
                    <span className="job-card__meta-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="12" y1="1" x2="12" y2="23" />
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                      {job.salary}
                    </span>
                  </div>

                  <p className="job-card__description">{job.description}</p>

                  <div className="job-card__tags">
                    {job.tags.map((tag) => (
                      <span key={tag} className="job-card__tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className={`job-card__status job-card__status--${job.status}`}>
                    {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                  </span>
                </div>
              ))
            ) : (
              <div className="my-applications__empty">
                <img
                  src={activeTab === 'saved' ? emptySaved : emptyInterview}
                  alt={`No ${activeTab} applications`}
                />
                <p>No {activeTab} yet</p>
                <Link to="/">Find Jobs</Link>
              </div>
            )}
          </div>

          <div className="my-applications__pagination">
            {[1, 2, 3, 4, 5, 6].map((page) => (
              <button
                key={page}
                className={`my-applications__page ${currentPage === page ? 'my-applications__page--active' : ''}`}
              >
                {page}
              </button>
            ))}
            <button className="my-applications__page">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          <Link to="/" className="my-applications__return">
            Return home
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
}
