import styled, { css } from "styled-components";
import { Button } from "../Button/Button";

interface StyledMenubarContainerProps {
  $isScrolled?: boolean;
}

export const StyledMenubarContainer = styled.nav<StyledMenubarContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  box-sizing: border-box;
  position: sticky;
  column-gap: 10px;
  top: 0;
  margin: auto;
  
  background-color: ${({ theme }) => theme.menubar.background};

  width: 100%;
  border-radius: 0;
  border: 1px solid ${({ theme }) => theme.menubar.background};
  border-bottom-color: black;
  transition: width 400ms ease,
    border-radius 400ms ease,
    border-color 400ms ease,
    transform 400ms ease,
    opacity 400ms ease;

  ${({ $isScrolled }) => $isScrolled && css`
    width: 80%;
    border-radius: 20px;
    border: 1px solid black;
    opacity: 80%;
    transform: translateY(15px);
  
  `}
`;

export const StyledMenubarBehindArea = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 42px;
  background-color: ${({ theme }) => theme.banner.background};
`;


export const StyledMenubarButton = styled(Button)`
  height: 32px;
  min-width: 120px;
  transition: background-color 600ms ease, border-color 600ms ease;
`;
