import styled from "styled-components";

export const StyledBannerContainer = styled.div`
  background-color: ${({ theme }) => theme.banner.background};
  display: flex;
  align-items: center;
`;

export const StyledBannerIntroSection = styled.div`
  min-height: 300px;
  display: flex;
  flex-direction: column;
  width: 50%;
  box-sizing: border-box;
  /* border: 1px solid black; */
  padding: 15px 0 0 20px;

`;

