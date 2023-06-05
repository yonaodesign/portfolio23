import React from "react";
import styled from "styled-components";
import BREAKPOINTS from "../api/breakpoints";
import { MobileShot } from "./MobileShot";

const StyledMobileSection = styled.div`
  padding: 100px;
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;

  @media (max-width: ${BREAKPOINTS.large}px) {
    grid-template-columns: 1fr;
  }
`;

export const MobileGallerySection = ({ currentProjectDescriptions }) => {
  return (
    <StyledMobileSection>
      {currentProjectDescriptions[0].projectMobilePhoto
        .slice(0, 2)
        .map((entry, index) => (
          <MobileShot
            index={index}
            fileUrl={entry}
            key={`mobileShot${index}`}
          ></MobileShot>
        ))}
    </StyledMobileSection>
  );
};
