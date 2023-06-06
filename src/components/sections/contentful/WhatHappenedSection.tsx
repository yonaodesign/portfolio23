import React from "react";
import { Section } from "@/components/common/Section";
import HTMLReactParser from "html-react-parser";
import { IProject } from "@/pages/api/ProjectDetailsDataset";

interface Props {
  bgColor: string;
  currentProjectDescriptions: IProject[];
}

export const WhatHappenedSection = ({
  bgColor,
  currentProjectDescriptions,
}: Props) => {
  return (
    <Section bgColor={bgColor} idValue="whathappened">
      <div>
        <h4>What Happened</h4>
        <p>
          {currentProjectDescriptions[0]?.projectProblemsAndSolutions &&
            HTMLReactParser(
              currentProjectDescriptions[0]?.projectProblemsAndSolutions
            )}
        </p>
        <p>
          {currentProjectDescriptions[0]?.projectLessonsLearnt &&
            HTMLReactParser(
              currentProjectDescriptions[0]?.projectLessonsLearnt
            )}
        </p>
      </div>
    </Section>
  );
};
