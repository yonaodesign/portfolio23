import React from "react";
import styled from "styled-components";
import { StyledLink } from "@/components/common/StyledLink";

const Wrapper = styled.div`
  z-index: 100;
  position: fixed;
  top: 50%;
  transform: translateX(50%);
  transform: rotate(270deg);

  div {
    transform: translateY(-20px);
    display: flex;
    gap: 30px;
  }
`;

export function PermanentSideMenu({}) {
  return (
    <Wrapper>
      <div>
        <StyledLink
          href="https://www.linkedin.com/in/jonas-volny/"
          target="_blank"
          aria-label="Link to Jonas' LinkedIn profile"
        >
          LinkedIn
        </StyledLink>
        <StyledLink
          href="https://github.com/yonaodesign"
          target="_blank"
          aria-label="Link to Jonas' Github profile"
        >
          GitHub
        </StyledLink>
      </div>
    </Wrapper>
  );
}
