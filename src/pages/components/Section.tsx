import React from "react";
import styled from "styled-components";
import BREAKPOINTS from "../api/breakpoints";

interface SectionWrapperProps {
  backgroundColor: string;
}

const SectionWrapper = styled.section<SectionWrapperProps>`
  display: flex;
  background-color: ${(props) => props.backgroundColor};
  flex-direction: column;
  padding: 100px;

  @media (max-width: ${BREAKPOINTS.mobile}px) {
    padding: 50px 40px 50px 100px;
  }
`;

interface SectionProps {
  idValue: string | undefined;
  bgColor: string;
  children: any;
}

export const Section: React.FC<SectionProps> = ({
  bgColor,
  children,
  idValue,
}) => {
  return (
    <SectionWrapper id={idValue} backgroundColor={bgColor}>
      {children}
    </SectionWrapper>
  );
};
