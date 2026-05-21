import { useEffect, useRef, type FC, type ReactNode } from "react"
import { StyledDescription, StyledFeatureList, StyledFeatureListItem, StyledMainProjectCardContent, StyledPreviewVideo, StyledProjectCardContainer, StyledProjectOverviewContainer, StyledProjectTitle, StyledSubheading, StyledTechStackContainer } from "./ProjectCard.styles"
import type { TechElement } from "@/types/TechElement";
import { TechStackElement } from "./TechStackElement/TechStackElement";

interface ProjectCardProps {
  src?: string;
  title?: ReactNode;
  subheading?: string;
  description?: string;
  featureList?: string[];
  techStackList?: TechElement[];
};

export const ProjectCard: FC<ProjectCardProps> = ({ src, title, subheading, description, featureList, techStackList }) => {

  const videoRef = useRef<HTMLVideoElement>(null);


  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (([entry]) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      }),
      { threshold: [0.25, 0.75] }
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
        </StyledProjectOverviewContainer>
      </StyledMainProjectCardContent>
      <StyledTechStackContainer>
        {techStackList?.map((techElement) => <TechStackElement techElement={techElement} />)}
      </StyledTechStackContainer>
    </StyledProjectCardContainer>
  )
}
