import styled from "styled-components";
import BREAKPOINTS from "../api/breakpoints";
import HTMLReactParser from "html-react-parser";
import { Section } from "./Section";

const TwoFlexBoxes = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;

  @media (max-width: ${BREAKPOINTS.medium}px) {
    flex-direction: column;
  }
`;

interface Props {
  bgColor: string;
  currentProjectDescriptions: object;
}

export const WhyAndChallengesSection = ({
  bgColor,
  currentProjectDescriptions,
}: Props) => {
  return (
    <Section bgColor={bgColor} idValue={"why"}>
      <TwoFlexBoxes>
        <div style={{ width: "100%" }}>
          <h4>What and Why</h4>
          <p>
            {HTMLReactParser(
              currentProjectDescriptions[0].projectPurposeAndGoal ?? []
            )}
          </p>
        </div>

        <div style={{ width: "100%" }}>
          <h4>How</h4>
          <p>
            {HTMLReactParser(
              currentProjectDescriptions[0].projectTechnicalCommentary ?? []
            )}
          </p>
        </div>
      </TwoFlexBoxes>
    </Section>
  );
};
