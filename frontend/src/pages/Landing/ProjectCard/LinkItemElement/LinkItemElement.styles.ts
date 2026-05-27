import { AButton } from "@/components/AButton/AButton";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledLinkItemButton = styled(AButton)`
  display: flex;
  gap: 5px;
  justify-content: center;
  font-weight: normal;
  align-items: center;
  height: 32px;
  padding: 0 5px 0 5px;
  /* background-color: ${({ theme }) => theme.techStack.techElement.background}; */
  /* border: 1px solid ${({ theme }) => theme.black}; */
  border-radius: 5px;

  transition: transform 100ms ease, background-color 400ms ease;
`;

export const techElementHoverCss = css`
  &:hover ${StyledLinkItemButton} {
    transform: translate(1px, -1px);
  }
`;


export const StyledLogoContainer = styled.div`
  width: 25px;
  height: 25px;
`;

export const StyledLogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const StyledLabelSpan = styled.span`
  display: inline-flex;
  gap: 5px;
`;