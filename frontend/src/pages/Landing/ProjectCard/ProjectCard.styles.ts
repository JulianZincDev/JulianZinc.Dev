import styled from "styled-components";


export const StyledProjectCardContainer = styled.div`
  width: 100%;
  min-height: 300px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.projectCard.border};
  background-color: ${({ theme }) => theme.projectCard.background};
  box-shadow: 0 0px 4px 0px rgba(0,0,0,0.75);
`;

export const StyledPreviewVideo = styled.video`
  max-width: 600px;
  width: calc(100% - 10px);
  margin: 5px;
`;