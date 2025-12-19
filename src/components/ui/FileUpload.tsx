import './FileUpload.css';

interface FileUploadProps {
  label: string;
  accept?: string;
  maxSize?: string;
  onChange?: (file: File | null) => void;
  preview?: string | null;
}

export function FileUpload({
  label,
  accept = '*',
  maxSize = '10MB',
  onChange,
  preview,
}: FileUploadProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onChange?.(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.currentTarget.classList.add('file-upload--dragover');
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.currentTarget.classList.remove('file-upload--dragover');
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.currentTarget.classList.remove('file-upload--dragover');
    const file = e.dataTransfer.files?.[0] || null;
    onChange?.(file);
  };

  return (
    <div className="file-upload-group">
      <label className="file-upload-label">{label}</label>
      <div
        className="file-upload"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {preview ? (
          <div className="file-upload__preview">
            <img src={preview} alt="Preview" />
          </div>
        ) : (
          <div className="file-upload__content">
            <div className="file-upload__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
            </div>
            <p className="file-upload__text">
              Drag and drop your {label.toLowerCase()} here, or
            </p>
            <label className="file-upload__button">
              Browse files
              <input
                type="file"
                accept={accept}
                onChange={handleFileChange}
                hidden
              />
            </label>
            <p className="file-upload__hint">{accept.replace('.*', '').toUpperCase()} up to {maxSize}</p>
          </div>
        )}
      </div>
    </div>
  );
}
