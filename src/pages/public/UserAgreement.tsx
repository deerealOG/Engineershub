import { PublicLayout } from '../../components/layout';
import { Link } from 'react-router-dom';
import './Legal.css';

export function UserAgreement() {
  return (
    <PublicLayout>
      <div className="legal-page">
        <div className="legal-page__header">
          <h1>User Agreement</h1>
          <p>Last updated: June 1, 2025</p>
        </div>

        <div className="legal-page__content">
          <section className="legal-page__section">
            <h2>1. Introduction</h2>
            <p>
              This User Agreement ("Agreement") constitutes a legally binding contract between you and Engineers Hub. By creating an account or using our services, you acknowledge that you have read, understood, and agree to be bound by this Agreement.
            </p>
          </section>

          <section className="legal-page__section">
            <h2>2. Eligibility</h2>
            <p>
              To use Engineers Hub, you must:
            </p>
            <ul>
              <li>Be at least 18 years of age</li>
              <li>Have the legal capacity to enter into this Agreement</li>
              <li>Not be prohibited from using the services under applicable laws</li>
              <li>Provide accurate and truthful information when creating your account</li>
            </ul>
          </section>

          <section className="legal-page__section">
            <h2>3. Your Account</h2>
            <h3>3.1 Account Creation</h3>
            <p>
              When you create an account, you agree to provide accurate, complete, and current information. You are responsible for all activities that occur under your account.
            </p>
            <h3>3.2 Account Types</h3>
            <p>
              We offer two types of accounts:
            </p>
            <ul>
              <li><strong>Job Seeker Account:</strong> For individuals seeking engineering positions.</li>
              <li><strong>Recruiter Account:</strong> For companies and individuals posting job opportunities.</li>
            </ul>
            <h3>3.3 Account Security</h3>
            <p>
              You are responsible for safeguarding your account credentials. You agree to notify us immediately of any unauthorized access to your account.
            </p>
          </section>

          <section className="legal-page__section">
            <h2>4. User Responsibilities</h2>
            <h3>4.1 For Job Seekers</h3>
            <ul>
              <li>Provide accurate resume and professional information</li>
              <li>Apply only to positions you are genuinely interested in</li>
              <li>Respond promptly to employer communications</li>
              <li>Maintain professional conduct throughout the hiring process</li>
            </ul>
            <h3>4.2 For Recruiters</h3>
            <ul>
              <li>Post only legitimate and available job positions</li>
              <li>Provide accurate job descriptions and requirements</li>
              <li>Treat all candidates with respect and fairness</li>
              <li>Comply with all applicable employment laws</li>
            </ul>
          </section>

          <section className="legal-page__section">
            <h2>5. Prohibited Activities</h2>
            <p>
              The following activities are strictly prohibited on Engineers Hub:
            </p>
            <ul>
              <li>Posting false or misleading job listings</li>
              <li>Misrepresenting your qualifications or experience</li>
              <li>Engaging in discriminatory practices</li>
              <li>Sharing personal data of other users without consent</li>
              <li>Using the platform for any illegal purposes</li>
              <li>Attempting to circumvent our security measures</li>
              <li>Scraping or harvesting user data</li>
            </ul>
          </section>

          <section className="legal-page__section">
            <h2>6. Intellectual Property</h2>
            <p>
              All content on Engineers Hub, including logos, designs, and software, is owned by Engineers Hub or its licensors. You may not use our intellectual property without prior written consent.
            </p>
            <p>
              You retain ownership of content you post but grant us a non-exclusive license to use, display, and distribute it on our platform.
            </p>
          </section>

          <section className="legal-page__section">
            <h2>7. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your account at any time for violations of this Agreement. You may also terminate your account by contacting our support team.
            </p>
          </section>

          <section className="legal-page__section">
            <h2>8. Dispute Resolution</h2>
            <p>
              Any disputes arising from this Agreement shall be resolved through good-faith negotiations. If negotiations fail, disputes will be resolved through binding arbitration in accordance with Nigerian law.
            </p>
          </section>

          <section className="legal-page__section">
            <h2>9. Amendments</h2>
            <p>
              We may update this Agreement from time to time. We will notify you of significant changes via email or through the platform. Continued use of our services after changes constitutes acceptance.
            </p>
          </section>

          <section className="legal-page__section">
            <h2>10. Contact Information</h2>
            <p>
              For questions about this User Agreement, please contact us at <Link to="/contact">legal@engineershub.ng</Link>.
            </p>
          </section>
        </div>
      </div>
    </PublicLayout>
  );
}
