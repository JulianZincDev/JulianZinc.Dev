import { useEffect, useRef, type FC, type ReactNode } from "react"
import { StyledDescription, StyledFeatureList, StyledFeatureListItem, StyledLinkButton, StyledLinksContainer, StyledMainProjectCardContent, StyledPreviewVideo, StyledProjectCardContainer, StyledProjectOverviewContainer, StyledProjectTitle, StyledSubheading, StyledTechStackContainer } from "./ProjectCard.styles"
import type { TechElement } from "@/types/TechElement";
import { TechStackElement } from "./TechStackElement/TechStackElement";
import { FiExternalLink } from "react-icons/fi";
import { ButtonVariant } from "@/components/Button/Button.types";

interface ProjectCardProps {
  src?: string;
  title?: ReactNode;
  subheading?: string;
  description?: string;
  featureList?: string[];
  techStackList?: TechElement[];
  linkList?: { url: string, label: string }[];
};

export const ProjectCard: FC<ProjectCardProps> = ({ src, title, subheading, description, featureList, techStackList, linkList }) => {

  const videoRef = useRef<HTMLVideoElement>(null);


  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (([entry]) => {
        if (entry.intersectionRatio >= 0.75) {
          video.play();
        } else {
          video.pause();
        }
      }),
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    observer.observe(video);
    
    return () => {
      observer.disconnect();
    }

  }, []);

  return (
    <StyledProjectCardContainer>
      <StyledMainProjectCardContent>
        <StyledPreviewVideo
          ref={videoRef}
          muted
          loop
          playsInline
        >
          <source src={src} />
        </StyledPreviewVideo>

        <StyledProjectOverviewContainer>
          <StyledProjectTitle>{title}</StyledProjectTitle>
          <StyledSubheading>{subheading}</StyledSubheading>
          <StyledDescription>{description}</StyledDescription>
          <StyledFeatureList>
            {featureList?.map((feature) =>
              <StyledFeatureListItem>
                {feature}
              </StyledFeatureListItem>
            )}
          </StyledFeatureList>
          
          <StyledLinksContainer>
            {linkList?.map((link) =>
              <StyledLinkButton
                variant={ButtonVariant.LinkButton}
                label={<>{link.label}<FiExternalLink /></>}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              />
            )}
          </StyledLinksContainer>

        </StyledProjectOverviewContainer>
      </StyledMainProjectCardContent>
      <StyledTechStackContainer>
        {techStackList?.map((techElement) =>
        <TechStackElement
          techElement={techElement}
          href={techElement.url}
          target="_blank"
          rel="noopener noreferrer"
        />)}
      </StyledTechStackContainer>
    </StyledProjectCardContainer>
  )
}
