import { DashboardLayout } from '../../components/layout';
import './RateEmployer.css';

export function RateEmployer() {
  return (
    <DashboardLayout>
      <div className="rate-employer-page">
        <div className="rate-employer__container">
            <div className="rate-employer__header">
                <h1>Rate your current or previous employers</h1>
                <p>Help your employers grow their rating and reach.</p>
            </div>

            <div className="rate-employer__search">
                <label className="rate-employer__search-label">Company name</label>
                <div className="rate-employer__search-input-group">
                    <div className="rate-employer__search-wrapper">
                        <svg className="rate-employer__search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                             <circle cx="11" cy="11" r="8"></circle>
                             <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                        <input type="text" className="rate-employer__search-input" placeholder="Search by name" />
                    </div>
                    <button className="btn-find-company">Find Company</button>
                </div>
            </div>

            <div className="rate-employer__details">
                <h2>Company Details</h2>
                <form className="rate-employer__form">
                    <div className="form-group">
                        <label className="form-label">Company Name</label>
                        <input type="text" className="form-input" />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label">Your Full Name</label>
                            <input type="text" className="form-input" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Email Address</label>
                            <input type="text" className="form-input" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label">Salary</label>
                            <input type="text" className="form-input" />
                        </div>
                         <div className="form-group">
                            <label className="form-label">Current / Previous Role</label>
                            <input type="text" className="form-input" placeholder="Your previous or current role" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Feedback</label>
                        <textarea className="form-textarea" placeholder="Give a feedback of the company"></textarea>
                    </div>

                    <div className="form-group">
                         <label className="form-label">Rate</label>
                         {/* Placeholder for rating input/select */}
                         <div style={{ width: '200px', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <span></span>
                            <span style={{ fontSize: '10px' }}>▼</span>
                         </div>
                    </div>

                    <div className="rate-employer__footer">
                         <button type="submit" className="btn-submit-review">Submit Review</button>
                         <button type="button" className="btn-return-home">Return home</button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
