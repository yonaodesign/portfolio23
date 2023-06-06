import React from "react";
import styled from "styled-components";

import BREAKPOINTS from "@/utils/breakpoints";
import { GalleryData } from "@/pages/api/ProjectGalleryDataset";

import GalleryCard from "@/components/sections/contentful/GalleryCard";

const StyledProjectsGrid = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px 50px;
  width: 100%;

  @media (max-width: ${BREAKPOINTS.medium}px) {
    grid-template-columns: 1fr;
  }
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 100px;
  gap: 50px;
  background-color: #f5f5f5;

  @media (max-width: ${BREAKPOINTS.mobile}px) {
    padding: 50px 40px 50px 100px;
  }
`;

export function ProjectsOverviewSection({
  idValue,
}: {
  idValue: string;
}): JSX.Element {
  return (
    <StyledSection id={idValue}>
      <h4>What I&apos;ve been working on</h4>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <StyledProjectsGrid>
          {GalleryData.map((item, index) => (
            <GalleryCard key={`galleryItemNo${index}`} payload={item} />
          ))}
        </StyledProjectsGrid>
      </div>
    </StyledSection>
  );
}
