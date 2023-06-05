import Link from "next/link";
import React from "react";
import styled from "styled-components";
import BREAKPOINTS from "../pages/api/breakpoints";

const Wrapper = styled.div`
  transition: 0s;
  margin: 50px 0px;
  display: flex;
  justify-content: center;

  @media (max-width: ${BREAKPOINTS.medium}px) {
    padding: 0px;
    margin: -40px;
  }

  @media (max-width: ${BREAKPOINTS.mobile}px) {
    padding: 0px;
    margin: 30px -40px;
  }

  &:active {
    cursor: not-allowed;
  }
`;

const Device = styled.div`
  transition: 1s;
  box-shadow: 0px 0px 50px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: white;
  width: 90%;

  aspect-ratio: 16/10;
  background-image: ${({ fileUrl }) => `url("/projects/${fileUrl}")`};
  border: 2px solid #e2e2e2;
  /* padding: 10px; */
  background-color: white;
  border-radius: 10px;
  background-size: cover;
  background-position: center top 20px;
  background-repeat: no-repeat;
  margin: 10px;
  outline: 1px solid gray;

  &:hover {
    box-shadow: 0px 0px 50px 5px rgba(0, 0, 0, 0.4);
    transform: scale(1.01);
  }

  @media (max-width: ${BREAKPOINTS.medium}px) {
    width: 100%;
    margin: 10px;
  }
`;

interface Props {
  index: number;
  fileUrl: string;
  key: string;
}

const CoverShot: React.FC = ({ index, fileUrl, key }: Props) => {
  return (
    <Wrapper>
      <Device fileUrl={fileUrl}>
        <div
          style={{
            width: "100%",
            height: "20px",
            backgroundColor: "#e2e2e2",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              height: "100%",
              marginLeft: 5,
            }}
          >
            {["#FF605C", "#FFBD44", "#00CA4E"].map((e, i) => (
              <div
                key={`titleBarCircle${i}`}
                style={{
                  height: "40%",
                  aspectRatio: "1/1",
                  backgroundColor: e,
                  borderRadius: 500,
                }}
              ></div>
            ))}
          </div>
        </div>
      </Device>
    </Wrapper>
  );
};

export default CoverShot;
