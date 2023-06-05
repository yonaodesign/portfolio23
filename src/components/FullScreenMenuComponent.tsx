import React from "react";
import styled from "styled-components";
import { StyledLink } from "./StyledLink";

const FullScreenMenu = styled.div`
  @media (max-width: 1000px) {
    transition: 0.5s;
    z-index: 10;
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(20px);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  display: none;
`;

export function FullScreenMenuComponent({ fullscreenMenuHandler }) {
  return (
    <FullScreenMenu>
      <div
        style={{
          lineHeight: 3,
          fontSize: 24,
          color: "#000000",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span
          onClick={fullscreenMenuHandler}
          style={{
            whiteSpace: "nowrap",
            cursor: "pointer",
            paddingRight: 30,
          }}
        >
          <StyledLink href={"/#about"}>About Me</StyledLink>
        </span>
        <span
          onClick={fullscreenMenuHandler}
          style={{
            whiteSpace: "nowrap",
            cursor: "pointer",
            paddingRight: 30,
          }}
        >
          <StyledLink href={"/#projects"}>Projects</StyledLink>
        </span>
        <span
          onClick={fullscreenMenuHandler}
          style={{
            whiteSpace: "nowrap",
            cursor: "pointer",
            paddingRight: 30,
          }}
        >
          <StyledLink href={"/#contact"}>Contact</StyledLink>
        </span>
      </div>
    </FullScreenMenu>
  );
}
