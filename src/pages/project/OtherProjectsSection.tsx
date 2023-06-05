import React from "react";
import styled from "styled-components";
import { Section } from "../components/Section";
import BREAKPOINTS from "../api/breakpoints";
import { StyledLink } from "../components/StyledLink";
import GalleryCard from "../components/GalleryCard";
import { HeadingWithCTABlock } from "../components/HeadingWithCTABlock";

const StyledOtherProjectsGrid = styled.div`
  display: flex;
  gap: 50px;
  flex-direction: row;
  @media (max-width: ${BREAKPOINTS.medium}px) {
    flex-direction: column;
  }
`;

interface Props {
  bgColor: string;
  previousProjectData: any;
  nextProjectData: any;
}

export function OtherProjectsSection({
  bgColor,
  previousProjectData,
  nextProjectData,
}: Props) {
  return (
    <Section bgColor={bgColor} idValue={"otherprojects"}>
      <HeadingWithCTABlock>
        <h4>Other Projects</h4>
        <StyledLink
          style={{
            fontWeight: 600,
          }}
          href={"../#projects"}
        >
          Show All Projects →
        </StyledLink>
      </HeadingWithCTABlock>

      <StyledOtherProjectsGrid>
        <GalleryCard key={`galleryItemNo${0}`} payload={previousProjectData} />
        <GalleryCard key={`galleryItemNo${0}`} payload={nextProjectData} />
      </StyledOtherProjectsGrid>
    </Section>
  );
}
