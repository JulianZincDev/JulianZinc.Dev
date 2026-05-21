import { useEffect, useRef, useState } from "react";
import { ButtonVariant } from "../Button/Button.types";
import { StyledLogo, StyledMenubarBehindArea, StyledMenubarButton, StyledMenubarContainer, StyledSideZone } from "./Menubar.styles";

export const MenuBar = () => {
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



  return (
    <>
      <StyledMenubarBehindArea />
      <StyledMenubarContainer $isScrolled={isScrolled} $isVisible={isVisible}>
        <StyledSideZone>
          <StyledLogo>JulianZinc.Dev</StyledLogo>
        </StyledSideZone>
        <StyledMenubarButton label={'Home'} variant={ButtonVariant.MenuButton} />
        <StyledMenubarButton label={'Projects'} variant={ButtonVariant.MenuButton} />
        <StyledMenubarButton label={'Contact'} variant={ButtonVariant.MenuButton} />
        <StyledSideZone />
      </StyledMenubarContainer>
    </>
  )
};
