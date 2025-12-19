import React from 'react';
import { DashboardLayout } from '../../components/layout';
import shellLogo from '../../assets/images/shell-logo.webp';
import './CompanyProfile.css';

const COMPANY_DATA = {
  name: 'Shell Petroleum Company',
  industry: 'Oil and Gas',
  location: 'Lagos, Nigeria',
  website: 'www.shell.com.ng',
  employees: '10,000+',
  founded: '1907',
  about: `Shell Petroleum Development Company of Nigeria Limited (SPDC) is a pioneer and leader in the petroleum industry of Nigeria. SPDC is the largest oil and gas company in Nigeria and one of the largest private-sector oil and gas companies in the world.

We are committed to providing equal employment opportunities to qualified individuals in accordance with applicable laws. We believe that diversity and inclusion help us become more innovative, agile and responsive to the needs of our customers and communities.`,
  culture: [
    { title: 'Innovation', icon: 'lightbulb' },
    { title: 'Safety First', icon: 'shield' },
    { title: 'Collaboration', icon: 'users' },
    { title: 'Sustainability', icon: 'leaf' },
    { title: 'Excellence', icon: 'star' },
    { title: 'Integrity', icon: 'heart' }
  ],
  benefits: [
    'Health Insurance', 'Pension', 'Performance Bonus', 'Flexible Hours',
    'Training Budget', 'Paid Leave', 'Transport Allowance', 'Meal Allowance'
  ],
  stats: {
    activeJobs: 12,
    totalHires: 156,
    avgResponseTime: '2 days',
    rating: '4.8'
  }
};

const getIcon = (icon: string): React.ReactNode => {
  const icons: Record<string, React.ReactNode> = {
    lightbulb: <path d="M9 18h6M10 22h4M12 2a7 7 0 017 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 01-1 1H9a1 1 0 01-1-1v-2.26A7 7 0 0112 2z" />,
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    users: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></>,
    leaf: <path d="M11 20A7 7 0 019.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10zM2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />,
    star: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />,
    heart: <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
  };
  return icons[icon] || null;
};

export function CompanyProfile() {
  return (
    <DashboardLayout>
      <div className="company-profile">
        {/* Header */}
        <header className="company-profile__header">
          <div className="company-profile__header-content">
            <div className="company-profile__logo">
              <img src={shellLogo} alt={COMPANY_DATA.name} />
            </div>
            <div className="company-profile__info">
              <h1>{COMPANY_DATA.name}</h1>
              <p>{COMPANY_DATA.industry}</p>
              <div className="company-profile__meta">
                <span className="company-profile__meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {COMPANY_DATA.location}
                </span>
                <span className="company-profile__meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                  </svg>
                  {COMPANY_DATA.employees} employees
                </span>
                <span className="company-profile__meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Since {COMPANY_DATA.founded}
                </span>
              </div>
            </div>
          </div>
          <button className="company-profile__edit">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
              <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
            Edit Profile
          </button>
        </header>

        <div className="company-profile__grid">
          {/* Main Content */}
          <div className="company-profile__main">
            {/* About */}
            <section className="company-profile__section company-profile__about">
              <div className="company-profile__section-header">
                <h2>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                  About
                </h2>
                <button className="company-profile__edit-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                  </svg>
                  Edit
                </button>
              </div>
              {COMPANY_DATA.about.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              <div className="company-profile__stats">
                <div className="company-profile__stat">
                  <div className="company-profile__stat-value">{COMPANY_DATA.stats.activeJobs}</div>
                  <div className="company-profile__stat-label">Active Jobs</div>
                </div>
                <div className="company-profile__stat">
                  <div className="company-profile__stat-value">{COMPANY_DATA.stats.totalHires}</div>
                  <div className="company-profile__stat-label">Total Hires</div>
                </div>
                <div className="company-profile__stat">
                  <div className="company-profile__stat-value">{COMPANY_DATA.stats.avgResponseTime}</div>
                  <div className="company-profile__stat-label">Avg Response</div>
                </div>
                <div className="company-profile__stat">
                  <div className="company-profile__stat-value">{COMPANY_DATA.stats.rating}</div>
                  <div className="company-profile__stat-label">Rating</div>
                </div>
              </div>
            </section>

            {/* Culture */}
            <section className="company-profile__section">
              <div className="company-profile__section-header">
                <h2>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  Our Culture & Values
                </h2>
              </div>
              <div className="company-profile__culture-grid">
                {COMPANY_DATA.culture.map((item, index) => (
                  <div key={index} className="company-profile__culture-item">
                    <div className="company-profile__culture-icon">
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                        {getIcon(item.icon)}
                      </svg>
                    </div>
                    <h3>{item.title}</h3>
                  </div>
                ))}
              </div>
            </section>

            {/* Photos */}
            <section className="company-profile__section">
              <div className="company-profile__section-header">
                <h2>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  Office Photos
                </h2>
              </div>
              <div className="company-profile__photos">
                <div className="company-profile__photo">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
                <div className="company-profile__photo">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
                <div className="company-profile__photo company-profile__add-photo">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="company-profile__sidebar">
            {/* Contact */}
            <div className="company-profile__sidebar-card">
              <h3>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                Contact Info
              </h3>
              <div className="company-profile__contact-item">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
                <span>{COMPANY_DATA.website}</span>
              </div>
              <div className="company-profile__contact-item">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{COMPANY_DATA.location}</span>
              </div>
              <div className="company-profile__contact-item">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>careers@shell.com.ng</span>
              </div>
            </div>

            {/* Benefits */}
            <div className="company-profile__sidebar-card">
              <h3>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Benefits & Perks
              </h3>
              <div className="company-profile__benefits">
                {COMPANY_DATA.benefits.map((benefit, index) => (
                  <span key={index} className="company-profile__benefit">{benefit}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </DashboardLayout>
  );
}
