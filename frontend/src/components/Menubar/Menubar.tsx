import React, { useEffect, useRef, useState, type FC } from "react";
import { ButtonVariant } from "../Button/Button.types";
import { StyledLogo, StyledMenubarBehindArea, StyledMenubarButton, StyledMenubarContainer, StyledSideZone } from "./Menubar.styles";
import type { Section } from "@/pages/Landing/Landing.shared";

interface MenuBarProps {
  scrollToSection: (section: Section) => void;
};

export const MenuBar: FC<MenuBarProps> = ({ scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const prevScrollY = useRef<number>(0);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 100);
      setIsVisible(window.scrollY < 500 || window.scrollY < prevScrollY.current);
      prevScrollY.current = window.scrollY;
    };
    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClickLogo = () => {
    window.location.href = "/";
  };

  return (
    <>
      <StyledMenubarBehindArea />
      <StyledMenubarContainer $isScrolled={isScrolled} $isVisible={isVisible}>
        <StyledSideZone>
          <StyledLogo onClick={handleClickLogo}>JulianZinc.Dev</StyledLogo>
        </StyledSideZone>
        <StyledMenubarButton onClick={() => scrollToSection('home')} label={'Home'} variant={ButtonVariant.MenuButton} />
        <StyledMenubarButton onClick={() => scrollToSection('projects')} label={'Projects'} variant={ButtonVariant.MenuButton} />
        <StyledMenubarButton onClick={() => scrollToSection('contact')} label={'Contact'} variant={ButtonVariant.MenuButton} />
        <StyledSideZone />
      </StyledMenubarContainer>
    </>
  )
};
