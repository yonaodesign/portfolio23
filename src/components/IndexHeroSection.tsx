import React from "react";
import { Section } from "./Section";
import styled from "styled-components";
import BREAKPOINTS from "../pages/api/breakpoints";

const PreTagLine = styled.span`
  margin-top: 200px;
  max-width: 600px;
  font-size: 33px;

  @media (max-width: ${BREAKPOINTS.medium}px) {
    font-size: 24px;
  }
`;
const TagLine = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 50px;
  font-weight: 400;
  line-height: 72px;
  font-family: trap;
  font-weight: 600;

  @media (min-width: 1000px) {
    font-size: 100px;
  }
`;

const CoverImage = styled.div`
  transition: 1s;

  position: relative;
  width: calc(100vw - 100px);
  margin-bottom: 100px;
  border-radius: 20px 0px 0px 20px;
  background: url("/media/cover.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &:hover {
    transform: scale(1.01);
  }
  &:active {
    cursor: not-allowed;
  }

  aspect-ratio: 2/0.75;

  @media (max-width: ${BREAKPOINTS.large}px) {
    aspect-ratio: 2/1;
  }
  @media (max-width: ${BREAKPOINTS.medium}px) {
    aspect-ratio: 2/1.5;
  }
  @media (max-width: ${BREAKPOINTS.mobile}px) {
    aspect-ratio: 2/2;
  }
`;

const SyntaxWrapper = styled.span`
  display: inline;
  white-space: nowrap;
`;

export function IndexHeroSection({}) {
  return (
    <Section bgColor="white">
      <PreTagLine>Frontend Developer</PreTagLine>

      <TagLine
        style={{
          marginTop: 30,
          marginBottom: 30,
        }}
      >
        Jonas Volny
      </TagLine>

      <span
        style={{
          fontSize: "20px",
          marginBottom: 150,
          maxWidth: 600,
        }}
      >
        <SyntaxWrapper>Hello,</SyntaxWrapper> my name is{" "}
        <SyntaxWrapper>Jonas Volny</SyntaxWrapper> and Im{" "}
        <SyntaxWrapper>a Prague based</SyntaxWrapper> developer.{" "}
        <SyntaxWrapper>I build</SyntaxWrapper>{" "}
        <SyntaxWrapper>things on the web.</SyntaxWrapper>
      </span>

      <CoverImage>
        <div
          style={{
            zIndex: 2,
            borderRadius: "20px 0px 0px 20px",
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "#000000",
            mixBlendMode: "soft-light",
            opacity: 0.5,
          }}
        ></div>

        <div
          style={{
            zIndex: 3,
            borderRadius: "20px 0px 0px 20px",
            width: "100%",
            height: "100%",
            backgroundColor: "#000000",
            mixBlendMode: "color",
            transition: "1s",
          }}
        ></div>
      </CoverImage>
    </Section>
  );
}
