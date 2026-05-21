import { Background } from "@/components/Background/Background"
import { MenuBar } from "@/components/Menubar/Menubar"
import { useTheme } from "styled-components"
import { StyledBannerContainer, StyledBannerH1, StyledBannerH2, StyledBannerIntroSection, StyledBannerP, StyledBlobContainer, StyledProjectsSection, StyledSectionHeader } from "./Landing.styles";
import { CursorBlob } from "./CursorBlob/CursorBlob";
import { ProjectCard } from "./ProjectCard/ProjectCard";


export const Landing = () => {
  const theme = useTheme();

  return (
    <Background>
      <MenuBar />
      <StyledBannerContainer>
        <StyledBannerIntroSection>
          <StyledBannerH2>Julian Zincone</StyledBannerH2>
          <StyledBannerH1 style={{ marginTop: '5px' }} >Full-Stack Developer</StyledBannerH1>
          <StyledBannerP style={{ opacity: '60%' }}>Fullstack software developer with experience building modern web apps with React, Typescript, and backend APIs</StyledBannerP>
        </StyledBannerIntroSection>
        
        <StyledBlobContainer>
          <CursorBlob />
        </StyledBlobContainer>

      </StyledBannerContainer>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill={theme.banner.background} fillOpacity="1" d="M0,128L60,138.7C120,149,240,171,360,202.7C480,235,600,277,720,250.7C840,224,960,128,1080,90.7C1200,53,1320,75,1380,85.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
      </svg>

      
      <StyledProjectsSection>
        <StyledSectionHeader>Projects</StyledSectionHeader>
        <ProjectCard src="/teamup_silent_demo.mp4" />

      </StyledProjectsSection>



      <div style={{ width: '100%', height: '100%' }} />
    </Background>
  )
}
