import { useState } from 'react';
import { DashboardLayout } from '../../components/layout';
import { Input, Button, Modal } from '../../components/ui';
import shellLogo from '../../assets/images/shell-logo.webp';
import './CompanyReviews.css';

const MOCK_COMPANIES = Array(12).fill({
  name: 'Shell Petroleum Company',
  industry: 'Oil and Gas',
  rating: 4,
  reviews: 122,
  logo: shellLogo,
  description: 'Shell is a global energy company with operations in more than 70 countries. We use advanced technologies and take an innovative approach to help build a sustainable energy future.',
  founded: '1907',
  employees: '80,000+',
  website: 'www.shell.com',
  location: 'Lagos, Nigeria'
});

interface Company {
  name: string;
  industry: string;
  rating: number;
  reviews: number;
  logo: string;
  description?: string;
  founded?: string;
  employees?: string;
  website?: string;
  location?: string;
}

export function CompanyReviews() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  const handleCardClick = (company: Company) => {
    setSelectedCompany(company);
  };

  const handleCloseModal = () => {
    setSelectedCompany(null);
  };

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
                <div 
                  key={index} 
                  className="company-card"
                  onClick={() => handleCardClick(company)}
                >
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
                    <button onClick={(e) => { e.stopPropagation(); }}>Salaries</button>
                    <button onClick={(e) => { e.stopPropagation(); }}>Jobs</button>
                    <button onClick={(e) => { e.stopPropagation(); }}>Feedback</button>
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

        {/* Company Details Modal */}
        <Modal
          isOpen={!!selectedCompany}
          onClose={handleCloseModal}
          title={selectedCompany?.name}
          footer={
            <>
              <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
              <Button>View Jobs</Button>
            </>
          }
        >
          {selectedCompany && (
            <div className="company-modal-content">
              <div className="company-modal__header-info">
                <img src={selectedCompany.logo} alt={selectedCompany.name} className="company-modal__logo" />
                <div>
                  <p className="company-modal__industry">{selectedCompany.industry}</p>
                  <div className="company-modal__rating">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className={star <= selectedCompany.rating ? 'star filled' : 'star'}>
                        ★
                      </span>
                    ))}
                    <span className="company-modal__reviews-count">({selectedCompany.reviews} reviews)</span>
                  </div>
                </div>
              </div>

              <div className="company-modal__description">
                <h3>About</h3>
                <p>{selectedCompany.description}</p>
              </div>

              <div className="company-modal__stats-grid">
                <div className="company-modal__stat">
                  <span className="label">Location</span>
                  <span className="value">{selectedCompany.location}</span>
                </div>
                <div className="company-modal__stat">
                  <span className="label">Employees</span>
                  <span className="value">{selectedCompany.employees}</span>
                </div>
                <div className="company-modal__stat">
                  <span className="label">Founded</span>
                  <span className="value">{selectedCompany.founded}</span>
                </div>
                <div className="company-modal__stat">
                  <span className="label">Website</span>
                  <a href={`https://${selectedCompany.website}`} target="_blank" rel="noreferrer" className="value link">
                    {selectedCompany.website}
                  </a>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </DashboardLayout>
  );
}
