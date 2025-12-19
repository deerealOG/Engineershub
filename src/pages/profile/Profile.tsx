import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DashboardLayout } from '../../components/layout';
import { Modal, Button, Input } from '../../components/ui';
import { useAuth } from '../../context/AuthContext';
import './Profile.css';

// Default data for when user doesn't have profile info
const DEFAULT_ABOUT = 'No bio added yet. Click Edit to add information about yourself.';

type ModalType = 'about' | 'experience' | 'education' | 'skills' | null;

export function Profile() {
  const { user, updateProfile } = useAuth();
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  
  // Form states for modals
  const [aboutForm, setAboutForm] = useState('');
  const [experienceForm, setExperienceForm] = useState({
    title: '', company: '', location: '', period: '', description: ''
  });
  const [educationForm, setEducationForm] = useState({
    degree: '', school: '', period: ''
  });
  const [skillsForm, setSkillsForm] = useState('');
  
  // Get profile data from context or use defaults
  const profile = user?.profile;
  
  // Parse name for initials
  const nameParts = (profile?.fullName || 'User').split(' ');
  const firstName = nameParts[0] || 'User';
  const lastName = nameParts.slice(1).join(' ') || '';
  const initials = firstName[0] + (lastName[0] || '');

  // Use profile data or fallbacks
  const userData = {
    firstName,
    lastName,
    title: profile?.title || 'Engineer',
    location: profile?.location || 'Location not set',
    email: profile?.email || 'email@example.com',
    phone: profile?.phone || 'Phone not set',
    linkedin: profile?.linkedin || 'Not provided',
    about: profile?.about || DEFAULT_ABOUT,
    experience: profile?.experience || [],
    education: profile?.education || [],
    skills: profile?.skills || [],
    resumes: profile?.resumes || []
  };

  // Open modal handlers
  const openAboutModal = () => {
    setAboutForm(userData.about === DEFAULT_ABOUT ? '' : userData.about);
    setActiveModal('about');
  };

  const openExperienceModal = () => {
    setExperienceForm({ title: '', company: '', location: '', period: '', description: '' });
    setActiveModal('experience');
  };

  const openEducationModal = () => {
    setEducationForm({ degree: '', school: '', period: '' });
    setActiveModal('education');
  };

  const openSkillsModal = () => {
    setSkillsForm(userData.skills.join(', '));
    setActiveModal('skills');
  };

  // Save handlers
  const saveAbout = () => {
    updateProfile({ about: aboutForm });
    setActiveModal(null);
  };

  const saveExperience = () => {
    const newExp = {
      id: Date.now(),
      ...experienceForm
    };
    updateProfile({ 
      experience: [...(profile?.experience || []), newExp] 
    });
    setActiveModal(null);
  };

  const saveEducation = () => {
    const newEdu = {
      id: Date.now(),
      ...educationForm
    };
    updateProfile({ 
      education: [...(profile?.education || []), newEdu] 
    });
    setActiveModal(null);
  };

  const saveSkills = () => {
    const skillsArray = skillsForm.split(',').map(s => s.trim()).filter(s => s);
    updateProfile({ skills: skillsArray });
    setActiveModal(null);
  };

  return (
    <DashboardLayout>
      <div className="profile-page">
        {/* Header */}
        <header className="profile-header">
          <div className="profile-header__content">
            <div className="profile-header__avatar">{initials}</div>
            <div className="profile-header__info">
              <h1>{userData.firstName} {userData.lastName}</h1>
              <p>{userData.title}</p>
              <div className="profile-header__meta">
                <span className="profile-header__meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {userData.location}
                </span>
                <span className="profile-header__meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {userData.email}
                </span>
              </div>
            </div>
          </div>
          <Link to="/settings" className="profile-header__edit">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
            Edit Profile
          </Link>
        </header>

        <div className="profile-grid">
          {/* Main Content */}
          <div className="profile-main">
            {/* About */}
            <section className="profile-section profile-about">
              <div className="profile-section__header">
                <h2>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  About
                </h2>
                <button className="profile-section__edit-btn" onClick={openAboutModal}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                  </svg>
                  Edit
                </button>
              </div>
              <p>{userData.about}</p>
            </section>

            {/* Experience */}
            <section className="profile-section">
              <div className="profile-section__header">
                <h2>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                  </svg>
                  Experience
                </h2>
                <button className="profile-section__edit-btn" onClick={openExperienceModal}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                  Add
                </button>
              </div>
              {userData.experience.length > 0 ? (
                userData.experience.map(exp => (
                  <div key={exp.id} className="profile-experience-card">
                    <div className="profile-experience-card__logo">
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                      </svg>
                    </div>
                    <div className="profile-experience-card__content">
                      <h3>{exp.title}</h3>
                      <div className="profile-experience-card__meta">
                        <span>{exp.company}</span>
                        <span>{exp.location}</span>
                        <span>{exp.period}</span>
                      </div>
                      <p className="profile-experience-card__description">{exp.description}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="profile-section__empty">No experience added yet. Click Add to include your work history.</p>
              )}
            </section>

            {/* Education */}
            <section className="profile-section">
              <div className="profile-section__header">
                <h2>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                  Education
                </h2>
                <button className="profile-section__edit-btn" onClick={openEducationModal}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                  Add
                </button>
              </div>
              {userData.education.length > 0 ? (
                userData.education.map(edu => (
                  <div key={edu.id} className="profile-education-card">
                    <div className="profile-education-card__icon">
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                      </svg>
                    </div>
                    <div className="profile-education-card__content">
                      <h3>{edu.degree}</h3>
                      <p>{edu.school} • {edu.period}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="profile-section__empty">No education added yet. Click Add to include your educational background.</p>
              )}
            </section>

            {/* Skills */}
            <section className="profile-section">
              <div className="profile-section__header">
                <h2>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  Skills
                </h2>
                <button className="profile-section__edit-btn" onClick={openSkillsModal}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                  </svg>
                  Edit
                </button>
              </div>
              {userData.skills.length > 0 ? (
                <div className="profile-skills">
                  {userData.skills.map((skill, index) => (
                    <span key={index} className="profile-skill">{skill}</span>
                  ))}
                </div>
              ) : (
                <p className="profile-section__empty">No skills added yet. Click Edit to add your skills.</p>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <aside className="profile-sidebar">
            {/* Contact Info */}
            <div className="profile-sidebar-card">
              <h3>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                Contact Information
              </h3>
              <div className="profile-contact-item">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{userData.email}</span>
              </div>
              <div className="profile-contact-item">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span>{userData.phone}</span>
              </div>
              <div className="profile-contact-item">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span>{userData.linkedin}</span>
              </div>
              <div className="profile-contact-item">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{userData.location}</span>
              </div>
            </div>

            {/* Resume */}
            <div className="profile-sidebar-card">
              <h3>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <path d="M14 2v6h6" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
                Resume / CV
              </h3>
              {userData.resumes.length > 0 ? (
                userData.resumes.map(resume => (
                  <div key={resume.id} className="profile-resume-item">
                    <div className="profile-resume-item__icon">
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                        <path d="M14 2v6h6" />
                      </svg>
                    </div>
                    <div className="profile-resume-item__info">
                      <h4>{resume.name} {resume.isDefault && '(Default)'}</h4>
                      <p>Uploaded {resume.date}</p>
                    </div>
                    <button className="profile-resume-item__download" aria-label="Download">
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                    </button>
                  </div>
                ))
              ) : (
                <p className="profile-section__empty">No resumes uploaded yet.</p>
              )}
              <Link to="/profile/complete" className="profile-add-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                Upload Resume
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* About Modal */}
      <Modal
        isOpen={activeModal === 'about'}
        onClose={() => setActiveModal(null)}
        title="Edit About"
        footer={
          <>
            <Button variant="secondary" onClick={() => setActiveModal(null)}>Cancel</Button>
            <Button onClick={saveAbout}>Save</Button>
          </>
        }
      >
        <div className="profile-modal-form">
          <label>About Me</label>
          <textarea
            value={aboutForm}
            onChange={(e) => setAboutForm(e.target.value)}
            placeholder="Tell us about yourself, your experience, and what you're looking for..."
            rows={6}
          />
        </div>
      </Modal>

      {/* Experience Modal */}
      <Modal
        isOpen={activeModal === 'experience'}
        onClose={() => setActiveModal(null)}
        title="Add Experience"
        footer={
          <>
            <Button variant="secondary" onClick={() => setActiveModal(null)}>Cancel</Button>
            <Button onClick={saveExperience}>Save</Button>
          </>
        }
      >
        <div className="profile-modal-form">
          <Input
            label="Job Title"
            value={experienceForm.title}
            onChange={(e) => setExperienceForm({...experienceForm, title: e.target.value})}
            placeholder="e.g., Mechanical Engineer"
          />
          <Input
            label="Company"
            value={experienceForm.company}
            onChange={(e) => setExperienceForm({...experienceForm, company: e.target.value})}
            placeholder="e.g., Shell Petroleum"
          />
          <Input
            label="Location"
            value={experienceForm.location}
            onChange={(e) => setExperienceForm({...experienceForm, location: e.target.value})}
            placeholder="e.g., Lagos, Nigeria"
          />
          <Input
            label="Period"
            value={experienceForm.period}
            onChange={(e) => setExperienceForm({...experienceForm, period: e.target.value})}
            placeholder="e.g., Jan 2020 - Present"
          />
          <div className="profile-modal-textarea">
            <label>Description</label>
            <textarea
              value={experienceForm.description}
              onChange={(e) => setExperienceForm({...experienceForm, description: e.target.value})}
              placeholder="Describe your responsibilities and achievements..."
              rows={4}
            />
          </div>
        </div>
      </Modal>

      {/* Education Modal */}
      <Modal
        isOpen={activeModal === 'education'}
        onClose={() => setActiveModal(null)}
        title="Add Education"
        footer={
          <>
            <Button variant="secondary" onClick={() => setActiveModal(null)}>Cancel</Button>
            <Button onClick={saveEducation}>Save</Button>
          </>
        }
      >
        <div className="profile-modal-form">
          <Input
            label="Degree"
            value={educationForm.degree}
            onChange={(e) => setEducationForm({...educationForm, degree: e.target.value})}
            placeholder="e.g., B.Sc. Mechanical Engineering"
          />
          <Input
            label="School"
            value={educationForm.school}
            onChange={(e) => setEducationForm({...educationForm, school: e.target.value})}
            placeholder="e.g., University of Lagos"
          />
          <Input
            label="Period"
            value={educationForm.period}
            onChange={(e) => setEducationForm({...educationForm, period: e.target.value})}
            placeholder="e.g., 2015 - 2019"
          />
        </div>
      </Modal>

      {/* Skills Modal */}
      <Modal
        isOpen={activeModal === 'skills'}
        onClose={() => setActiveModal(null)}
        title="Edit Skills"
        footer={
          <>
            <Button variant="secondary" onClick={() => setActiveModal(null)}>Cancel</Button>
            <Button onClick={saveSkills}>Save</Button>
          </>
        }
      >
        <div className="profile-modal-form">
          <label>Skills (comma-separated)</label>
          <textarea
            value={skillsForm}
            onChange={(e) => setSkillsForm(e.target.value)}
            placeholder="e.g., AutoCAD, Project Management, Safety Engineering, HVAC Systems"
            rows={4}
          />
          <p className="profile-modal-hint">Separate each skill with a comma</p>
        </div>
      </Modal>
    </DashboardLayout>
  );
}
