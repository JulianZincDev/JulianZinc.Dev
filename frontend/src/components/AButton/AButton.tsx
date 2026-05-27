import React, { forwardRef, useCallback, useEffect, useMemo, useState, type ReactNode } from "react"
import { StyledAButton, StyledButtonSpan } from "./AButton.styles";
import { ButtonVariant } from "../Button/Button.types";
import type { AnchorAttributes } from "@/types";
import type { Interpolation } from "@emotion/react";
import type { Theme } from "@emotion/react";


interface ButtonProps extends AnchorAttributes {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  variant?: ButtonVariant;
  label?: ReactNode;
  disabled?: boolean;
  timer?: number;
  icon?: ReactNode;
  buttonContainerCss?: Interpolation<Theme>;
};

export const AButton = forwardRef<HTMLAnchorElement, ButtonProps>(({ label, onClick, children, variant = ButtonVariant.Neutral, disabled = false, timer = 0, icon, buttonContainerCss, style, className, ...props }, ref) => {
  
  const [currentTimer, setCurrentTimer] = useState(0);
  const isDisabled = useMemo(() => disabled || currentTimer > 0, [disabled, currentTimer]);

  useEffect(() => {
    if (currentTimer > 0) {
      setTimeout(() => setCurrentTimer((p) => p - 1), 1000);
    }
  }, [currentTimer]);

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    setTimeout(() => setCurrentTimer(timer), 0);
  }, [onClick, timer]);

  return (
    <StyledAButton ref={ref} onClick={handleClick} css={buttonContainerCss} $disabled={isDisabled} $variant={isDisabled ? ButtonVariant.Disabled : variant} {...props}>
      <StyledButtonSpan $variant={isDisabled ? ButtonVariant.Disabled : variant} $disabled={isDisabled} className={className} style={style} >
        {icon && <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>{icon}</div>}
        {currentTimer || label}
        {children}
      </StyledButtonSpan>
    </StyledAButton>
  )
});
