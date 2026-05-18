import React, { forwardRef, useCallback, useEffect, useMemo, useState, type ReactNode } from "react"
import { ButtonVariant } from "./Button.types";
import { StyledButton } from "./Button.styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: ButtonVariant;
  label?: ReactNode;
  disabled?: boolean;
  timer?: number;
  icon?: ReactNode;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ label, onClick, children, variant = ButtonVariant.Neutral, disabled = false, timer = 0, icon, ...props }, ref) => {
  
  const [currentTimer, setCurrentTimer] = useState(0);
  const isDisabled = useMemo(() => disabled || currentTimer > 0, [disabled, currentTimer]);

  useEffect(() => {
    if (currentTimer > 0) {
      setTimeout(() => setCurrentTimer((p) => p - 1), 1000);
    }
  }, [currentTimer]);

  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e);
    setTimeout(() => setCurrentTimer(timer), 0);
  }, [onClick, timer]);

  return (
    <StyledButton ref={ref} onClick={handleClick} $variant={isDisabled ? ButtonVariant.Disabled : variant} $disabled={isDisabled} disabled={isDisabled} {...props}>
     {icon && <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>{icon}</div>}
      {currentTimer || label}
      {children}
    </StyledButton>
  )
});
