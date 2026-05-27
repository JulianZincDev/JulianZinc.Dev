import { useEffect, useRef, type FC, type ReactNode } from "react"
import { linkButtonHoverCss, StyledDescription, StyledFeatureList, StyledFeatureListItem, StyledLinkButton, StyledLinksContainer, StyledMainProjectCardContent, StyledPreviewVideo, StyledProjectCardContainer, StyledProjectOverviewContainer, StyledProjectTitle, StyledSubheading, StyledTechStackContainer } from "./ProjectCard.styles"
import type { LinkItem } from "@/types/LinkItem";
import { LinkItemElement } from "./LinkItemElement/LinkItemElement";
import { FiExternalLink } from "react-icons/fi";
import { ButtonVariant } from "@/components/Button/Button.types";

interface ProjectCardProps {
  src?: string;
  title?: ReactNode;
  subheading?: string;
  description?: string;
  featureList?: string[];
  techStackList?: LinkItem[];
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
            {featureList?.map((feature, index) =>
              <StyledFeatureListItem key={`feature-${index}`}>
                {feature}
              </StyledFeatureListItem>
            )}
          </StyledFeatureList>
          
          <StyledLinksContainer>
            {linkList?.map((link, index) =>
              <StyledLinkButton
                buttonContainerCss={linkButtonHoverCss}
                key={`link-${index}`}
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
        {techStackList?.map((techElement, index) =>
          <LinkItemElement
            key={`tech-${index}`}
            linkItem={techElement}
          />
        )}
      </StyledTechStackContainer>
    </StyledProjectCardContainer>
  )
}
