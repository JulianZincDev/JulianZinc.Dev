import { Background } from "@/components/Background/Background"
import { MenuBar } from "@/components/Menubar/Menubar"
import { useTheme } from "@emotion/react";
import { StyledBannerContainer, StyledBannerH1, StyledBannerH2, StyledBannerIntroSection, StyledBannerP, StyledBlobContainer, StyledSection, StyledSectionHeader } from "./Landing.styles";
import { CursorBlob } from "./CursorBlob/CursorBlob";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import { useRef, type RefObject } from "react";
import type { Section } from "./Landing.shared";
import { ContactCard } from "./ContactCard/ContactCard";


export const Landing = () => {
  const theme = useTheme();

  const homeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const refs: Record<Section, RefObject<HTMLDivElement | null>> = {
    home: homeRef,
    projects: projectsRef,
    contact: contactRef,
  };

  const scrollToSection = (section: Section) => {
    refs[section]?.current?.scrollIntoView({ behavior: 'smooth' })
  };

  return (
    <Background>
      <MenuBar scrollToSection={scrollToSection}  />
      <StyledBannerContainer ref={homeRef} >
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

      
      <StyledSection ref={projectsRef}>
        <StyledSectionHeader>Projects</StyledSectionHeader>
        <ProjectCard
          src="/teamup_silent_demo.mp4"
          title={
            <>
              <span style={{ color: '#4a82c3' }}>Team</span>
              <span style={{ color: '#b12a1c' }}>U</span>
              <span style={{ color: '#feba12' }}>P</span>
            </>
          }
          subheading="University Capstone - Later continued under contract"
          description="A web platform for students to register, and for staff to manage competitive programming competitions."
          featureList={[
            'Virtualized rendering of 1000+ entries',
            'Automatic Team matching system',
            'Streamlined user signup process',
            'Robust role-based administrative controls',
            'Extensible table architecture',
          ]}
          linkList={[
            { label: 'Interactive Demo', url: 'https://teamup-demo.julianzinc.dev' }
          ]}
          techStackList={[
            { logo: '/react-logo.webp', label: 'React', url: 'https://react.dev/' },
            { logo: '/typescript-logo.svg', label: 'TypeScript', url: 'https://www.typescriptlang.org/' },
            { logo: '/nodejs-logo.svg', label: 'Node.js', url: 'https://nodejs.org/en' },
            { logo: '/postgresql-logo.png', label: 'PostgreSQL', url: 'https://www.postgresql.org/' },
            { logo: '/docker-logo.svg', label: 'Docker', url: 'https://www.docker.com/' },
          ]}
        />

        <ProjectCard
          src="/pokemon_tcg_simulator_silent_demo.mkv"
          title={
          <>
            <span style={{ color: '#ffd008', textShadow: '1px 1px 0 #2969af, -1px 1px 0 #2969af, -1px -1px 0 #2969af, 1px -1px 0 #2969af' }}>Pokémon</span>
            <span> TCG Platform</span>
          </>}

          subheading="Personal Project"
          description="A platform for Pokemon TCG players to create and edit decks, along with a realtime pre-game lobby system"
          featureList={[
            'Advanced drag-and-drop deck editor',
            'Persistent deck management',
            'Complex Search query UI with dynamic filter constraints',
            'Realtime multiplayer lobby system',
          ]}
          linkList={[
            { label: 'Interactive Demo', url: 'https://tcg-battle-sim.julianzinc.dev' }
          ]}
          techStackList={[
            { logo: '/react-logo.webp', label: 'React', url: 'https://react.dev/' },
            { logo: '/typescript-logo.svg', label: 'TypeScript', url: 'https://www.typescriptlang.org/' },
            { logo: '/nodejs-logo.svg', label: 'Node.js', url: 'https://nodejs.org/en' },
            { logo: '/graphql-logo.svg', label: 'GraphQL', url: 'https://graphql.org/' },
            { logo: '/prisma-logo.svg', label: 'Prisma', url: 'https://www.prisma.io/' },
            { logo: '/socket-io-logo.svg', label: 'Socket.IO', url: 'https://socket.io/' },
            { logo: '/postgresql-logo.png', label: 'PostgreSQL', url: 'https://www.postgresql.org/' },
            { logo: '/docker-logo.svg', label: 'Docker', url: 'https://www.docker.com/' },
          ]}
        />

      </StyledSection>

      <StyledSection ref={contactRef} style={{ marginTop: '20px', paddingBottom: '20px' }}>
        <ContactCard contactList={[
          { logo: '/linkedin-logo.png', label: 'LinkedIn', url: 'https://www.linkedin.com/in/julian-zincone/' },
          { logo: '/email-logo.png', label: 'Email', url: 'mailto:j.zincone@unswalumni.com' },
          { logo: '/github-logo.svg', label: 'GitHub', url: 'https://github.com/JulianZincDev/' },
        ]} />
      </StyledSection>


      {/* <div style={{ width: '100%', height: '100%' }} /> */}
    </Background>
  )
}
