import React from "react";
import styled from "styled-components";
import { Section } from "./Section";
import { HeadingWithCTABlock } from "./HeadingWithCTABlock";
import BREAKPOINTS from "../pages/api/breakpoints";

const TwoColumnTextDiv = styled.div`
  width: 100%;
  column-count: 2;
  column-gap: 50px;

  @media (max-width: ${BREAKPOINTS.mobile}px) {
    column-count: 1;
  }
`;

interface AboutMeSectionProps {
  idValue: string;
  setToggleAboutMeMyBackground: React.Dispatch<React.SetStateAction<boolean>>;
  toggleAboutMeMyBackground: boolean;
}

export function AboutMeSection({
  idValue,
  setToggleAboutMeMyBackground,
  toggleAboutMeMyBackground,
}: AboutMeSectionProps) {
  const toggleAboutMeMyBackgroundHandler = () =>
    setToggleAboutMeMyBackground(!toggleAboutMeMyBackground);

  return (
    <Section idValue={idValue} bgColor={"#e2e2e2"}>
      <HeadingWithCTABlock>
        <h4>About Me </h4>
        <a
          style={{
            fontWeight: 600,
            cursor: "pointer",
          }}
          onClick={toggleAboutMeMyBackgroundHandler}
        >
          {!toggleAboutMeMyBackground
            ? "Show longer version →"
            : "Show shorter version →"}
        </a>
      </HeadingWithCTABlock>

      {!toggleAboutMeMyBackground && (
        <>
          <TwoColumnTextDiv>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 0,
              }}
            >
              <li>
                I have a diverse background in art, languages, and manufacturing
                industry.
              </li>
              <li>
                I specialize in building applications in a JS based environment.
              </li>
              <li>
                I am constantly exploring both time-tested and latest trends and
                new technologies to find best answers.
              </li>
              <li>
                I care about saving businesses time with on point solutions and
                intuitive UX.
              </li>
              <li>I use Adobe Photoshop, Figma, and Adobe Premier.</li>
              <li>I am fluent in English, Japanese, and Czech.</li>
            </ul>
          </TwoColumnTextDiv>
        </>
      )}

      {toggleAboutMeMyBackground && (
        <>
          <TwoColumnTextDiv>
            <p
              style={{
                marginTop: 0,
              }}
            >
              Hello! I’m Jonas. I love building things that make a difference.
            </p>
            <p>
              My first experience with programming was when I was 11. I build a
              website to showcase some of the games I made with Game Maker v5.
              Learning HTML & CSS I occasionally made websites for friends,
              however the passion was supressed for a long time.
            </p>
            <p>
              I always loved learning and when I was deciding what route to
              take, I chose Asian studies, as being something completely unknown
              with a lot of to learn. From zero to being promoted in a fully
              Japanese company, felt like my drive and dedication was rewarded.
            </p>
            <p>
              At some point, I was asked to improve in-house processes. Knowing
              that there’re solutions like Game Maker for Software, I decided to
              use a no-code solution. The learning was fun, but the joy of
              collegues actually using it was even more rewarding. I refound my
              passion for building in a field that keeps expanding every day and
              there is no treshold like in Japanaese langauge.
            </p>
            <p>
              Since then, I’ve been learning Javascript, React, Node and more.
              I’m looking for a role where I can help a company to achieve
              customers goals.
            </p>
          </TwoColumnTextDiv>
        </>
      )}
    </Section>
  );
}
