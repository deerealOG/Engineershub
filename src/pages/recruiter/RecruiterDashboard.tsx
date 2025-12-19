import React from 'react';
import { Link } from 'react-router-dom';
import { DashboardLayout } from '../../components/layout';
import './RecruiterDashboard.css';

const STATS = [
  { 
    label: 'Active Jobs', 
    value: 12, 
    trend: '+2', 
    trendUp: true, 
    icon: 'briefcase', 
    color: 'blue' 
  },
  { 
    label: 'Total Applicants', 
    value: 248, 
    trend: '+34', 
    trendUp: true, 
    icon: 'users', 
    color: 'green' 
  },
  { 
    label: 'New This Week', 
    value: 45, 
    trend: '+12', 
    trendUp: true, 
    icon: 'inbox', 
    color: 'orange' 
  },
  { 
    label: 'Total Views', 
    value: '2.4K', 
    trend: '-5%', 
    trendUp: false, 
    icon: 'eye', 
    color: 'purple' 
  }
];

const ACTIVE_JOBS = [
  { 
    id: 1, 
    title: 'Mechanical Engineer', 
    location: 'Lagos, Nigeria', 
    type: 'Full-time',
    applicants: 45, 
    views: 312, 
    status: 'active' 
  },
  { 
    id: 2, 
    title: 'Senior Safety Engineer', 
    location: 'Port Harcourt', 
    type: 'Full-time',
    applicants: 32, 
    views: 245, 
    status: 'active' 
  },
  { 
    id: 3, 
    title: 'Process Engineer', 
    location: 'Lagos, Nigeria', 
    type: 'Contract',
    applicants: 28, 
    views: 189, 
    status: 'active' 
  }
];

const RECENT_APPLICANTS = [
  { 
    id: 1, 
    name: 'Adebayo Okonkwo', 
    position: 'Mechanical Engineer',
    job: 'Mechanical Engineer', 
    date: '2 hours ago' 
  },
  { 
    id: 2, 
    name: 'Chidinma Nwosu', 
    position: 'Safety Specialist',
    job: 'Senior Safety Engineer', 
    date: '5 hours ago' 
  },
  { 
    id: 3, 
    name: 'Emmanuel Ibrahim', 
    position: 'Process Engineer',
    job: 'Process Engineer', 
    date: 'Yesterday' 
  },
  { 
    id: 4, 
    name: 'Folake Adeyemi', 
    position: 'Maintenance Engineer',
    job: 'Mechanical Engineer', 
    date: 'Yesterday' 
  }
];

const getIcon = (icon: string) => {
  const icons: Record<string, React.ReactNode> = {
    briefcase: <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16M2 7h20v12a2 2 0 01-2 2H4a2 2 0 01-2-2V7z" />,
    users: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></>,
    inbox: <><polyline points="22 12 16 12 14 15 10 15 8 12 2 12" /><path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z" /></>,
    eye: <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></>
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
      {icons[icon]}
    </svg>
  );
};

export function RecruiterDashboard() {
  return (
    <DashboardLayout>
      <div className="recruiter-dashboard">
        {/* Header */}
        <div className="recruiter-dashboard__header">
          <h1>Recruiter Dashboard</h1>
          <p>Welcome back! Here's what's happening with your job listings.</p>
        </div>

        {/* Stats */}
        <div className="recruiter-stats">
          {STATS.map((stat, index) => (
            <div key={index} className="recruiter-stat-card">
              <div className="recruiter-stat-card__header">
                <div className={`recruiter-stat-card__icon ${stat.color}`}>
                  {getIcon(stat.icon)}
                </div>
                <span className={`recruiter-stat-card__trend ${stat.trendUp ? 'up' : 'down'}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {stat.trendUp ? (
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    ) : (
                      <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
                    )}
                  </svg>
                  {stat.trend}
                </span>
              </div>
              <div className="recruiter-stat-card__value">{stat.value}</div>
              <div className="recruiter-stat-card__label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="recruiter-dashboard__grid">
          {/* Main Content */}
          <div className="recruiter-dashboard__main">
            {/* Active Jobs */}
            <div className="recruiter-section">
              <div className="recruiter-section__header">
                <h2>Active Job Listings</h2>
                <Link to="/recruiter/jobs" className="recruiter-section__link">
                  View All
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              {ACTIVE_JOBS.map(job => (
                <div key={job.id} className="recruiter-job-card">
                  <div className="recruiter-job-card__info">
                    <h3>{job.title}</h3>
                    <div className="recruiter-job-card__meta">
                      <span>{job.location}</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <div className="recruiter-job-card__stats">
                    <div className="recruiter-job-card__stat">
                      <div className="recruiter-job-card__stat-value">{job.applicants}</div>
                      <div className="recruiter-job-card__stat-label">Applicants</div>
                    </div>
                    <div className="recruiter-job-card__stat">
                      <div className="recruiter-job-card__stat-value">{job.views}</div>
                      <div className="recruiter-job-card__stat-label">Views</div>
                    </div>
                  </div>
                  <span className={`recruiter-job-card__status ${job.status}`}>
                    {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                  </span>
                </div>
              ))}
            </div>

            {/* Recent Applicants */}
            <div className="recruiter-section">
              <div className="recruiter-section__header">
                <h2>Recent Applicants</h2>
                <Link to="/recruiter/applicants" className="recruiter-section__link">
                  View All
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              {RECENT_APPLICANTS.map(applicant => (
                <div key={applicant.id} className="recruiter-applicant-card">
                  <div className="recruiter-applicant-card__avatar">
                    {applicant.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="recruiter-applicant-card__info">
                    <h4>{applicant.name}</h4>
                    <p>{applicant.position} • {applicant.date}</p>
                    <span className="recruiter-applicant-card__job">Applied for: {applicant.job}</span>
                  </div>
                  <div className="recruiter-applicant-card__actions">
                    <button className="recruiter-applicant-card__action" title="View Profile">
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </button>
                    <button className="recruiter-applicant-card__action" title="Message">
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="recruiter-dashboard__sidebar">
            {/* Quick Actions */}
            <div className="recruiter-section">
              <div className="recruiter-section__header">
                <h2>Quick Actions</h2>
              </div>
              <div className="recruiter-quick-actions">
                <Link to="/recruiter/jobs/new" className="recruiter-quick-action">
                  <div className="recruiter-quick-action__icon">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </div>
                  <div className="recruiter-quick-action__info">
                    <h3>Post a New Job</h3>
                    <p>Create a new job listing</p>
                  </div>
                </Link>
                <Link to="/recruiter/applicants" className="recruiter-quick-action">
                  <div className="recruiter-quick-action__icon">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                    </svg>
                  </div>
                  <div className="recruiter-quick-action__info">
                    <h3>Review Applicants</h3>
                    <p>View pending applications</p>
                  </div>
                </Link>
                <Link to="/recruiter/jobs" className="recruiter-quick-action">
                  <div className="recruiter-quick-action__icon">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                    </svg>
                  </div>
                  <div className="recruiter-quick-action__info">
                    <h3>Manage Jobs</h3>
                    <p>Edit your job listings</p>
                  </div>
                </Link>
                <Link to="/messages" className="recruiter-quick-action">
                  <div className="recruiter-quick-action__icon">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                    </svg>
                  </div>
                  <div className="recruiter-quick-action__info">
                    <h3>Messages</h3>
                    <p>Chat with candidates</p>
                  </div>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </DashboardLayout>
  );
}
