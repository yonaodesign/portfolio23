import React from "react";
import styled from "styled-components";
import BREAKPOINTS from "@/utils/breakpoints";
import { MobileShot } from "@/components/images/MobileShot";
import { IProject } from "@/pages/api/ProjectDetailsDataset";

const StyledMobileSection = styled.div`
  padding: 100px;
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;

  @media (max-width: ${BREAKPOINTS.large}px) {
    grid-template-columns: 1fr;
  }
`;

export const MobileGallerySection = ({
  currentProjectDescriptions,
}: {
  currentProjectDescriptions: IProject[];
}) => {
  return (
    <StyledMobileSection>
      {currentProjectDescriptions[0].projectMobilePhoto &&
        currentProjectDescriptions[0].projectMobilePhoto
          .slice(0, 2)
          .map((entry, index) => (
            <MobileShot fileUrl={entry} key={`mobileShot${index}`}></MobileShot>
          ))}
    </StyledMobileSection>
  );
};
