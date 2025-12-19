import { Link } from 'react-router-dom';
import { PublicLayout } from '../../components/layout';
import shellLogo from '../../assets/images/shell-logo.webp';
import './LandingPage.css';

export function LandingPage() {
  return (
    <PublicLayout>
      <div className="landing-page">
        {/* Hero Section */}
        <section className="landing-hero">
          <div className="landing-hero__container">
            <h1>
              Find Your Dream <span>Engineering</span> Career
            </h1>
            <p>
              Connect with top engineering firms and discover opportunities that match your skills and ambitions. Your next career move starts here.
            </p>
            <div className="landing-hero__actions">
              <Link to="/jobseeker/signup" className="landing-hero__btn-primary">Get Started</Link>
              <Link to="/jobs" className="landing-hero__btn-secondary">Browse Jobs</Link>
            </div>
            
            <div className="landing-hero__stats">
              <div className="landing-hero__stat">
                <div className="landing-hero__stat-value">10,000+</div>
                <div className="landing-hero__stat-label">Active Jobs</div>
              </div>
              <div className="landing-hero__stat">
                <div className="landing-hero__stat-value">500+</div>
                <div className="landing-hero__stat-label">Companies</div>
              </div>
              <div className="landing-hero__stat">
                <div className="landing-hero__stat-value">50,000+</div>
                <div className="landing-hero__stat-label">Job Seekers</div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="landing-how-it-works">
          <div className="landing-how-it-works__container">
            <div className="landing-section-title">
              <h2>How It Works</h2>
              <p>Get started in three simple steps</p>
            </div>
            
            <div className="landing-how-it-works__steps">
              <div className="landing-step">
                <div className="landing-step__number">1</div>
                <h3>Create Your Profile</h3>
                <p>Sign up and build your professional profile. Upload your CV and showcase your engineering skills and experience.</p>
              </div>
              <div className="landing-step">
                <div className="landing-step__number">2</div>
                <h3>Discover Opportunities</h3>
                <p>Browse thousands of engineering jobs from top companies. Filter by location, salary, and job type to find your perfect match.</p>
              </div>
              <div className="landing-step">
                <div className="landing-step__number">3</div>
                <h3>Apply & Get Hired</h3>
                <p>Apply with one click using your saved profile. Track your applications and connect directly with recruiters.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="landing-features">
          <div className="landing-features__container">
            <div className="landing-section-title">
              <h2>Why Choose Engineers Hub?</h2>
              <p>The platform built specifically for engineering professionals</p>
            </div>
            
            <div className="landing-features__grid">
              <div className="landing-feature">
                <div className="landing-feature__icon">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3>Smart Job Matching</h3>
                <p>Our AI-powered algorithm matches you with jobs that fit your skills, experience, and career goals.</p>
              </div>
              <div className="landing-feature">
                <div className="landing-feature__icon">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3>Verified Companies</h3>
                <p>All companies on our platform are verified to ensure you're applying to legitimate opportunities.</p>
              </div>
              <div className="landing-feature">
                <div className="landing-feature__icon">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3>Easy Apply</h3>
                <p>Apply to multiple jobs with one click using your saved resume and profile information.</p>
              </div>
              <div className="landing-feature">
                <div className="landing-feature__icon">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3>Direct Messaging</h3>
                <p>Connect directly with recruiters and hiring managers through our built-in messaging system.</p>
              </div>
              <div className="landing-feature">
                <div className="landing-feature__icon">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3>Salary Insights</h3>
                <p>Get access to salary data and company reviews to make informed career decisions.</p>
              </div>
              <div className="landing-feature">
                <div className="landing-feature__icon">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                    <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <h3>Job Alerts</h3>
                <p>Set up personalized job alerts and never miss an opportunity that matches your criteria.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Companies */}
        <section className="landing-companies">
          <div className="landing-companies__container">
            <h2>Trusted by Leading Engineering Companies</h2>
            <div className="landing-companies__logos">
              <img src={shellLogo} alt="Shell" />
              <img src={shellLogo} alt="Chevron" />
              <img src={shellLogo} alt="ExxonMobil" />
              <img src={shellLogo} alt="Total" />
              <img src={shellLogo} alt="NNPC" />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="landing-testimonials">
          <div className="landing-testimonials__container">
            <div className="landing-section-title">
              <h2>What Our Users Say</h2>
              <p>Success stories from engineers who found their dream jobs</p>
            </div>
            
            <div className="landing-testimonials__grid">
              <div className="landing-testimonial">
                <div className="landing-testimonial__quote">"</div>
                <p>Engineers Hub helped me land my dream job at a top oil & gas company. The platform is intuitive and the job matching is spot on!</p>
                <div className="landing-testimonial__author">
                  <div className="landing-testimonial__avatar">AO</div>
                  <div className="landing-testimonial__info">
                    <h4>Adebayo Okonkwo</h4>
                    <span>Mechanical Engineer at Shell</span>
                  </div>
                </div>
              </div>
              <div className="landing-testimonial">
                <div className="landing-testimonial__quote">"</div>
                <p>As a recruiter, I've found top talent through Engineers Hub. The quality of candidates is exceptional and the hiring process is streamlined.</p>
                <div className="landing-testimonial__author">
                  <div className="landing-testimonial__avatar">CN</div>
                  <div className="landing-testimonial__info">
                    <h4>Chioma Nwachukwu</h4>
                    <span>HR Manager at Chevron</span>
                  </div>
                </div>
              </div>
              <div className="landing-testimonial">
                <div className="landing-testimonial__quote">"</div>
                <p>The salary insights and company reviews helped me negotiate a better package. Highly recommend for all engineering professionals!</p>
                <div className="landing-testimonial__author">
                  <div className="landing-testimonial__avatar">EI</div>
                  <div className="landing-testimonial__info">
                    <h4>Emeka Ibrahim</h4>
                    <span>Process Engineer at Total</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="landing-cta">
          <div className="landing-cta__container">
            <h2>Ready to Start Your Journey?</h2>
            <p>Join thousands of engineering professionals who have found their dream careers through Engineers Hub.</p>
            <div className="landing-cta__form">
              <input type="email" placeholder="Enter your email address" />
              <button>Get Started</button>
            </div>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}
