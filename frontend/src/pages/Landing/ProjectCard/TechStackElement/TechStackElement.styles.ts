import { AButton } from "@/components/AButton/AButton";
import styled from "styled-components";

export const StyledTechElementButton = styled(AButton)`
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

  &:hover {
    transform: translate(1px, -1px);
    text-decoration: underline;
  }
`;

export const StyledTechLogoContainer = styled.div`
  width: 25px;
  height: 25px;
`;

export const StyledTechLogoImg = styled.img`
  width: 100%;
  height: 100%;
`;