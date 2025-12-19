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
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleLogoutClick = () => {
    setIsLogoutModalOpen(true);
  };

  const confirmLogout = () => {
    logout();
    setIsLogoutModalOpen(false);
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
                  <NavLink to="/jobs" end>Find Jobs</NavLink>
                  <NavLink to="/reviews">Companies</NavLink>
                  <NavLink to="/applications">Applications</NavLink>
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
            <NavLink to={isRecruiter ? "/recruiter/messages" : "/messages"} className="dashboard-header__icon" aria-label="Messages">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <span className="icon-label">Messages</span>
            </NavLink>
            <NavLink to={isRecruiter ? "/recruiter/notifications" : "/notifications"} className="dashboard-header__icon" aria-label="Notifications">
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
                onClick={handleLogoutClick}
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
              <NavLink to="/jobs" end onClick={() => setIsMobileMenuOpen(false)}>Find Jobs</NavLink>
              <NavLink to="/reviews" onClick={() => setIsMobileMenuOpen(false)}>Companies</NavLink>
              <NavLink to="/applications" onClick={() => setIsMobileMenuOpen(false)}>Applications</NavLink>
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
          <NavLink to={isRecruiter ? "/recruiter/messages" : "/messages"} className="dashboard-header__icon" onClick={() => setIsMobileMenuOpen(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span className="mobile-icon-label">Messages</span>
          </NavLink>
          <NavLink to={isRecruiter ? "/recruiter/notifications" : "/notifications"} className="dashboard-header__icon" onClick={() => setIsMobileMenuOpen(false)}>
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

        <button className="mobile-logout-btn" onClick={() => { setIsMobileMenuOpen(false); handleLogoutClick(); }}>
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
            <p className="dashboard-footer__tagline">Connecting engineers with opportunities across Africa</p>
            {/* Social Icons */}
            <div className="dashboard-footer__social">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z M2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
          <div className="dashboard-footer__links">
            <div className="dashboard-footer__column">
              <h4>Explore</h4>
              <Link to="/jobs">Find Jobs</Link>
              <Link to="/reviews">Companies</Link>
              <Link to="/rate-employer">Rate Employer</Link>
            </div>
            <div className="dashboard-footer__column">
              <h4>Account</h4>
              <Link to="/applications">My Applications</Link>
              <Link to="/messages">Messages</Link>
              <Link to="/profile">Profile</Link>
            </div>
            <div className="dashboard-footer__column">
              <h4>Legal</h4>
              <Link to="/about">About Us</Link>
              <Link to="/terms">Terms of Use</Link>
              <Link to="/privacy">Privacy Policy</Link>
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
        <div className="dashboard-footer__bottom">
          <p>© 2024 EngineersHub. All rights reserved.</p>
        </div>
      </footer>

      {/* Logout Confirmation Modal */}
      {isLogoutModalOpen && (
        <div className="logout-modal-overlay">
          <div className="logout-modal">
            <h3>Confirm Logout</h3>
            <p>Are you sure you want to log out?</p>
            <div className="logout-modal-actions">
              <button className="btn-cancel" onClick={() => setIsLogoutModalOpen(false)}>Cancel</button>
              <button className="btn-confirm" onClick={confirmLogout}>Logout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
