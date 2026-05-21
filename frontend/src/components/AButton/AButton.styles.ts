import styled, { css } from "styled-components";
import { ButtonVariant } from "../Button/Button.types";
import type { AnchorAttributes } from "@/types";

interface StyledButtonProps extends AnchorAttributes {
  $variant?: ButtonVariant;
  $disabled?: boolean;
}

export const StyledAButton = styled.a<StyledButtonProps>`
  padding: 0;
  font-size: 1em;
  font-weight: bold;
  border: 0.002rem solid ${({ theme, $variant = ButtonVariant.Neutral }) => theme.button.variants[$variant].borderDark};
  box-sizing: border-box;
  border-radius: 5px;
  background-color: ${({ theme, $variant = ButtonVariant.Neutral }) => theme.button.variants[$variant].backgroundLight};
  color: ${({ theme, $variant = ButtonVariant.Neutral }) => theme.button.variants[$variant].textDark};
  display: flex;

  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1px;
  flex-wrap: wrap;

  cursor: ${({ $disabled }) => $disabled ? 'not-allowed' : 'pointer'};
  transition: background-color 400ms ease, color 400ms ease;

  text-decoration: none;
  
  ${({ $disabled, theme, $variant = ButtonVariant.Neutral }) => !$disabled && css`&:hover {
    background-color: ${theme.button.variants[$variant].backgroundDark};
    color: ${theme.button.variants[$variant].textLight};
    border-color: ${theme.button.variants[$variant].borderLight};

    text-decoration: underline;

  }`}
`;