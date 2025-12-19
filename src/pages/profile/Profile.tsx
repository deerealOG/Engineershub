import { Link } from 'react-router-dom';
import { DashboardLayout } from '../../components/layout';
import './Profile.css';

const USER_DATA = {
  firstName: 'Adebayo',
  lastName: 'Okonkwo',
  title: 'Mechanical Engineer',
  location: 'Lagos, Nigeria',
  email: 'adebayo.okonkwo@email.com',
  phone: '+234 801 234 5678',
  linkedin: 'linkedin.com/in/adebayookonkwo',
  about: 'Experienced Mechanical Engineer with over 5 years of expertise in the oil and gas industry. Skilled in equipment design, maintenance optimization, and project management. Passionate about sustainable energy solutions and driving operational efficiency in complex industrial environments.',
  experience: [
    {
      id: 1,
      title: 'Senior Mechanical Engineer',
      company: 'Shell Petroleum Company',
      location: 'Lagos, Nigeria',
      period: 'Jan 2022 - Present',
      description: 'Lead mechanical engineering projects for offshore platforms. Responsible for equipment reliability and maintenance optimization.'
    },
    {
      id: 2,
      title: 'Mechanical Engineer',
      company: 'Total Energies',
      location: 'Port Harcourt, Nigeria',
      period: 'Mar 2019 - Dec 2021',
      description: 'Designed and implemented mechanical systems for refinery operations. Collaborated with cross-functional teams on major upgrade projects.'
    },
    {
      id: 3,
      title: 'Junior Engineer',
      company: 'Chevron Nigeria',
      location: 'Lagos, Nigeria',
      period: 'Jun 2017 - Feb 2019',
      description: 'Assisted in the maintenance and troubleshooting of rotating equipment. Gained hands-on experience in field operations.'
    }
  ],
  education: [
    {
      id: 1,
      degree: 'Master of Science in Mechanical Engineering',
      school: 'University of Lagos',
      period: '2015 - 2017'
    },
    {
      id: 2,
      degree: 'Bachelor of Engineering in Mechanical Engineering',
      school: 'Obafemi Awolowo University',
      period: '2010 - 2015'
    }
  ],
  skills: [
    'AutoCAD', 'SolidWorks', 'ANSYS', 'Project Management', 
    'Equipment Maintenance', 'Technical Documentation', 
    'Process Optimization', 'Team Leadership', 'ASME Standards',
    'Root Cause Analysis', 'SAP', 'MS Office'
  ],
  resumes: [
    {
      id: 1,
      name: 'Resume_AdebayoOkonkwo_2025.pdf',
      date: 'Dec 15, 2025',
      isDefault: true
    },
    {
      id: 2,
      name: 'CV_Technical_Focus.pdf',
      date: 'Nov 20, 2025',
      isDefault: false
    }
  ]
};

export function Profile() {
  const initials = `${USER_DATA.firstName[0]}${USER_DATA.lastName[0]}`;

  return (
    <DashboardLayout>
      <div className="profile-page">
        {/* Header */}
        <header className="profile-header">
          <div className="profile-header__content">
            <div className="profile-header__avatar">{initials}</div>
            <div className="profile-header__info">
              <h1>{USER_DATA.firstName} {USER_DATA.lastName}</h1>
              <p>{USER_DATA.title}</p>
              <div className="profile-header__meta">
                <span className="profile-header__meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {USER_DATA.location}
                </span>
                <span className="profile-header__meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {USER_DATA.email}
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
                <button className="profile-section__edit-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                  </svg>
                  Edit
                </button>
              </div>
              <p>{USER_DATA.about}</p>
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
                <button className="profile-section__edit-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                  Add
                </button>
              </div>
              {USER_DATA.experience.map(exp => (
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
              ))}
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
                <button className="profile-section__edit-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                  Add
                </button>
              </div>
              {USER_DATA.education.map(edu => (
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
              ))}
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
                <button className="profile-section__edit-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                  </svg>
                  Edit
                </button>
              </div>
              <div className="profile-skills">
                {USER_DATA.skills.map((skill, index) => (
                  <span key={index} className="profile-skill">{skill}</span>
                ))}
              </div>
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
                <span>{USER_DATA.email}</span>
              </div>
              <div className="profile-contact-item">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span>{USER_DATA.phone}</span>
              </div>
              <div className="profile-contact-item">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span>{USER_DATA.linkedin}</span>
              </div>
              <div className="profile-contact-item">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{USER_DATA.location}</span>
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
              {USER_DATA.resumes.map(resume => (
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
              ))}
              <Link to="/resume" className="profile-add-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                Manage Resumes
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </DashboardLayout>
  );
}
