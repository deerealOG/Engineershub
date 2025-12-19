import './Checkbox.css';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
}

export function Checkbox({ label, id, className = '', ...props }: CheckboxProps) {
  const checkboxId = id || `checkbox-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <div className={`checkbox-group ${className}`}>
      <input type="checkbox" id={checkboxId} className="checkbox" {...props} />
      <label htmlFor={checkboxId} className="checkbox-label">
        <span className="checkbox-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </span>
        <span className="checkbox-text">{label}</span>
      </label>
    </div>
  );
}
