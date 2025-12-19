import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../ui';
import './PublicLayout.css';

interface PublicLayoutProps {
  children: React.ReactNode;
}

export function PublicLayout({ children }: PublicLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="public-layout">
      {/* Header */}
      <header className="public-header">
        <div className="public-header__container">
          <Link to="/home">
            <Logo size="sm" />
          </Link>
          
          <nav className="public-header__nav">
            <Link to="/jobs" className={isActive('/jobs') ? 'active' : ''}>Find Jobs</Link>
            <Link to="/reviews" className={isActive('/reviews') ? 'active' : ''}>Company Reviews</Link>
            <Link to="/about" className={isActive('/about') ? 'active' : ''}>About Us</Link>
            <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link>
          </nav>
          
          <div className="public-header__actions">
            <Link to="/" className="public-header__login">Log In</Link>
            <Link to="/" className="public-header__signup">Sign Up</Link>
          </div>
          
          <button 
            className="public-header__hamburger"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`public-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="public-mobile-menu__header">
          <Logo size="sm" />
          <button 
            className="public-mobile-menu__close"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="public-mobile-menu__nav">
          <Link to="/jobs" onClick={() => setIsMobileMenuOpen(false)}>Find Jobs</Link>
          <Link to="/reviews" onClick={() => setIsMobileMenuOpen(false)}>Company Reviews</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </nav>
        <div className="public-mobile-menu__actions">
          <Link to="/" className="public-header__login" onClick={() => setIsMobileMenuOpen(false)}>Log In</Link>
          <Link to="/" className="public-header__signup" onClick={() => setIsMobileMenuOpen(false)}>Sign Up</Link>
        </div>
      </div>

      <main className="public-main">
        {children}
      </main>

      {/* Footer */}
      <footer className="public-footer">
        <div className="public-footer__container">
          <div className="public-footer__content">
            <div className="public-footer__brand">
              <Logo size="sm" />
              <p>Engineers Hub is the leading job platform for engineering professionals in Nigeria. Connect with top companies and find your dream career.</p>
            </div>
            <div className="public-footer__column">
              <h4>For Job Seekers</h4>
              <Link to="/jobs">Browse Jobs</Link>
              <Link to="/reviews">Company Reviews</Link>
              <Link to="/resume">Resume Builder</Link>
              <Link to="/help">Career Advice</Link>
            </div>
            <div className="public-footer__column">
              <h4>For Employers</h4>
              <Link to="/recruiter/jobs/new">Post a Job</Link>
              <Link to="/recruiter/dashboard">Recruiter Dashboard</Link>
              <Link to="/contact">Contact Sales</Link>
            </div>
            <div className="public-footer__column">
              <h4>Company</h4>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/terms">Terms of Use</Link>
              <Link to="/privacy">Privacy Policy</Link>
            </div>
          </div>
          <div className="public-footer__bottom">
            <p>&copy; 2025 Engineers Hub. All rights reserved.</p>
            <div className="public-footer__social">
              <a href="#" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
