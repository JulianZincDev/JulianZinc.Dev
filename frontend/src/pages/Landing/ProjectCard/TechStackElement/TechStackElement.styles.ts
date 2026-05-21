import styled from "styled-components";

export const StyledTechElementContainer = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  height: 32px;
  padding: 0 5px 0 5px;
  background-color: ${({ theme }) => theme.techStack.techElement.background};
  border: 1px solid ${({ theme }) => theme.black};
  border-radius: 5px;
`;

export const StyledTechLogoContainer = styled.div`
  width: 25px;
  height: 25px;
`;

export const StyledTechLogoImg = styled.img`
  width: 100%;
  height: 100%;
`;