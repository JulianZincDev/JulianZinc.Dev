import type { FC } from "react";
import { StyledContactCardContainer, StyledContactItemsContainer } from "./ContactCard.styles";
import type { LinkItem } from "@/types/LinkItem";
import { LinkItemElement } from "../ProjectCard/LinkItemElement/LinkItemElement";
import { ButtonVariant } from "@/components/Button/Button.types";
import { FiExternalLink } from "react-icons/fi";

interface ContactCardProps {
  contactList: LinkItem[];
}

export const ContactCard: FC<ContactCardProps>  = ({ contactList }) => {
  return (
    <StyledContactCardContainer>
      <StyledContactItemsContainer>
        {contactList.map(({ label, ...contactItem }, index) => 
        <LinkItemElement key={`contact-${index}`} variant={ButtonVariant.ContactLink} linkItem={{ ...contactItem, label: <>{label}<FiExternalLink /></>}} />)}
      </StyledContactItemsContainer>
    </StyledContactCardContainer>
  )
}
