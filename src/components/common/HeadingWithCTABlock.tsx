import styled from "styled-components";
import BREAKPOINTS from "@/utils/breakpoints";

export const HeadingWithCTABlock = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: ${BREAKPOINTS.mobile}px) {
    flex-direction: column;
    align-items: flex-start;

    a {
      margin-bottom: 50px;
    }
  }
`;
