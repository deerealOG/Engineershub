import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DashboardLayout } from '../../components/layout';
import { Modal } from '../../components/ui';
import './ManageJobs.css';

type JobStatus = 'all' | 'active' | 'closed' | 'draft';

interface Job {
  id: number;
  title: string;
  location: string;
  type: string;
  applicants: number;
  views: number;
  status: 'active' | 'closed' | 'draft';
  postedDate: string;
}

const INITIAL_JOBS: Job[] = [
  { id: 1, title: 'Mechanical Engineer', location: 'Lagos, Nigeria', type: 'Full-time', applicants: 45, views: 312, status: 'active', postedDate: 'Dec 10, 2025' },
  { id: 2, title: 'Senior Safety Engineer', location: 'Port Harcourt', type: 'Full-time', applicants: 32, views: 245, status: 'active', postedDate: 'Dec 8, 2025' },
  { id: 3, title: 'Process Engineer', location: 'Lagos, Nigeria', type: 'Contract', applicants: 28, views: 189, status: 'active', postedDate: 'Dec 5, 2025' },
  { id: 4, title: 'Electrical Engineer', location: 'Abuja', type: 'Full-time', applicants: 18, views: 156, status: 'active', postedDate: 'Dec 1, 2025' },
  { id: 5, title: 'Civil Engineer', location: 'Lagos, Nigeria', type: 'Full-time', applicants: 0, views: 0, status: 'draft', postedDate: '-' },
  { id: 6, title: 'Project Manager', location: 'Port Harcourt', type: 'Full-time', applicants: 67, views: 534, status: 'closed', postedDate: 'Nov 15, 2025' },
];

export function ManageJobs() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState(INITIAL_JOBS);
  const [activeTab, setActiveTab] = useState<JobStatus>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [jobToDelete, setJobToDelete] = useState<Job | null>(null);

  const filteredJobs = jobs.filter(job => {
    const matchesTab = activeTab === 'all' || job.status === activeTab;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const counts = {
    all: jobs.length,
    active: jobs.filter(j => j.status === 'active').length,
    closed: jobs.filter(j => j.status === 'closed').length,
    draft: jobs.filter(j => j.status === 'draft').length
  };

  const handleEdit = (job: Job) => {
    // Navigate to edit page (reusing PostJob with job data)
    navigate(`/recruiter/jobs/new?edit=${job.id}`);
  };

  const handleDuplicate = (job: Job) => {
    const newJob: Job = {
      ...job,
      id: Date.now(),
      title: `${job.title} (Copy)`,
      applicants: 0,
      views: 0,
      status: 'draft',
      postedDate: '-'
    };
    setJobs(prev => [...prev, newJob]);
  };

  const openDeleteModal = (job: Job) => {
    setJobToDelete(job);
    setShowDeleteModal(true);
  };

  const handleDelete = () => {
    if (jobToDelete) {
      setJobs(prev => prev.filter(j => j.id !== jobToDelete.id));
      setShowDeleteModal(false);
      setJobToDelete(null);
    }
  };

  return (
    <DashboardLayout>
      <div className="manage-jobs">
        {/* Header */}
        <div className="manage-jobs__header">
          <div className="manage-jobs__header-info">
            <h1>Manage Jobs</h1>
            <p>View and manage all your job listings</p>
          </div>
          <Link to="/recruiter/jobs/new" className="manage-jobs__new-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Post New Job
          </Link>
        </div>

        {/* Filters */}
        <div className="manage-jobs__filters">
          <div className="manage-jobs__search">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select className="manage-jobs__filter-select">
            <option value="">All Locations</option>
            <option value="lagos">Lagos</option>
            <option value="port-harcourt">Port Harcourt</option>
            <option value="abuja">Abuja</option>
          </select>
          <select className="manage-jobs__filter-select">
            <option value="">All Types</option>
            <option value="full-time">Full-time</option>
            <option value="contract">Contract</option>
            <option value="part-time">Part-time</option>
          </select>
        </div>

        {/* Tabs */}
        <div className="manage-jobs__tabs">
          {(['all', 'active', 'closed', 'draft'] as JobStatus[]).map(tab => (
            <button
              key={tab}
              className={`manage-jobs__tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              <span className="manage-jobs__tab-count">{counts[tab]}</span>
            </button>
          ))}
        </div>

        {/* Jobs List */}
        <div className="manage-jobs__list">
          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => (
              <div key={job.id} className="manage-jobs__row">
                <div className="manage-jobs__row-info">
                  <h3>{job.title}</h3>
                  <div className="manage-jobs__row-meta">
                    <span>{job.location}</span>
                    <span>{job.type}</span>
                    <span>Posted: {job.postedDate}</span>
                  </div>
                </div>
                <div className="manage-jobs__row-stat">
                  <div className="manage-jobs__row-stat-value">{job.applicants}</div>
                  <div className="manage-jobs__row-stat-label">Applicants</div>
                </div>
                <div className="manage-jobs__row-stat">
                  <div className="manage-jobs__row-stat-value">{job.views}</div>
                  <div className="manage-jobs__row-stat-label">Views</div>
                </div>
                <span className={`manage-jobs__row-status ${job.status}`}>
                  {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                </span>
                <div className="manage-jobs__row-actions">
                  <Link to={`/recruiter/applicants?job=${job.id}`} className="manage-jobs__action-btn" title="View Applicants">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                    </svg>
                  </Link>
                  <button className="manage-jobs__action-btn" title="Edit" onClick={() => handleEdit(job)}>
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                      <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                  </button>
                  <button className="manage-jobs__action-btn" title="Duplicate" onClick={() => handleDuplicate(job)}>
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                    </svg>
                  </button>
                  <button className="manage-jobs__action-btn delete" title="Delete" onClick={() => openDeleteModal(job)}>
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                    </svg>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="manage-jobs__empty">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
              </svg>
              <h3>No jobs found</h3>
              <p>Create your first job listing to start receiving applications.</p>
              <Link to="/recruiter/jobs/new">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                Post a Job
              </Link>
            </div>
          )}
        </div>

        {/* Pagination */}
        {filteredJobs.length > 0 && (
          <div className="manage-jobs__pagination">
            <button className="manage-jobs__page-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button className="manage-jobs__page-btn active">1</button>
            <button className="manage-jobs__page-btn">2</button>
            <button className="manage-jobs__page-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        title="Delete Job Listing"
        footer={
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="manage-jobs__modal-btn secondary" onClick={() => setShowDeleteModal(false)}>
              Cancel
            </button>
            <button className="manage-jobs__modal-btn danger" onClick={handleDelete}>
              Delete
            </button>
          </div>
        }
      >
        <p style={{ color: 'var(--color-text-muted)' }}>
          Are you sure you want to delete <strong>{jobToDelete?.title}</strong>? This action cannot be undone.
        </p>
      </Modal>
    </DashboardLayout>
  );
}
