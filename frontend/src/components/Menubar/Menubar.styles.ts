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
  position: fixed;
  column-gap: min(0.5%, 10px);
  top: 0;
  margin: auto;
  left: 0;
  right: 0;
  z-index: 10;
  overflow: hidden;
  
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
    min-width: 280px;
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
  /* width: 120px; */
  padding: 0 5px 0 5px;
  flex-shrink: 1;
  transition: background-color 600ms ease, border-color 600ms ease;

  @media (max-width: 675px) {
    display: none;
  }
`;

export const StyledSideZone = styled.div`
  min-width: 140px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const StyledLogo = styled.span`
  background-color: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};
  user-select: none;
  padding: 5px;
  border-radius: 5px;

  box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.75);
  cursor: pointer;

  position: absolute;
  left: 15px;
`;
