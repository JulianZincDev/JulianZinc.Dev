import { Button } from "@/components/Button/Button";
import styled from "styled-components";


export const StyledProjectCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 300px;
  /* box-sizing: border-box; */
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.projectCard.border};
  background-color: ${({ theme }) => theme.projectCard.background};
  box-shadow: 0 0px 4px 0px rgba(0,0,0,0.75);
`;

export const StyledMainProjectCardContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const StyledTechStackContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  min-height: 36px;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 0 4px 0 4px;
  margin: 2px 0 2px 0;
`;

export const StyledPreviewVideo = styled.video`
  flex: 1 1 450px;
  max-width: 600px;
  min-width: 0;
  margin: 5px;
  /* width: calc(100% - 10px); */
`;

export const StyledProjectOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-top: 10px;
  gap: 20px;

  max-width: 500px;
  flex: 0 1 350px;
  width: 100%;
  margin-left: 5px;
  margin-right: 5px;
`;

export const StyledProjectTitle = styled.h2`
`;

export const StyledSubheading = styled.p`
  opacity: 70%;
  font-size: 0.8em;
  font-weight: 600;
`;

export const StyledDescription = styled.p`
  /* opacity: 80%; */
  font-size: 0.9em;
`;

export const StyledFeatureList = styled.ul`
  margin-top: 0;
`;

export const StyledFeatureListItem = styled.li`
  font-size: 0.85em;
`;

export const StyledLinksContainer = styled.div`
  
`;

export const StyledLinkButton = styled(Button)`
  font-weight: normal;
  padding: 5px;
  position: relative;
  transition: transform 100ms ease;

  &:hover {
    transform: translate(2px, -2px);
  }
`;