import { PublicLayout } from '../../components/layout';
import './Help.css';

export function Help() {
  return (
    <PublicLayout>
      <div className="help-page">
        <div className="help-container">
          <div className="help-header">
            <h1>Help & Support</h1>
            <p>Find answers to common questions and learn how to use Engineers Hub.</p>
          </div>

          <div className="help-search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" placeholder="Search for help articles..." />
          </div>

          <div className="help-grid">
            <div className="help-category">
              <h2>Job Seekers</h2>
              <ul className="help-links">
                <li><a href="#">How to create a standout profile</a></li>
                <li><a href="#">Applying for jobs</a></li>
                <li><a href="#">Managing job alerts</a></li>
                <li><a href="#">Resume tips and tricks</a></li>
                <li><a href="#">Interview preparation guide</a></li>
              </ul>
            </div>

            <div className="help-category">
              <h2>Recruiters</h2>
              <ul className="help-links">
                <li><a href="#">How to post a job</a></li>
                <li><a href="#">Searching for candidates</a></li>
                <li><a href="#">Managing applications</a></li>
                <li><a href="#">Company profile optimization</a></li>
                <li><a href="#">Pricing and subscriptions</a></li>
              </ul>
            </div>

            <div className="help-category">
              <h2>Account & Security</h2>
              <ul className="help-links">
                <li><a href="#">Resetting your password</a></li>
                <li><a href="#">Account verification process</a></li>
                <li><a href="#">Privacy settings</a></li>
                <li><a href="#">Reporting suspicious activity</a></li>
                <li><a href="#">Deleting your account</a></li>
              </ul>
            </div>
          </div>

          <div className="help-faq">
            <h2>Frequently Asked Questions</h2>
            
            <div className="faq-item">
              <h3>Is Engineers Hub free to use?</h3>
              <p>Yes, for job seekers, creating a profile and applying for jobs is completely free. Recruiters have access to both free and premium posting options.</p>
            </div>

            <div className="faq-item">
              <h3>How do I verify my engineering credentials?</h3>
              <p>During profile creation, you can upload certificates and professional licenses. Our team verifies these documents to add a "Verified" badge to your profile.</p>
            </div>

            <div className="faq-item">
              <h3>Can I hide my profile from my current employer?</h3>
              <p>Yes, you can adjust your privacy settings to control who can view your profile and resume.</p>
            </div>

            <div className="faq-item">
              <h3>How long does it take for a job post to be approved?</h3>
              <p>Most job posts are reviewed and approved within 2-4 hours during business days.</p>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
