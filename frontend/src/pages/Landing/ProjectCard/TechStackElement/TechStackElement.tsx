import type { FC } from "react";
import { StyledTechElementContainer, StyledTechLogoContainer, StyledTechLogoImg } from "./TechStackElement.styles";
import type { TechElement } from "@/types/TechElement";

interface TechStackElementProps {
  techElement: TechElement;
}

export const TechStackElement: FC<TechStackElementProps> = ({ techElement }) => {
  return (
    <StyledTechElementContainer>
      <StyledTechLogoContainer>
        <StyledTechLogoImg src={techElement.logo} />
      </StyledTechLogoContainer>
      <span>
        {techElement.name}
      </span>
    </StyledTechElementContainer>
  )
}
