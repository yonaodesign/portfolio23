import Link from "next/link";
import React from "react";
import styled from "styled-components";
import BREAKPOINTS from "@/utils/breakpoints";

const Wrapper = styled.div`
  // background-color: papayawhip;
  background-color: #f8f8f8;
  width: 100%;
  // border-radius: 20px;
  // padding: 20px;
  // margin: 10px;
  display: flex;
  justify-content: center;

  &:active {
    cursor: not-allowed;
  }
`;

interface DeviceProps {
  fileUrl: string;
}

const Device = styled.div<DeviceProps>`
  transition: 1s;
  box-shadow: 0px 0px 50px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: white;
  width: 50%;
  background-image: ${({ fileUrl }) => `url("/projects/${fileUrl}")`};
  border: 5px solid #e2e2e2;
  /* padding: 10px; */
  background-color: white;
  border-radius: 30px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin: 50px;
  outline: 1px solid gray;
  aspect-ratio: 9/19.5;

  &:hover {
    box-shadow: 0px 0px 50px 5px rgba(0, 0, 0, 0.4);
    transform: scale(1.01);
  }

  @media (max-width: ${BREAKPOINTS.medium}px) {
    width: 100%;
    margin: 10px;
  }
`;

const Drop = styled.div`
  width: 80px;
  height: 20px;
  background-color: #e2e2e2;
  border-radius: 0 0 10px 10px;
`;

export const MobileShot = ({ fileUrl }: { fileUrl: string }) => {
  return (
    <Wrapper>
      <Device fileUrl={fileUrl}>
        <Drop />
      </Device>
    </Wrapper>
  );
};
