import styled from "@emotion/styled";
import { Button } from "../Button/Button";
import { css } from "@emotion/react";
import { RxHamburgerMenu } from "react-icons/rx";

interface StyledMenubarContainerProps {
  $isScrolled?: boolean;
  $isVisible?: boolean;
  $isHamburgerOpen?: boolean;
}

export const StyledMenubarContainer = styled.nav<StyledMenubarContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 42px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  margin: auto;
  left: 0;
  right: 0;
  z-index: 10;
  /* overflow: hidden; */
  
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
  
  
  ${({ $isScrolled, $isVisible }) => $isScrolled && css`
    width: 80%;
    min-width: 280px;
    border-radius: 20px;
    border: 1px solid black;
    opacity: 0.8;
    transform: translateY(${$isVisible ? '10px' : '-42px'});
  `};

  ${({ $isHamburgerOpen }) => $isHamburgerOpen && css`
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 0;
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

  &:hover {
    text-decoration: none;
  }
`;

export const StyledMenuButtonContainer = styled.div`
  display: flex;
  column-gap: min(0.5vw, 10px);

  @media (max-width: 700px) {
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

  /* position: absolute; */
  margin-left: 15px;
`;

export const StyledHamburgerIcon = styled(RxHamburgerMenu)`
  width: 21px;
  height: 21px;
`;

export const StyledHamburgerButton = styled(Button)`
  height: 32px;
  width: 32px;
  margin-right: 15px;

  @media (min-width: 701px) {
    display: none;
  }

  /* margin-right: 15px; */
`;

interface StyledHamburgerDropdownProps {
  $isHamburgerOpen?: boolean;
  $isScrolled?: boolean;
}

export const StyledHamburgerDropdown = styled.div<StyledHamburgerDropdownProps>`
  position: absolute;
  width: calc(100% - 38px); /* since the % is based on the content box, we need to account for the extra border */
  left: 19px;
  top: 100%;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5px;
  
  background-color: blue;
  background-color: ${({ theme }) => theme.menubar.background};
  
  
  height: 0;
  border-top: 0;
  border: 1px solid transparent;
  opacity: 0;
  border-radius: 0;
  

  transition: height 400ms ease,
    width 400ms ease,
    border-color 400ms ease,
    border-radius 400ms ease,
    opacity 400ms ease-out,
    left 400ms ease;
    
  ${({ $isHamburgerOpen, $isScrolled }) => $isHamburgerOpen && css`
    height: 115px;
    width: calc(100% + 2px);
    left: -1px;
    opacity: 1;
    
    ${$isScrolled && css`
      border: 1px solid black;
      border-top: 0;
      border-top-color: transparent;
      border-radius: 0 0 20px 20px;
    `};
  `}

`;