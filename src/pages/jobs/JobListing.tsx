import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DashboardLayout } from '../../components/layout';
import { Button } from '../../components/ui';
import shellLogo from '../../assets/images/shell-logo.webp';
import './JobListing.css';

// Mock Data
const JOBS = [
  {
    id: 1,
    title: 'Mechanical Engineer',
    company: 'Shell Petroleum Company',
    logo: shellLogo,
    location: 'Lagos Nigeria',
    type: 'Full-time',
    salary: '₦120,000 - ₦300,000',
    description: 'We are looking for a highly skilled Mechanical Engineer to join our innovative team in Lagos Nigeria...',
    fullDescription: 'We are looking for a skilled Maintenance Engineer to oversee the maintenance, repair, and optimization of equipment and facilities within our construction and oil & gas operations. The role ensures minimal downtime, compliance with safety standards, and supports operational efficiency through preventive and corrective maintenance.',
    qualifications: [
        'Minimum Qualification : Degree',
        'Experience Level : Executive level',
        'Experience Length : 10 years'
    ],
    tags: ['AWS', 'Machine Learning', 'Automation'],
    posted: 'Today'
  },
  {
    id: 2,
    title: 'Senior Safety Engineer',
    company: 'Shell Petroleum Company',
    logo: shellLogo,
    location: 'Lagos Nigeria',
    type: 'Full-time',
    salary: '₦200,000 - ₦400,000',
    description: 'We are seeking an experienced Safety Engineer to ensure compliance with all safety regulations...',
    fullDescription: 'Detailed description for safety engineer...',
    qualifications: [
        'Minimum Qualification : Degree',
        'Experience Level : Senior level',
        'Experience Length : 5 years'
    ],
    tags: ['Safety', 'Compliance', 'Risk Management'],
    posted: 'Yesterday'
  },
   {
    id: 3,
    title: 'Process Engineer',
    company: 'Shell Petroleum Company',
    logo: shellLogo,
    location: 'Port Harcourt',
    type: 'Contract',
    salary: '₦150,000 - ₦350,000',
    description: 'Join our team as a Process Engineer to optimize our production workflows...',
    fullDescription: 'Detailed description for process engineer...',
    qualifications: [
        'Minimum Qualification : HND/Degree',
        'Experience Level : Mid level',
        'Experience Length : 3 years'
    ],
    tags: ['Process', 'Optimization', 'Chemical'],
    posted: '2 days ago'
  },
  {
    id: 4,
    title: 'Mechanical Engineer',
    company: 'Shell Petroleum Company',
    logo: shellLogo,
    location: 'Lagos Nigeria',
    type: 'Full-time',
    salary: '₦120,000 - ₦300,000',
    description: 'We are looking for a highly skilled Mechanical Engineer to join our innovative team in Lagos Nigeria...',
        fullDescription: 'We are looking for a skilled Maintenance Engineer to oversee the maintenance, repair, and optimization of equipment and facilities within our construction and oil & gas operations. The role ensures minimal downtime, compliance with safety standards, and supports operational efficiency through preventive and corrective maintenance.',
    qualifications: [
        'Minimum Qualification : Degree',
        'Experience Level : Executive level',
        'Experience Length : 10 years'
    ],
    tags: ['AWS', 'Machine Learning', 'Automation'],
    posted: 'Today'
  },
  {
    id: 5,
    title: 'Mechanical Engineer',
    company: 'Shell Petroleum Company',
    logo: shellLogo,
    location: 'Lagos Nigeria',
    type: 'Full-time',
    salary: '₦120,000 - ₦300,000',
    description: 'We are looking for a highly skilled Mechanical Engineer to join our innovative team in Lagos Nigeria...',
        fullDescription: 'We are looking for a skilled Maintenance Engineer to oversee the maintenance, repair, and optimization of equipment and facilities within our construction and oil & gas operations. The role ensures minimal downtime, compliance with safety standards, and supports operational efficiency through preventive and corrective maintenance.',
    qualifications: [
        'Minimum Qualification : Degree',
        'Experience Level : Executive level',
        'Experience Length : 10 years'
    ],
    tags: ['AWS', 'Machine Learning', 'Automation'],
    posted: 'Today'
  }
];


