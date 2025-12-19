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
    title: 'Civil Engineer',
    company: 'Julius Berger',
    logo: shellLogo,
    location: 'Abuja Nigeria',
    type: 'Full-time',
    salary: '₦250,000-₦350,000',
    description: 'Join our construction team as a Civil Engineer working on major infrastructure projects...',
    tags: ['Construction', 'Project Management', 'CAD'],
    status: 'applied',
    date: '12/09/2025',
  },
  {
    id: '3',
    title: 'Electrical Engineer',
    company: 'Dangote Industries',
    logo: shellLogo,
    location: 'Lagos Nigeria',
    type: 'Contract',
    salary: '₦180,000-₦280,000',
    description: 'Seeking an experienced Electrical Engineer for our manufacturing facility...',
    tags: ['Electrical Systems', 'PLC', 'Maintenance'],
    status: 'applied',
    date: '12/08/2025',
  },
  {
    id: '4',
    title: 'Process Engineer',
    company: 'Chevron Nigeria',
    logo: shellLogo,
    location: 'Port Harcourt',
    type: 'Full-time',
    salary: '₦300,000-₦450,000',
    description: 'Looking for a Process Engineer to optimize our production processes...',
    tags: ['Process Optimization', 'Oil & Gas', 'HAZOP'],
    status: 'applied',
    date: '12/07/2025',
  },
  {
    id: '5',
    title: 'Safety Engineer',
    company: 'Total Energies',
    logo: shellLogo,
    location: 'Lagos Nigeria',
    type: 'Full-time',
    salary: '₦220,000-₦320,000',
    description: 'Join our team as a Safety Engineer ensuring HSE compliance...',
    tags: ['HSE', 'Risk Assessment', 'Compliance'],
    status: 'applied',
    date: '12/06/2025',
  },
  {
    id: '6',
    title: 'Chemical Engineer',
    company: 'Lafarge Africa',
    logo: shellLogo,
    location: 'Ogun State',
    type: 'Full-time',
    salary: '₦200,000-₦300,000',
    description: 'We are seeking a Chemical Engineer for our cement production facility...',
    tags: ['Chemical Processing', 'Quality Control', 'Production'],
    status: 'applied',
    date: '12/05/2025',
  },
  {
    id: '7',
    title: 'Petroleum Engineer',
    company: 'ExxonMobil',
    logo: shellLogo,
    location: 'Lagos Nigeria',
    type: 'Full-time',
    salary: '₦400,000-₦600,000',
    description: 'Seeking an experienced Petroleum Engineer for drilling operations...',
    tags: ['Drilling', 'Reservoir', 'Production Engineering'],
    status: 'applied',
    date: '12/04/2025',
  },
  {
    id: '8',
    title: 'Structural Engineer',
    company: 'CCECC Nigeria',
    logo: shellLogo,
    location: 'Abuja Nigeria',
    type: 'Contract',
    salary: '₦280,000-₦380,000',
    description: 'Join our team working on major railway infrastructure projects...',
    tags: ['Structural Design', 'STAAD Pro', 'Civil Works'],
    status: 'applied',
    date: '12/03/2025',
  },
  {
    id: '9',
    title: 'Software Engineer',
    company: 'Andela',
    logo: shellLogo,
    location: 'Remote',
    type: 'Full-time',
    salary: '₦500,000-₦800,000',
    description: 'Build innovative software solutions with our global engineering team...',
    tags: ['React', 'Node.js', 'TypeScript'],
    status: 'saved',
    date: '12/02/2025',
  },
  {
    id: '10',
    title: 'Data Engineer',
    company: 'Flutterwave',
    logo: shellLogo,
    location: 'Lagos Nigeria',
    type: 'Full-time',
    salary: '₦450,000-₦700,000',
    description: 'Design and build data pipelines for our fintech platform...',
    tags: ['Python', 'AWS', 'Data Pipelines'],
    status: 'saved',
    date: '12/01/2025',
  },
];

const ITEMS_PER_PAGE = 5;

export function MyApplications() {
  const [activeTab, setActiveTab] = useState<TabType>('applied');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter jobs by tab
  const filteredJobs = mockJobs.filter((job) => job.status === activeTab);
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedJobs = filteredJobs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Reset to page 1 when changing tabs
  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    for (let i = 1; i <= Math.min(totalPages, 6); i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <DashboardLayout>
      <div className="my-applications">
        <div className="my-applications__container">
          <h1>My Applications</h1>

          <div className="my-applications__tabs">
            <button
              className={`my-applications__tab ${activeTab === 'saved' ? 'my-applications__tab--active' : ''}`}
              onClick={() => handleTabChange('saved')}
            >
              Saved ({mockJobs.filter(j => j.status === 'saved').length})
            </button>
            <button
              className={`my-applications__tab ${activeTab === 'applied' ? 'my-applications__tab--active' : ''}`}
              onClick={() => handleTabChange('applied')}
            >
              Applied ({mockJobs.filter(j => j.status === 'applied').length})
            </button>
            <button
              className={`my-applications__tab ${activeTab === 'interview' ? 'my-applications__tab--active' : ''}`}
              onClick={() => handleTabChange('interview')}
            >
              Interview ({mockJobs.filter(j => j.status === 'interview').length})
            </button>
          </div>

          <div className="my-applications__list">
            {paginatedJobs.length > 0 ? (
              paginatedJobs.map((job) => (
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
                <p>No {activeTab} jobs yet</p>
                <Link to="/jobs">Find Jobs</Link>
              </div>
            )}
          </div>

          {filteredJobs.length > 0 && (
            <div className="my-applications__pagination">
              {getPageNumbers().map((page) => (
                <button
                  key={page}
                  className={`my-applications__page ${currentPage === page ? 'my-applications__page--active' : ''}`}
                  onClick={() => typeof page === 'number' && handlePageChange(page)}
                  disabled={typeof page === 'string'}
                >
                  {page}
                </button>
              ))}
              <button 
                className="my-applications__page"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage >= totalPages}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          )}

          <Link to="/jobs" className="my-applications__return">
            Browse more jobs
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
}
