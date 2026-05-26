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
  margin-top: 80px;
  container-type: inline-size;
`;

export const StyledBlobContainer = styled.div`
  width: 50%;
  min-height: 300px;
  display: flex;
  margin-top: 42px;
  justify-content: center;
`;

export const StyledBannerH1 = styled.h1`
  font-size: clamp(1.25em, 8cqi, 2em);
`;

export const StyledBannerH2 = styled.h2`
  font-size: clamp(0.9375em, 5.3cqi, 1.5em);
`;

export const StyledBannerP = styled.p`
  font-size: clamp(0.75em, 4cqi, 1em);
`;

export const StyledSection = styled.div`
  width: 98%;
  max-width: 1020px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 0 auto;
  gap: 50px;
`;

export const StyledSectionHeader = styled.h1`
  width: 100%;
  text-align: left;
`;