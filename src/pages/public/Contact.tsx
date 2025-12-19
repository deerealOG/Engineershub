import { PublicLayout } from '../../components/layout';
import { Button } from '../../components/ui';
import './Contact.css';

export function Contact() {
  return (
    <PublicLayout>
      <div className="contact-page">
        <div className="contact-container">
          <div className="contact-header">
            <h1>Contact Us</h1>
            <p>We're here to help. Get in touch with our team.</p>
          </div>

          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-card">
              <h2>Send us a message</h2>
              <form className="contact-form">
                <div className="form-group-half">
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" placeholder="Enter first name" />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" placeholder="Enter last name" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="Enter email address" />
                </div>

                <div className="form-group">
                  <label>Subject</label>
                  <select>
                    <option value="">Select a subject</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea rows={5} placeholder="How can we help you?"></textarea>
                </div>

                <Button size="lg" fullWidth>Send Message</Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <div className="contact-info-card">
                <h3>Contact Information</h3>
                <p>Have questions? Reach out to us directly.</p>

                <div className="info-item">
                  <div className="info-icon">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>support@engineershub.ng</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.12 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <p>+234 800 123 4567</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4>Office</h4>
                    <p>12 Victoria Island<br />Lagos, Nigeria</p>
                  </div>
                </div>
              </div>

              <div className="contact-map">
                {/* Placeholder for map */}
                <div className="map-placeholder">
                  Map View
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
