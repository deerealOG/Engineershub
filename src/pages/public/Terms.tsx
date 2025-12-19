import { PublicLayout } from '../../components/layout';
import { Link } from 'react-router-dom';
import './Terms.css';

export function Terms() {
  return (
    <PublicLayout>
      <div className="terms-page">
        <div className="terms-container">
          <div className="terms-header">
            <h1>Terms of Service</h1>
            <p>Last updated: June 1, 2025</p>
          </div>

          <div className="terms-content">
            <section className="terms-section">
              <h2>1. Agreement to Terms</h2>
              <p>
                By accessing or using Engineers Hub ("the Platform," "we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="terms-section">
              <h2>2. Description of Service</h2>
              <p>
                Engineers Hub provides an online platform connecting engineering professionals ("Job Seekers") with prospective employers ("Recruiters" or "Companies"). We provide tools for job posting, application management, and professional networking.
              </p>
            </section>

            <section className="terms-section">
              <h2>3. User Accounts</h2>
              <h3>3.1 Registration</h3>
              <p>
                To access certain features, you must register for an account. You agree to provide accurate, current, and complete information during the registration process.
              </p>
              <h3>3.2 Account Security</h3>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must immediately notify us of any unauthorized use of your account.
              </p>
              <h3>3.3 User Types</h3>
              <ul>
                <li><strong>Job Seekers:</strong> Individuals seeking employment opportunities.</li>
                <li><strong>Recruiters:</strong> Companies or individuals posting job opportunities.</li>
              </ul>
            </section>

            <section className="terms-section">
              <h2>4. User Conduct</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Use the platform for any illegal purpose</li>
                <li>Post false, misleading, or fraudulent content</li>
                <li>Harass, abuse, or harm another person</li>
                <li>Impersonate any person or entity</li>
                <li>Interfere with the proper operation of the platform</li>
                <li>Attempt to bypass any security measures</li>
              </ul>
            </section>

            <section className="terms-section">
              <h2>5. Content</h2>
              <h3>5.1 User Content</h3>
              <p>
                You retain ownership of the content you post (e.g., resumes, job postings), but you grant us a license to use, display, and distribute this content on the platform.
              </p>
              <h3>5.2 Prohibited Content</h3>
              <p>
                We reserve the right to remove any content that violates these terms or is deemed inappropriate, including but not limited to discriminatory, offensive, or spam content.
              </p>
            </section>

            <section className="terms-section">
              <h2>6. Fees and Payments</h2>
              <p>
                Job seeking services are generally free for candidates. Recruiters may be charged fees for posting jobs or accessing premium features. All fees are non-refundable unless otherwise stated.
              </p>
            </section>

            <section className="terms-section">
              <h2>7. Disclaimer of Warranties</h2>
              <p>
                The platform is provided "as is" and "as available" without any warranties of any kind. We do not guarantee that the platform will be error-free or uninterrupted.
              </p>
            </section>

            <section className="terms-section">
              <h2>8. Limitation of Liability</h2>
              <p>
                Engineers Hub shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the platform.
              </p>
            </section>

            <section className="terms-section">
              <h2>9. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We will notify users of any material changes. Continued use of the platform constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="terms-section">
              <h2>10. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at <Link to="/contact">support@engineershub.ng</Link>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
