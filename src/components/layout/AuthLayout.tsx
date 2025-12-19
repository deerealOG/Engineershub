import './AuthLayout.css';

interface AuthLayoutProps {
  imageUrl: string;
  imageOverlay?: string;
  leftContent?: React.ReactNode;
  children: React.ReactNode;
}

export function AuthLayout({
  imageUrl,
  imageOverlay = 'purple',
  leftContent,
  children,
}: AuthLayoutProps) {
  const isPreset = ['purple', 'blue', 'orange', 'none'].includes(imageOverlay);
  const overlayClass = isPreset ? imageOverlay : 'custom';
  const customStyle = !isPreset
    ? ({ '--auth-overlay': imageOverlay } as React.CSSProperties)
    : {};

  return (
    <div className="auth-layout">
      <div
        className={`auth-layout__left auth-layout__left--${overlayClass}`}
        style={{ backgroundImage: `url(${imageUrl})`, ...customStyle }}
      >
        {leftContent && (
          <div className="auth-layout__left-content">{leftContent}</div>
        )}
      </div>
      <div className="auth-layout__right">
        <div className="auth-layout__right-content">{children}</div>
      </div>
    </div>
  );
}
