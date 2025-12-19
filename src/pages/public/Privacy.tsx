import { PublicLayout } from '../../components/layout';
import { Link } from 'react-router-dom';
import './Privacy.css';

export function Privacy() {
  return (
    <PublicLayout>
      <div className="privacy-page">
        <div className="privacy-container">
          <div className="privacy-header">
            <h1>Privacy Policy</h1>
            <p>Last updated: June 1, 2025</p>
          </div>

          <div className="privacy-content">
            <section className="privacy-section">
              <h2>1. Introduction</h2>
              <p>
                At Engineers Hub, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section className="privacy-section">
              <h2>2. Information We Collect</h2>
              <h3>2.1 Personal Data</h3>
              <p>
                We may collect personal information that you voluntarily provide to us when registering for the platform, including:
              </p>
              <ul>
                <li>Name and contact information</li>
                <li>Professional history and resumes</li>
                <li>Educational background</li>
                <li>Profile photographs</li>
              </ul>
              <h3>2.2 Usage Data</h3>
              <p>
                We automatically collect certain information when you visit, use, or navigate the platform, such as IP address, browser type, device characteristics, and operating system.
              </p>
            </section>

            <section className="privacy-section">
              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Create and manage your account</li>
                <li>Facilitate the job application process</li>
                <li>Send you job alerts and marketing communications</li>
                <li>Improve our website and user experience</li>
                <li>Prevent fraudulent activities</li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2>4. Sharing Your Information</h2>
              <p>
                We may share information we have collected about you in certain situations:
              </p>
              <ul>
                <li><strong>With Recruiters:</strong> Your profile and resume are visible to recruiters when you apply for jobs or make your profile public.</li>
                <li><strong>Service Providers:</strong> We may share data with third-party vendors who perform services for us (e.g., hosting, analytics).</li>
                <li><strong>Legal Obligations:</strong> We may disclose information if required to do so by law.</li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2>5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
              </p>
            </section>

            <section className="privacy-section">
              <h2>6. Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data. You can manage most of your data directly through your account settings.
              </p>
            </section>

            <section className="privacy-section">
              <h2>7. Cookies</h2>
              <p>
                We use cookies and similar tracking technologies to track the activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

            <section className="privacy-section">
              <h2>8. Contact Us</h2>
              <p>
                If you have questions or comments about this policy, you may email us at <Link to="/contact">privacy@engineershub.ng</Link>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
