import styled from "styled-components";
import BREAKPOINTS from "@/utils/breakpoints";
import HTMLReactParser from "html-react-parser";
import { Section } from "@/components/common/Section";
import { IProject } from "@/pages/api/ProjectDetailsDataset";

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
  currentProjectDescriptions: IProject[];
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
            {currentProjectDescriptions[0].projectPurposeAndGoal &&
              HTMLReactParser(
                currentProjectDescriptions[0].projectPurposeAndGoal
              )}
          </p>
        </div>

        <div style={{ width: "100%" }}>
          <h4>How</h4>
          <p>
            {currentProjectDescriptions[0].projectTechnicalCommentary &&
              HTMLReactParser(
                currentProjectDescriptions[0].projectTechnicalCommentary
              )}
          </p>
        </div>
      </TwoFlexBoxes>
    </Section>
  );
};
