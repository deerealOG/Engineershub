import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { DashboardLayout } from '../../components/layout';
import { Input, Button, Modal } from '../../components/ui';
import shellLogo from '../../assets/images/shell-logo.webp';
import './CompanyReviews.css';

const MOCK_COMPANIES = [
  {
    id: 1,
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
  },
  {
    id: 2,
    name: 'Chevron Nigeria',
    industry: 'Oil and Gas',
    rating: 5,
    reviews: 89,
    logo: shellLogo,
    description: 'Chevron is one of the largest oil companies in the world, driving innovation in energy production.',
    founded: '1961',
    employees: '45,000+',
    website: 'www.chevron.com',
    location: 'Lagos, Nigeria'
  },
  {
    id: 3,
    name: 'Total Energies',
    industry: 'Oil and Gas',
    rating: 4,
    reviews: 156,
    logo: shellLogo,
    description: 'TotalEnergies is a global multi-energy company that produces and markets energies.',
    founded: '1956',
    employees: '100,000+',
    website: 'www.totalenergies.com',
    location: 'Port Harcourt, Nigeria'
  },
  {
    id: 4,
    name: 'Dangote Industries',
    industry: 'Manufacturing',
    rating: 3,
    reviews: 234,
    logo: shellLogo,
    description: 'Dangote Industries Limited is one of the largest conglomerates in Africa.',
    founded: '1981',
    employees: '30,000+',
    website: 'www.dangote.com',
    location: 'Lagos, Nigeria'
  },
  {
    id: 5,
    name: 'Julius Berger',
    industry: 'Construction',
    rating: 4,
    reviews: 178,
    logo: shellLogo,
    description: 'Julius Berger Nigeria Plc is a leading construction company in Nigeria.',
    founded: '1970',
    employees: '15,000+',
    website: 'www.julius-berger.com',
    location: 'Abuja, Nigeria'
  },
  {
    id: 6,
    name: 'NNPC',
    industry: 'Oil and Gas',
    rating: 3,
    reviews: 312,
    logo: shellLogo,
    description: 'The Nigerian National Petroleum Corporation is the state oil corporation.',
    founded: '1977',
    employees: '20,000+',
    website: 'www.nnpcgroup.com',
    location: 'Abuja, Nigeria'
  },
  {
    id: 7,
    name: 'Schlumberger',
    industry: 'Oil and Gas Services',
    rating: 5,
    reviews: 67,
    logo: shellLogo,
    description: 'Schlumberger is the world\'s leading oilfield services company.',
    founded: '1926',
    employees: '85,000+',
    website: 'www.slb.com',
    location: 'Lagos, Nigeria'
  },
  {
    id: 8,
    name: 'Lafarge Africa',
    industry: 'Building Materials',
    rating: 4,
    reviews: 145,
    logo: shellLogo,
    description: 'Lafarge Africa is a leading building solutions company in Africa.',
    founded: '1959',
    employees: '3,000+',
    website: 'www.lafarge.com.ng',
    location: 'Lagos, Nigeria'
  },
  {
    id: 9,
    name: 'ExxonMobil',
    industry: 'Oil and Gas',
    rating: 4,
    reviews: 98,
    logo: shellLogo,
    description: 'ExxonMobil is one of the world\'s largest publicly traded energy companies.',
    founded: '1955',
    employees: '70,000+',
    website: 'www.exxonmobil.com',
    location: 'Lagos, Nigeria'
  },
];

interface Company {
  id: number;
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

  // Filter companies based on search term
  const filteredCompanies = useMemo(() => {
    if (!searchTerm.trim()) return MOCK_COMPANIES;
    const term = searchTerm.toLowerCase();
    return MOCK_COMPANIES.filter(
      company =>
        company.name.toLowerCase().includes(term) ||
        company.industry.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  const handleCardClick = (company: Company) => {
    setSelectedCompany(company);
  };

  const handleCloseModal = () => {
    setSelectedCompany(null);
  };

  const handleSearch = () => {
    // Search is already reactive via useMemo, button provides UX feedback
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
              placeholder="Search by name or industry..."
            />
            <Button size="md" onClick={handleSearch}>Find Company</Button>
          </div>

          <div className="company-reviews__section">
            <h2>{searchTerm ? `Results for "${searchTerm}"` : 'Popular companies'}</h2>
            {filteredCompanies.length === 0 ? (
              <div className="company-reviews__empty">
                <p>No companies found matching "{searchTerm}"</p>
              </div>
            ) : (
              <div className="company-reviews__grid">
                {filteredCompanies.map((company) => (
                  <div 
                    key={company.id} 
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
            )}
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
            <Link to="/rate-employer" className="company-reviews__cta-btn">
              Rate Company
            </Link>
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
