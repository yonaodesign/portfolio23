import styled from "styled-components";

interface ContentWrapperProps {
  isFullscreenMenuOn: boolean;
}

export const ContentWrapper = styled.div<ContentWrapperProps>`
  position: relative;
  font-family: inter;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #000000;
  font-size: 18px;
  overflow-x: hidden;

  @media (max-width: 1000px) {
    height: ${(props) => (props.isFullscreenMenuOn ? "100vh" : "100%")};
    overflow-y: ${(props) => (props.isFullscreenMenuOn ? "hidden" : "scroll")};
  }
`;
