import { Link } from 'react-router-dom';
import { PublicLayout } from '../../components/layout';
import './About.css';

export function About() {
  return (
    <PublicLayout>
      <div className="about-page">
        {/* Hero */}
        <section className="about-hero">
          <h1>
            Connecting <span>Engineers</span> with Opportunities
          </h1>
          <p>
            Engineers Hub is Nigeria's leading job platform dedicated exclusively to engineering professionals. We bridge the gap between talented engineers and forward-thinking companies.
          </p>
        </section>

        {/* Our Story */}
        <section className="about-story">
          <div className="about-story__content">
            <h2>Our Story</h2>
            <p>
              Founded in 2024, Engineers Hub was born from a simple observation: engineering professionals in Nigeria deserved a dedicated platform that understood their unique career needs.
            </p>
            <p>
              Our founders, themselves engineers, experienced firsthand the challenges of finding quality engineering positions. Generic job boards didn't cater to the specific requirements of the engineering industry.
            </p>
            <p>
              Today, we're proud to serve thousands of engineers and hundreds of companies, creating meaningful connections that drive Nigeria's industrial growth forward.
            </p>
          </div>
          <div className="about-story__image">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
              <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.56-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22l-1.92 3.32c-.12.22-.07.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .43-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.03-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
            </svg>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="about-mission-vision">
          <div className="about-card">
            <div className="about-card__icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3>Our Mission</h3>
            <p>
              To empower engineering professionals by connecting them with meaningful career opportunities, while helping companies build world-class engineering teams that drive innovation and growth.
            </p>
          </div>
          <div className="about-card">
            <div className="about-card__icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3>Our Vision</h3>
            <p>
              To become Africa's most trusted platform for engineering talent, setting the standard for how engineering professionals and companies connect, collaborate, and succeed together.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="about-values">
          <div className="about-values__header">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="about-values__grid">
            <div className="about-value">
              <div className="about-value__icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4>Trust</h4>
              <p>We verify all companies and prioritize user security.</p>
            </div>
            <div className="about-value">
              <div className="about-value__icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4>Community</h4>
              <p>We foster connections within the engineering community.</p>
            </div>
            <div className="about-value">
              <div className="about-value__icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4>Innovation</h4>
              <p>We continuously improve our platform and services.</p>
            </div>
            <div className="about-value">
              <div className="about-value__icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4>Excellence</h4>
              <p>We strive for quality in every interaction.</p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="about-stats">
          <div className="about-stat">
            <div className="about-stat__value">10,000+</div>
            <div className="about-stat__label">Active Jobs</div>
          </div>
          <div className="about-stat">
            <div className="about-stat__value">500+</div>
            <div className="about-stat__label">Companies</div>
          </div>
          <div className="about-stat">
            <div className="about-stat__value">50,000+</div>
            <div className="about-stat__label">Engineers</div>
          </div>
          <div className="about-stat">
            <div className="about-stat__value">15,000+</div>
            <div className="about-stat__label">Successful Hires</div>
          </div>
        </section>

        {/* Team */}
        <section className="about-team">
          <div className="about-team__header">
            <h2>Meet Our Team</h2>
            <p>The people behind Engineers Hub</p>
          </div>
          <div className="about-team__grid">
            <div className="about-team-member">
              <div className="about-team-member__avatar">
                <div className="about-team-member__initials">OA</div>
              </div>
              <div className="about-team-member__info">
                <h4>Oluwaseun Adeyemi</h4>
                <span>CEO & Co-Founder</span>
              </div>
            </div>
            <div className="about-team-member">
              <div className="about-team-member__avatar">
                <div className="about-team-member__initials">CN</div>
              </div>
              <div className="about-team-member__info">
                <h4>Chidinma Nwosu</h4>
                <span>CTO & Co-Founder</span>
              </div>
            </div>
            <div className="about-team-member">
              <div className="about-team-member__avatar">
                <div className="about-team-member__initials">AB</div>
              </div>
              <div className="about-team-member__info">
                <h4>Abubakar Bello</h4>
                <span>Head of Operations</span>
              </div>
            </div>
            <div className="about-team-member">
              <div className="about-team-member__avatar">
                <div className="about-team-member__initials">FO</div>
              </div>
              <div className="about-team-member__info">
                <h4>Folake Okonkwo</h4>
                <span>Head of Marketing</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="about-cta">
          <h2>Ready to Get Started?</h2>
          <p>Join thousands of engineering professionals and companies on Engineers Hub today.</p>
          <div className="about-cta__buttons">
            <Link to="/" className="about-cta__btn-primary">Sign Up Now</Link>
            <Link to="/contact" className="about-cta__btn-secondary">Contact Us</Link>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}
