import { useEffect, useRef, type FC } from "react"
import { StyledPreviewVideo, StyledProjectCardContainer } from "./ProjectCard.styles"

interface ProjectCardProps {
  src?: string;
  title?: string;
  subheading?: string;
  description?: string;
  featureList?: string[];
  techStack?: string[];
};

export const ProjectCard: FC<ProjectCardProps> = ({ src }) => {

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
      <StyledPreviewVideo
        ref={videoRef}
        muted
        loop
        playsInline
      >
        <source src={src} />
      </StyledPreviewVideo>
    </StyledProjectCardContainer>
  )
}
