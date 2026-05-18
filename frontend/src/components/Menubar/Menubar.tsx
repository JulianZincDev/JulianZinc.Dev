import { useEffect, useState } from "react";
import { ButtonVariant } from "../Button/Button.types";
import { StyledMenubarBehindArea, StyledMenubarButton, StyledMenubarContainer } from "./Menubar.styles";

export const MenuBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);



  return (
    <>
      <StyledMenubarBehindArea />
      <StyledMenubarContainer $isScrolled={isScrolled}>
        <StyledMenubarButton label={'Home'} variant={ButtonVariant.MenuButton} />
        <StyledMenubarButton label={'Projects'} variant={ButtonVariant.MenuButton} />
        <StyledMenubarButton label={'Contact'} variant={ButtonVariant.MenuButton} />
      </StyledMenubarContainer>
    </>
  )
};
