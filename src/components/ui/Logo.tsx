import engHubLogo from '../../assets/images/enghub-logo.svg';
import './Logo.css';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export function Logo({ size = 'md', showText = true }: LogoProps) {
  const sizeClasses = {
    sm: 'logo--sm',
    md: 'logo--md',
    lg: 'logo--lg',
  };

  return (
    <div className={`logo ${sizeClasses[size]}`}>
      <div className="logo__icon">
        <img src={engHubLogo} alt="Engineers Hub Logo" style={{ width: '100%', height: '100%' }} />
      </div>
      {showText && (
        <span className="logo__text">
          <span className="logo__text-engineers">Engineers</span>{' '} <br></br>
          <span className="logo__text-hub">Hub</span>
        </span>
      )}
    </div>
  );
}
