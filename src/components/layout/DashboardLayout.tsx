import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Logo } from '../../components/ui';
import { useAuth } from '../../context/AuthContext';
import './DashboardLayout.css';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const isRecruiter = user?.role === 'company';

  return (
    <div className="dashboard-layout">
      <header className="dashboard-header">
        <div className="dashboard-header__container">
          {/* Left: Logo + Desktop Nav */}
          <div className="dashboard-header__left">
            <Logo size="sm" />
            <nav className="dashboard-header__nav dashboard-header__nav--desktop">
              {isRecruiter ? (
                <>
                  <NavLink to="/recruiter/dashboard" end>Dashboard</NavLink>
                  <NavLink to="/recruiter/jobs">Jobs</NavLink>
                  <NavLink to="/recruiter/applicants">Candidates</NavLink>
                </>
              ) : (
                <>
                  <NavLink to="/jobs" end>Home</NavLink>
                  <NavLink to="/reviews">Company reviews</NavLink>
                  <NavLink to="/rate-employer">Rate Employer</NavLink>
                </>
              )}
            </nav>
          </div>

          {/* Right: Desktop Icons */}
          <div className="dashboard-header__right">
            {!isRecruiter && (
              <NavLink to="/applications" className="dashboard-header__icon" aria-label="Saved">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
                <span className="icon-label">Saved</span>
              </NavLink>
            )}
            <NavLink to="/messages" className="dashboard-header__icon" aria-label="Messages">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <span className="icon-label">Messages</span>
            </NavLink>
            <NavLink to="/notifications" className="dashboard-header__icon" aria-label="Notifications">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
              <span className="icon-label">Notifications</span>
            </NavLink>
            <NavLink to={isRecruiter ? "/recruiter/company" : "/profile"} className="dashboard-header__icon" aria-label="Profile">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span className="icon-label">Profile</span>
            </NavLink>
            <button 
                className="dashboard-header__icon dashboard-header__profile" 
                aria-label="Logout"
                onClick={handleLogout}
                title="Logout"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              <span className="icon-label">Logout</span>
            </button>
          </div>

          {/* Mobile: Hamburger Button */}
          <button className="dashboard-header__hamburger" onClick={toggleMobileMenu} aria-label="Toggle menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay - OUTSIDE HEADER for proper z-index */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Container - OUTSIDE HEADER for proper z-index */}
      <div className={`dashboard-header__mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <button className="dashboard-header__close-btn" onClick={() => setIsMobileMenuOpen(false)}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>

        <nav className="dashboard-header__nav">
          {isRecruiter ? (
            <>
              <NavLink to="/recruiter/dashboard" end onClick={() => setIsMobileMenuOpen(false)}>Dashboard</NavLink>
              <NavLink to="/recruiter/jobs" onClick={() => setIsMobileMenuOpen(false)}>Jobs</NavLink>
              <NavLink to="/recruiter/applicants" onClick={() => setIsMobileMenuOpen(false)}>Candidates</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/jobs" end onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
              <NavLink to="/reviews" onClick={() => setIsMobileMenuOpen(false)}>Company reviews</NavLink>
              <NavLink to="/rate-employer" onClick={() => setIsMobileMenuOpen(false)}>Rate Employer</NavLink>
            </>
          )}
        </nav>

        <div className="mobile-menu-icons">
          {!isRecruiter && (
            <NavLink to="/applications" className="dashboard-header__icon" onClick={() => setIsMobileMenuOpen(false)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
              <span className="mobile-icon-label">Saved</span>
            </NavLink>
          )}
          <NavLink to="/messages" className="dashboard-header__icon" onClick={() => setIsMobileMenuOpen(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span className="mobile-icon-label">Messages</span>
          </NavLink>
          <NavLink to="/notifications" className="dashboard-header__icon" onClick={() => setIsMobileMenuOpen(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            <span className="mobile-icon-label">Notifications</span>
          </NavLink>
          <NavLink to={isRecruiter ? "/recruiter/company" : "/profile"} className="dashboard-header__icon" onClick={() => setIsMobileMenuOpen(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span className="mobile-icon-label">Profile</span>
          </NavLink>
        </div>

        <button className="mobile-logout-btn" onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          Logout
        </button>
      </div>

      <main className="dashboard-main">
          {children}
          <div className="dashboard-main__back-btn-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem', display: 'flex', justifyContent: 'flex-start' }}>
            <button 
                onClick={() => navigate(-1)} 
                style={{ 
                    background: 'transparent',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    cursor: 'pointer', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem',
                    color: '#374151',
                    fontWeight: 500,
                    padding: '0.5rem 1.5rem',
                    transition: 'all 0.2s'
                }}
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back
            </button>
          </div>
      </main>

      <footer className="dashboard-footer">
        <div className="dashboard-footer__container">
          <div className="dashboard-footer__brand">
            <Logo size="sm" />
          </div>
          <div className="dashboard-footer__links">
            <div className="dashboard-footer__column">
              <Link to="/jobs">Home</Link>
              <Link to="/reviews">Company reviews</Link>
            </div>
            <div className="dashboard-footer__column">
              <Link to="/applications">Save</Link>
              <Link to="/messages">Message</Link>
              <Link to="/notifications">Notification</Link>
              <Link to="/profile/complete">Profile</Link>
            </div>
            <div className="dashboard-footer__column">
              <Link to="/about">About</Link>
              <Link to="/terms">Terms of use</Link>
            </div>
          </div>
          <div className="dashboard-footer__newsletter">
            <div className="dashboard-footer__newsletter-container">
                <label>Newsletter</label>
              <div className="dashboard-footer__newsletter-input">
                <input type="email" placeholder="Email Address" />
              </div>
            </div>
            <button>Subscribe</button>
          </div>
        </div>
        <div className="dashboard-footer__decoration">
          <svg viewBox="0 0 24 24" fill="#f97316">
            <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.56-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22l-1.92 3.32c-.12.22-.07.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .43-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.03-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
          </svg>
        </div>
      </footer>
    </div>
  );
}