// Filter Modal Component
function FilterModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    const [selectedFilters, setSelectedFilters] = useState<{[key: string]: string[]}>({
        company: [],
        jobType: [],
        location: [],
        date: []
    });

    const toggleFilter = (category: string, value: string) => {
        setSelectedFilters(prev => {
            const current = prev[category] || [];
            if (current.includes(value)) {
                return { ...prev, [category]: current.filter(v => v !== value) };
            } else {
                return { ...prev, [category]: [...current, value] };
            }
        });
    };

    if (!isOpen) return null;

    return (
        <div className="filter-modal-overlay" onClick={onClose}>
            <div className="filter-modal" onClick={e => e.stopPropagation()}>
                <div className="filter-modal__header">
                    <h3>Filters</h3>
                    <button className="filter-modal__close" onClick={onClose}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
                <div className="filter-modal__body">
                    <div className="filter-modal__section">
                        <h4>Company</h4>
                        <div className="filter-modal__options">
                            {['Shell', 'Chevron', 'ExxonMobil', 'Total', 'NNPC'].map(option => (
                                <span 
                                    key={option} 
                                    className={`filter-modal__option ${selectedFilters.company.includes(option) ? 'selected' : ''}`}
                                    onClick={() => toggleFilter('company', option)}
                                >
                                    {option}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="filter-modal__section">
                        <h4>Job Type</h4>
                        <div className="filter-modal__options">
                            {['Full-time', 'Part-time', 'Contract', 'Internship', 'Remote'].map(option => (
                                <span 
                                    key={option} 
                                    className={`filter-modal__option ${selectedFilters.jobType.includes(option) ? 'selected' : ''}`}
                                    onClick={() => toggleFilter('jobType', option)}
                                >
                                    {option}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="filter-modal__section">
                        <h4>Location</h4>
                        <div className="filter-modal__options">
                            {['Lagos', 'Abuja', 'Port Harcourt', 'Warri', 'Remote'].map(option => (
                                <span 
                                    key={option} 
                                    className={`filter-modal__option ${selectedFilters.location.includes(option) ? 'selected' : ''}`}
                                    onClick={() => toggleFilter('location', option)}
                                >
                                    {option}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="filter-modal__section">
                        <h4>Date Posted</h4>
                        <div className="filter-modal__options">
                            {['Today', 'Last 7 days', 'Last 30 days', 'All time'].map(option => (
                                <span 
                                    key={option} 
                                    className={`filter-modal__option ${selectedFilters.date.includes(option) ? 'selected' : ''}`}
                                    onClick={() => toggleFilter('date', option)}
                                >
                                    {option}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="filter-modal__footer">
                    <button className="filter-modal__clear" onClick={() => setSelectedFilters({ company: [], jobType: [], location: [], date: [] })}>
                        Clear All
                    </button>
                    <button className="filter-modal__apply" onClick={onClose}>
                        Apply Filters
                    </button>
                </div>
            </div>
        </div>
    );
}

export function JobListing() {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="job-listing-page">
        {/* Search Bar */}
        <div className="job-listing__search-bar">
            <div className="job-listing__search-inputs">
                <div className="job-listing__search-input-group">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <input type="text" placeholder="Search jobs, companies, or keywords..." />
                </div>
                <button 
                    className="job-listing__filter-trigger"
                    onClick={() => setIsFilterModalOpen(true)}
                    aria-label="Filters"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                    </svg>
                    <span className="filter-text">Filters</span>
                </button>
                <Button size="md">Find Jobs</Button>
            </div>
        </div>

        {/* Filter Modal */}
        <FilterModal isOpen={isFilterModalOpen} onClose={() => setIsFilterModalOpen(false)} />

        <div className="job-listing__content" style={{ display: 'block' }}>
            {/* Job List */}
            <div className="job-listing__list" style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
                {JOBS.map((job) => (
                    <div 
                        key={job.id} 
                        className="job-card"
                        onClick={() => navigate(`/jobs/${job.id}`)}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="job-card__header">
                             <img src={job.logo} alt={job.company} className="job-card__logo" />
                             <div className="job-card__info">
                                 <h3>{job.title}</h3>
                                 <p>{job.company}</p>
                             </div>
                             <button className="job-card__save-btn" onClick={(e) => e.stopPropagation()}>
                                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                     <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                 </svg>
                             </button>
                        </div>
                        
                        <div className="job-card__meta">
                            <span className="job-card__meta-item">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                {job.location}
                            </span>
                            <span className="job-card__meta-item">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                                {job.type}
                            </span>
                             <span className="job-card__meta-item">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                                {job.salary}
                            </span>
                        </div>

                        <p className="job-card__desc">{job.description}</p>

                        <div className="job-card__tags">
                            {job.tags.map(tag => (
                                <span key={tag} className="job-tag">{tag}</span>
                            ))}
                        </div>

                        <div className="job-card__actions">
                             <button className="job-card__apply-btn" onClick={(e) => { e.stopPropagation(); navigate(`/jobs/${job.id}`); }}>
                                 Apply Now
                             </button>
                        </div>
                    </div>
                ))}
                 <div className="job-listing__pagination">
                     <button className="page-btn active">1</button>
                     <button className="page-btn">2</button>
                     <button className="page-btn">3</button>
                     <button className="page-btn">4</button>
                     <button className="page-btn">...</button>
                     <button className="page-btn">{'>'}</button>
                 </div>
            </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
