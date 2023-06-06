import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Section } from "@/components/common/Section";
import BREAKPOINTS from "@/utils/breakpoints";
import CoverShot from "@/components/images/CoverShot";
import { IProject } from "@/pages/api/ProjectDetailsDataset";
import { IGalleryItem } from "@/pages/api/ProjectGalleryDataset";

const PreTagLine = styled.span`
  margin-top: 200px;
  max-width: 600px;
  font-size: 33px;

  @media (max-width: ${BREAKPOINTS.medium}px) {
    font-size: 24px;
  }
`;

const TagLine = styled.h1`
  font-size: 50px;
  font-weight: 400;
  line-height: 72px;
  font-family: trap;
  font-weight: 600;

  @media (min-width: 1000px) {
    font-size: 100px;
  }
`;

interface Props {
  bgColor: string;
  currentProjectDescriptions: IProject[];
  currentProjectData: IGalleryItem[];
}

export const ProjectsHeroSection = ({
  bgColor,
  currentProjectDescriptions,
  currentProjectData,
}: Props) => {
  const [loadedBg, setLoadedBg] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => setLoadedBg(true), 1000);
  }, []);

  return (
    <Section bgColor={bgColor} idValue="hero">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "80%",
          }}
        >
          <PreTagLine>
            {(currentProjectDescriptions[0].projectTagLine ||
              currentProjectData[0].projectDescription) ??
              []}
          </PreTagLine>
          <TagLine
            style={{
              marginTop: 30,
              marginBottom: 30,
              color: loadedBg ? currentProjectData[0]?.projectColor : "black",
              transition: "0.5s",
            }}
          >
            {currentProjectData[0].projectName ?? []}
          </TagLine>

          <span style={{ fontSize: "20px", marginBottom: 100, maxWidth: 600 }}>
            {(currentProjectDescriptions[0].projectAnnotation ||
              currentProjectData[0].projectDescription) ??
              []}
          </span>
        </div>
      </div>

      {currentProjectDescriptions[0].projectDesktopPhoto
        ?.slice(0, 1)
        .map((entry, index) => (
          <CoverShot
            index={index}
            fileUrl={entry}
            key={`desktopShop${index}`}
          ></CoverShot>
        )) ?? []}
    </Section>
  );
};
