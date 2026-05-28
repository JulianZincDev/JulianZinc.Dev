import { useCallback, useEffect, useRef, useState, type FC } from "react";
import { ButtonVariant } from "../Button/Button.types";
import { StyledHamburgerButton, StyledHamburgerDropdown, StyledHamburgerIcon, StyledLogo, StyledMenubarBehindArea, StyledMenubarButton, StyledMenubarContainer, StyledMenuButtonContainer, StyledSideZone } from "./Menubar.styles";
import type { Section } from "@/pages/Landing/Landing.shared";
import isClickedOverElement from "@/util/isClickedOverElement";

interface MenuBarProps {
  scrollToSection: (section: Section) => void;
};

export const MenuBar: FC<MenuBarProps> = ({ scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const prevScrollY = useRef<number>(0);
  
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setIsHamburgerOpen(false);
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

  const containerRef = useRef<HTMLDivElement>(null);


  const clickOffListener = useCallback((e: MouseEvent) => {
    if (isClickedOverElement(e, containerRef.current)) return;
    setIsHamburgerOpen(false);
  }, []);

  const escapeOffListener = useCallback((e: KeyboardEvent) => {
    if (e.key !== 'Escape') return;
    setIsHamburgerOpen(false);
  }, [setIsHamburgerOpen]);

  useEffect(() => {
    if (!isHamburgerOpen) return;
    document.addEventListener('mousedown', clickOffListener);
    document.addEventListener('keydown', escapeOffListener);
    return () => {
      document.removeEventListener('mousedown', clickOffListener);
      document.removeEventListener('keydown', escapeOffListener);
    }
  }, [clickOffListener, escapeOffListener, isHamburgerOpen]);


  return (
    <>
      <StyledMenubarBehindArea />
      <StyledMenubarContainer ref={containerRef} $isScrolled={isScrolled} $isVisible={isVisible} $isHamburgerOpen={isHamburgerOpen}>
        <StyledSideZone>
          <StyledLogo onClick={handleClickLogo}>JulianZinc.Dev</StyledLogo>
        </StyledSideZone>
        <StyledMenuButtonContainer>
          <StyledMenubarButton onClick={() => scrollToSection('home')} label={'Home'} variant={ButtonVariant.MenuButton} />
          <StyledMenubarButton onClick={() => scrollToSection('projects')} label={'Projects'} variant={ButtonVariant.MenuButton} />
          <StyledMenubarButton onClick={() => scrollToSection('contact')} label={'Contact'} variant={ButtonVariant.MenuButton} />
        </StyledMenuButtonContainer>
        <StyledSideZone style={{ justifyContent: 'flex-end' }}>
          <StyledHamburgerButton
            variant={ButtonVariant.Hamburger}
            icon={<StyledHamburgerIcon />}
            onClick={() => setIsHamburgerOpen((p) => !p)}
          />
          
        </StyledSideZone>
        <StyledHamburgerDropdown $isHamburgerOpen={isHamburgerOpen} $isScrolled={isScrolled}>
          <StyledMenubarButton style={{ width: '200px' }} onClick={() => scrollToSection('home')} label={'Home'} variant={ButtonVariant.MenuButton} />
          <StyledMenubarButton style={{ width: '200px' }} onClick={() => scrollToSection('projects')} label={'Projects'} variant={ButtonVariant.MenuButton} />
          <StyledMenubarButton style={{ width: '200px' }} onClick={() => scrollToSection('contact')} label={'Contact'} variant={ButtonVariant.MenuButton} />
        </StyledHamburgerDropdown>
      </StyledMenubarContainer>
    </>
  )
};
