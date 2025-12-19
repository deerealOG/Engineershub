import { useState } from 'react';
import { DashboardLayout } from '../../components/layout';
import './ResumeManager.css';

interface Resume {
  id: number;
  name: string;
  size: string;
  date: string;
  isDefault: boolean;
}

const INITIAL_RESUMES: Resume[] = [
  { id: 1, name: 'Resume_AdebayoOkonkwo_2025.pdf', size: '245 KB', date: 'Dec 15, 2025', isDefault: true },
  { id: 2, name: 'CV_Technical_Focus.pdf', size: '312 KB', date: 'Nov 20, 2025', isDefault: false },
  { id: 3, name: 'Resume_General.docx', size: '189 KB', date: 'Oct 5, 2025', isDefault: false }
];

export function ResumeManager() {
  const [resumes, setResumes] = useState<Resume[]>(INITIAL_RESUMES);
  const [isDragging, setIsDragging] = useState(false);
  const [deleteModal, setDeleteModal] = useState<Resume | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file upload
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileUpload = (file: File) => {
    const newResume: Resume = {
      id: Date.now(),
      name: file.name,
      size: `${Math.round(file.size / 1024)} KB`,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      isDefault: resumes.length === 0
    };
    setResumes([newResume, ...resumes]);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileUpload(e.target.files[0]);
    }
  };

  const setAsDefault = (id: number) => {
    setResumes(resumes.map(r => ({ ...r, isDefault: r.id === id })));
  };

  const deleteResume = (resume: Resume) => {
    setResumes(resumes.filter(r => r.id !== resume.id));
    setDeleteModal(null);
  };

  return (
    <DashboardLayout>
      <div className="resume-manager">
        {/* Header */}
        <div className="resume-manager__header">
          <h1>Manage Resumes</h1>
          <p>Upload and manage your resumes for job applications</p>
        </div>

        {/* Upload Section */}
        <div className="resume-manager__upload">
          <label
            className={`resume-upload-dropzone ${isDragging ? 'dragging' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="resume-upload-dropzone__icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
            </div>
            <h3>Upload a new resume</h3>
            <p>Drag and drop your file here, or <span>browse</span></p>
            <small>PDF, DOC, or DOCX • Max file size 5MB</small>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
          </label>
        </div>

        {/* Resume List */}
        <div className="resume-manager__list">
          <div className="resume-manager__list-header">
            <h2>Your Resumes</h2>
            <span>{resumes.length} file{resumes.length !== 1 ? 's' : ''}</span>
          </div>

          {resumes.length > 0 ? (
            resumes.map(resume => (
              <div key={resume.id} className={`resume-card ${resume.isDefault ? 'default' : ''}`}>
                <div className="resume-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <path d="M14 2v6h6" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                </div>
                <div className="resume-card__info">
                  <h3>{resume.name}</h3>
                  <div className="resume-card__meta">
                    <span>{resume.size}</span>
                    <span>Uploaded {resume.date}</span>
                    {resume.isDefault && <span className="resume-card__badge">Default</span>}
                  </div>
                </div>
                <div className="resume-card__actions">
                  {!resume.isDefault && (
                    <button
                      className="resume-card__action-btn"
                      onClick={() => setAsDefault(resume.id)}
                      title="Set as default"
                    >
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </button>
                  )}
                  <button className="resume-card__action-btn" title="Download">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </button>
                  <button 
                    className="resume-card__action-btn delete" 
                    onClick={() => setDeleteModal(resume)}
                    title="Delete"
                  >
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                      <line x1="10" y1="11" x2="10" y2="17" />
                      <line x1="14" y1="11" x2="14" y2="17" />
                    </svg>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="resume-manager__empty">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <path d="M14 2v6h6" />
              </svg>
              <h3>No resumes yet</h3>
              <p>Upload your first resume to get started</p>
            </div>
          )}
        </div>

        {/* Tips */}
        <div className="resume-manager__tips">
          <h3>
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            Resume Tips
          </h3>
          <ul>
            <li>
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              Keep your resume updated with your latest experience and skills
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              Use PDF format for best compatibility across different systems
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              Create different versions for different types of roles
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              Set your most relevant resume as the default for Easy Apply
            </li>
          </ul>
        </div>

        {/* Delete Modal */}
        {deleteModal && (
          <div className="resume-modal-overlay" onClick={() => setDeleteModal(null)}>
            <div className="resume-modal" onClick={e => e.stopPropagation()}>
              <div className="resume-modal__icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                </svg>
              </div>
              <h3>Delete Resume?</h3>
              <p>Are you sure you want to delete "{deleteModal.name}"? This action cannot be undone.</p>
              <div className="resume-modal__actions">
                <button className="resume-modal__cancel" onClick={() => setDeleteModal(null)}>
                  Cancel
                </button>
                <button className="resume-modal__confirm" onClick={() => deleteResume(deleteModal)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
