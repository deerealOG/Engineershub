import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DashboardLayout } from '../../components/layout';
import { Modal } from '../../components/ui';
import './Applicants.css';

type PipelineStage = 'all' | 'new' | 'reviewed' | 'interview' | 'offer' | 'rejected';

interface Applicant {
  id: number;
  name: string;
  title: string;
  job: string;
  experience: string;
  location: string;
  appliedDate: string;
  rating: number;
  stage: Exclude<PipelineStage, 'all'>;
  email: string;
  phone: string;
}

const INITIAL_APPLICANTS: Applicant[] = [
  { id: 1, name: 'Adebayo Okonkwo', title: 'Mechanical Engineer', job: 'Mechanical Engineer', experience: '5 years', location: 'Lagos', appliedDate: '2 hours ago', rating: 5, stage: 'new', email: 'adebayo@email.com', phone: '+234 801 234 5678' },
  { id: 2, name: 'Chidinma Nwosu', title: 'Safety Specialist', job: 'Senior Safety Engineer', experience: '7 years', location: 'Port Harcourt', appliedDate: '5 hours ago', rating: 4, stage: 'new', email: 'chidinma@email.com', phone: '+234 802 345 6789' },
  { id: 3, name: 'Emmanuel Ibrahim', title: 'Process Engineer', job: 'Process Engineer', experience: '4 years', location: 'Lagos', appliedDate: 'Yesterday', rating: 4, stage: 'reviewed', email: 'emmanuel@email.com', phone: '+234 803 456 7890' },
  { id: 4, name: 'Folake Adeyemi', title: 'Maintenance Engineer', job: 'Mechanical Engineer', experience: '3 years', location: 'Lagos', appliedDate: 'Yesterday', rating: 3, stage: 'reviewed', email: 'folake@email.com', phone: '+234 804 567 8901' },
  { id: 5, name: 'Gbenga Ojo', title: 'Senior Engineer', job: 'Mechanical Engineer', experience: '8 years', location: 'Abuja', appliedDate: '2 days ago', rating: 5, stage: 'interview', email: 'gbenga@email.com', phone: '+234 805 678 9012' },
  { id: 6, name: 'Halima Musa', title: 'HSE Specialist', job: 'Senior Safety Engineer', experience: '6 years', location: 'Lagos', appliedDate: '3 days ago', rating: 4, stage: 'offer', email: 'halima@email.com', phone: '+234 806 789 0123' },
  { id: 7, name: 'Ikenna Chukwu', title: 'Junior Engineer', job: 'Mechanical Engineer', experience: '1 year', location: 'Lagos', appliedDate: '4 days ago', rating: 2, stage: 'rejected', email: 'ikenna@email.com', phone: '+234 807 890 1234' },
];

const PIPELINE_STAGES: { key: PipelineStage; label: string }[] = [
  { key: 'all', label: 'All Applicants' },
  { key: 'new', label: 'New' },
  { key: 'reviewed', label: 'Reviewed' },
  { key: 'interview', label: 'Interview' },
  { key: 'offer', label: 'Offer' },
  { key: 'rejected', label: 'Rejected' }
];

