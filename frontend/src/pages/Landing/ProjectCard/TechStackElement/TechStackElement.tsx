import type { FC } from "react";
import { StyledTechElementButton, StyledTechLogoContainer, StyledTechLogoImg } from "./TechStackElement.styles";
import type { TechElement } from "@/types/TechElement";
import { ButtonVariant } from "@/components/Button/Button.types";
import type { AnchorAttributes } from "@/types";

interface TechStackElementProps extends AnchorAttributes {
  techElement: TechElement;
}

export const TechStackElement: FC<TechStackElementProps> = ({ techElement, ...props }) => {
  return (
    <StyledTechElementButton variant={ButtonVariant.TechElement} {...props}>
      <StyledTechLogoContainer>
        <StyledTechLogoImg src={techElement.logo} />
      </StyledTechLogoContainer>
      <span>
        {techElement.name}
      </span>
    </StyledTechElementButton>
  )
}
