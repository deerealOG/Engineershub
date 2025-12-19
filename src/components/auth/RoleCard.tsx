import './RoleCard.css';

interface RoleCardProps {
  icon: React.ReactNode;
  title: string;
  selected?: boolean;
  onClick?: () => void;
}

export function RoleCard({ icon, title, selected, onClick }: RoleCardProps) {
  return (
    <button
      type="button"
      className={`role-card ${selected ? 'role-card--selected' : ''}`}
      onClick={onClick}
    >
      <div className="role-card__icon">{icon}</div>
      <p className="role-card__title">{title}</p>
      <div className="role-card__radio">
        <div className="role-card__radio-inner" />
      </div>
    </button>
  );
}
