import './Stepper.css';

interface StepperProps {
  steps: string[];
  currentStep: number;
}

export function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="stepper">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;

        return (
          <div
            key={step}
            className={`stepper__step ${isActive ? 'stepper__step--active' : ''} ${isCompleted ? 'stepper__step--completed' : ''}`}
          >
            <div className="stepper__number">{stepNumber}</div>
            <span className="stepper__label">{step}</span>
            {index < steps.length - 1 && <div className="stepper__line" />}
          </div>
        );
      })}
    </div>
  );
}
