import React from "react";
import styled from "styled-components";

import BREAKPOINTS from "@/utils/breakpoints";
import { IGalleryItem } from "@/pages/api/ProjectGalleryDataset";

import { StyledLink } from "@/components/common/StyledLink";
import { Section } from "@/components/common/Section";
import { HeadingWithCTABlock } from "@/components/common/HeadingWithCTABlock";
import GalleryCard from "@/components/sections/contentful/GalleryCard";

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
  previousProjectData: IGalleryItem;
  nextProjectData: IGalleryItem;
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
        <GalleryCard key={`galleryItemNo${1}`} payload={nextProjectData} />
      </StyledOtherProjectsGrid>
    </Section>
  );
}
