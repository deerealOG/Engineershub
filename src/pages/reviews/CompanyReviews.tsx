import { useState } from 'react';
import { DashboardLayout } from '../../components/layout';
import { Input, Button } from '../../components/ui';
import shellLogo from '../../assets/images/shell-logo.webp';
import './CompanyReviews.css';

const MOCK_COMPANIES = Array(12).fill({
  name: 'Shell Petroleum Company',
  industry: 'Oil and Gas',
  rating: 4,
  reviews: 122,
  logo: shellLogo,
});

export function CompanyReviews() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <DashboardLayout>
      <div className="company-reviews">
        <div className="company-reviews__container">
          <div className="company-reviews__header">
            <h1>Find great places to work and enhance your career growth</h1>
            <p>Get access to our trusted companies</p>
          </div>

          <h2>Search for companies</h2>
          <div className="company-reviews__search">
            <Input
              label="Company name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name"
            />
            <Button size="md">Find Search</Button>
          </div>

          <div className="company-reviews__section">
            <h2>Popular companies</h2>
            <div className="company-reviews__grid">
              {MOCK_COMPANIES.map((company, index) => (
                <div key={index} className="company-card">
                  <div className="company-card__header">
                    <img src={company.logo} alt={company.name} />
                    <div className="company-card__info">
                      <h3>{company.name}</h3>
                      <p>{company.industry}</p>
                    </div>
                  </div>
                  <div className="company-card__stats">
                    <div className="company-card__rating">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className={star <= company.rating ? 'star filled' : 'star'}>
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="company-card__reviews">{company.reviews} reviews</span>
                  </div>
                  <div className="company-card__links">
                    <button>Salaries</button>
                    <button>Jobs</button>
                    <button>Feedback</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
           <div className="company-reviews__pagination">
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>&gt;</button>
          </div>
          
          <div className="company-reviews__cta">
            <p>Do you want to rate a company?</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