export function Applicants() {
  const navigate = useNavigate();
  const [applicants, setApplicants] = useState(INITIAL_APPLICANTS);
  const [activeStage, setActiveStage] = useState<PipelineStage>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedApplicant, setSelectedApplicant] = useState<Applicant | null>(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showOfferModal, setShowOfferModal] = useState(false);
  const [interviewDate, setInterviewDate] = useState('');
  const [interviewTime, setInterviewTime] = useState('');
  const [offerSalary, setOfferSalary] = useState('');

  const filteredApplicants = applicants.filter(applicant => {
    const matchesStage = activeStage === 'all' || applicant.stage === activeStage;
    const matchesSearch = applicant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          applicant.job.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStage && matchesSearch;
  });

  const getCounts = () => {
    const counts: Record<PipelineStage, number> = {
      all: applicants.length,
      new: applicants.filter(a => a.stage === 'new').length,
      reviewed: applicants.filter(a => a.stage === 'reviewed').length,
      interview: applicants.filter(a => a.stage === 'interview').length,
      offer: applicants.filter(a => a.stage === 'offer').length,
      rejected: applicants.filter(a => a.stage === 'rejected').length
    };
    return counts;
  };

  const counts = getCounts();

  const handleShortlist = (applicant: Applicant) => {
    setApplicants(prev => prev.map(a => 
      a.id === applicant.id ? { ...a, stage: 'reviewed' as const } : a
    ));
  };

  const handleReject = (applicant: Applicant) => {
    setApplicants(prev => prev.map(a => 
      a.id === applicant.id ? { ...a, stage: 'rejected' as const } : a
    ));
  };

  const handleScheduleInterview = () => {
    if (selectedApplicant && interviewDate && interviewTime) {
      setApplicants(prev => prev.map(a => 
        a.id === selectedApplicant.id ? { ...a, stage: 'interview' as const } : a
      ));
      setShowScheduleModal(false);
      setInterviewDate('');
      setInterviewTime('');
    }
  };

  const handleSendOffer = () => {
    if (selectedApplicant && offerSalary) {
      setApplicants(prev => prev.map(a => 
        a.id === selectedApplicant.id ? { ...a, stage: 'offer' as const } : a
      ));
      setShowOfferModal(false);
      setOfferSalary('');
    }
  };

  const openViewModal = (applicant: Applicant) => {
    setSelectedApplicant(applicant);
    setShowViewModal(true);
  };

  const openScheduleModal = (applicant: Applicant) => {
    setSelectedApplicant(applicant);
    setShowScheduleModal(true);
  };

  const openOfferModal = (applicant: Applicant) => {
    setSelectedApplicant(applicant);
    setShowOfferModal(true);
  };

  const handleMessage = (_applicant: Applicant) => {
    navigate('/recruiter/messages');
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg key={i} viewBox="0 0 24 24" strokeWidth="2" className={i < rating ? '' : 'empty'}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ));
  };

  return (
    <DashboardLayout>
      <div className="applicants-page">
        {/* Header */}
        <div className="applicants-header">
          <div>
            <h1>Applicants</h1>
            <p>Review and manage job applications</p>
          </div>
        </div>

        {/* Filters */}
        <div className="applicants-filters">
          <div className="applicants-search">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search applicants..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select className="applicants-filter-select">
            <option value="">All Jobs</option>
            <option value="1">Mechanical Engineer</option>
            <option value="2">Senior Safety Engineer</option>
            <option value="3">Process Engineer</option>
          </select>
          <select className="applicants-filter-select">
            <option value="">Sort by: Newest</option>
            <option value="oldest">Oldest</option>
            <option value="rating">Highest Rating</option>
          </select>
        </div>

        {/* Pipeline Tabs */}
        <div className="applicants-pipeline">
          {PIPELINE_STAGES.map(stage => (
            <button
              key={stage.key}
              className={`applicants-pipeline-tab ${activeStage === stage.key ? 'active' : ''}`}
              onClick={() => setActiveStage(stage.key)}
            >
              {stage.label}
              <span className="applicants-pipeline-count">{counts[stage.key]}</span>
            </button>
          ))}
        </div>

        {/* Applicants Grid */}
        {filteredApplicants.length > 0 ? (
          <div className="applicants-grid">
            {filteredApplicants.map(applicant => (
              <div key={applicant.id} className="applicant-card">
                <div className="applicant-card__header">
                  <div className="applicant-card__avatar">
                    {applicant.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="applicant-card__info">
                    <h3>{applicant.name}</h3>
                    <p>{applicant.title}</p>
                  </div>
                  <div className="applicant-card__rating">
                    {renderStars(applicant.rating)}
                  </div>
                </div>

                <div className="applicant-card__job">
                  <div className="applicant-card__job-label">Applied for</div>
                  <div className="applicant-card__job-title">{applicant.job}</div>
                </div>

                <div className="applicant-card__meta">
                  <span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                    </svg>
                    {applicant.experience}
                  </span>
                  <span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {applicant.location}
                  </span>
                  <span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    {applicant.appliedDate}
                  </span>
                </div>

                <div className="applicant-card__actions">
                  <button className="applicant-card__action secondary" onClick={() => openViewModal(applicant)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    View
                  </button>
                  {applicant.stage === 'new' && (
                    <>
                      <button className="applicant-card__action accept" onClick={() => handleShortlist(applicant)}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        Shortlist
                      </button>
                      <button className="applicant-card__action reject" onClick={() => handleReject(applicant)}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                      </button>
                    </>
                  )}
                  {applicant.stage === 'reviewed' && (
                    <button className="applicant-card__action primary" onClick={() => openScheduleModal(applicant)}>
                      Schedule Interview
                    </button>
                  )}
                  {applicant.stage === 'interview' && (
                    <button className="applicant-card__action primary" onClick={() => openOfferModal(applicant)}>
                      Send Offer
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="applicants-empty">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
            </svg>
            <h3>No applicants found</h3>
            <p>No applicants match your current filters.</p>
          </div>
        )}
      </div>

      {/* View Applicant Modal */}
      <Modal
        isOpen={showViewModal}
        onClose={() => setShowViewModal(false)}
        title="Applicant Profile"
        footer={
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="applicant-modal__btn secondary" onClick={() => handleMessage(selectedApplicant!)}>
              Message
            </button>
            <button className="applicant-modal__btn primary" onClick={() => setShowViewModal(false)}>
              Close
            </button>
          </div>
        }
      >
        {selectedApplicant && (
          <div className="applicant-modal__content">
            <div className="applicant-modal__header">
              <div className="applicant-modal__avatar">
                {selectedApplicant.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3>{selectedApplicant.name}</h3>
                <p>{selectedApplicant.title}</p>
              </div>
            </div>
            <div className="applicant-modal__details">
              <div className="applicant-modal__detail">
                <label>Email</label>
                <span>{selectedApplicant.email}</span>
              </div>
              <div className="applicant-modal__detail">
                <label>Phone</label>
                <span>{selectedApplicant.phone}</span>
              </div>
              <div className="applicant-modal__detail">
                <label>Experience</label>
                <span>{selectedApplicant.experience}</span>
              </div>
              <div className="applicant-modal__detail">
                <label>Location</label>
                <span>{selectedApplicant.location}</span>
              </div>
              <div className="applicant-modal__detail">
                <label>Applied For</label>
                <span>{selectedApplicant.job}</span>
              </div>
              <div className="applicant-modal__detail">
                <label>Status</label>
                <span className={`applicant-status ${selectedApplicant.stage}`}>
                  {selectedApplicant.stage.charAt(0).toUpperCase() + selectedApplicant.stage.slice(1)}
                </span>
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* Schedule Interview Modal */}
      <Modal
        isOpen={showScheduleModal}
        onClose={() => setShowScheduleModal(false)}
        title="Schedule Interview"
        footer={
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="applicant-modal__btn secondary" onClick={() => setShowScheduleModal(false)}>
              Cancel
            </button>
            <button className="applicant-modal__btn primary" onClick={handleScheduleInterview}>
              Schedule
            </button>
          </div>
        }
      >
        <div className="applicant-modal__form">
          <p style={{ marginBottom: '1rem', color: 'var(--color-text-muted)' }}>
            Schedule interview with <strong>{selectedApplicant?.name}</strong>
          </p>
          <div className="applicant-modal__input-group">
            <label>Date</label>
            <input 
              type="date" 
              value={interviewDate} 
              onChange={(e) => setInterviewDate(e.target.value)}
            />
          </div>
          <div className="applicant-modal__input-group">
            <label>Time</label>
            <input 
              type="time" 
              value={interviewTime} 
              onChange={(e) => setInterviewTime(e.target.value)}
            />
          </div>
        </div>
      </Modal>

      {/* Send Offer Modal */}
      <Modal
        isOpen={showOfferModal}
        onClose={() => setShowOfferModal(false)}
        title="Send Job Offer"
        footer={
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="applicant-modal__btn secondary" onClick={() => setShowOfferModal(false)}>
              Cancel
            </button>
            <button className="applicant-modal__btn primary" onClick={handleSendOffer}>
              Send Offer
            </button>
          </div>
        }
      >
        <div className="applicant-modal__form">
          <p style={{ marginBottom: '1rem', color: 'var(--color-text-muted)' }}>
            Send offer to <strong>{selectedApplicant?.name}</strong> for <strong>{selectedApplicant?.job}</strong>
          </p>
          <div className="applicant-modal__input-group">
            <label>Salary Offer (₦ per month)</label>
            <input 
              type="text" 
              placeholder="e.g. 500,000"
              value={offerSalary} 
              onChange={(e) => setOfferSalary(e.target.value)}
            />
          </div>
        </div>
      </Modal>
    </DashboardLayout>
  );
}
