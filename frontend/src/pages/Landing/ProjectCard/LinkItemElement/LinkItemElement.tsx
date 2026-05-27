import type { FC } from "react";
import { StyledLabelSpan, StyledLinkItemButton, StyledLogoContainer, StyledLogoImg, techElementHoverCss } from "./LinkItemElement.styles";
import type { LinkItem } from "@/types/LinkItem";
import { ButtonVariant } from "@/components/Button/Button.types";
import type { AnchorAttributes } from "@/types";

interface TechStackElementProps extends AnchorAttributes {
  linkItem: LinkItem;
  variant?: ButtonVariant;
}

export const LinkItemElement: FC<TechStackElementProps> = ({ linkItem, variant = ButtonVariant.TechElement, ...props }) => {
  return (
    <StyledLinkItemButton
      buttonContainerCss={techElementHoverCss}
      variant={variant}
      href={linkItem.url}
      target="_blank"
      rel="noopener noreferrer" {...props}
    >
      <StyledLogoContainer>
        <StyledLogoImg src={linkItem.logo} />
      </StyledLogoContainer>
      <StyledLabelSpan>
        {linkItem.label}
      </StyledLabelSpan>
    </StyledLinkItemButton>
  )
}
