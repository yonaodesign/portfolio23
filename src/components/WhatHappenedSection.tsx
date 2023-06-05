import React from "react";
import { Section } from "./Section";
import HTMLReactParser from "html-react-parser";

interface Props {
  bgColor: string;
  currentProjectDescriptions: any;
}

export const WhatHappenedSection = ({
  bgColor,
  currentProjectDescriptions,
}: Props) => {
  return (
    <Section bgColor={bgColor}>
      <div>
        <h4>What Happened</h4>
        <p>
          {HTMLReactParser(
            currentProjectDescriptions[0].projectProblemsAndSolutions ?? []
          )}
        </p>
        <p>
          {HTMLReactParser(
            currentProjectDescriptions[0].projectLessonsLearnt ?? []
          )}
        </p>
      </div>
    </Section>
  );
};
