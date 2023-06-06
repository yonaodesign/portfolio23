import { IGalleryItem } from "@/pages/api/ProjectGalleryDataset";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  transition: 1s;
  &:hover {
    box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.01);
    transform: scale(1.01);
  }
`;

const StyledLink = styled(Link)`
color: #000000;
text-decoration: none;
font-weight: 600;
cursor: pointer;
border-bottom: 1px solid transparent;
&: hover {
  // border-bottom: 1px solid #000000;
  text-decoration: underline;
}
}
`;

const DisplayImage = styled.div`
  filter: grayscale(0%);
  transition: 0.5s;

  &:hover {
    filter: grayscale(100%);
    &::after {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      content: "${"View project →"}";
      background-color: rgba(0, 0, 0, 0.8);
      border-radius: 10px;
    }
  }

  &::after {
    content: "";
    display: flex;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
  }
`;

const GalleryCard = ({ payload }: { payload: IGalleryItem }) => {
  return (
    <Wrapper
      style={{
        width: "100%",
        padding: 10,
        borderRadius: 20,
      }}
    >
      <StyledLink href={`/project/${payload.projectSlug}`}>
        <DisplayImage
          style={{
            color: "white",
            width: "100%",
            aspectRatio: "2/1.3",
            backgroundImage: `url("/${payload.projectGalleryImage}")`,
            borderRadius: 10,
            backgroundSize: "cover",
          }}
        />
      </StyledLink>
      <h4 style={{ marginBottom: 15 }}>{payload.projectName}</h4>
      <span>{payload.projectDescription}</span>
      <div style={{ marginTop: 20 }}>
        <StyledLink href={`/project/${payload.projectSlug}`}>
          View project →
        </StyledLink>
      </div>
    </Wrapper>
  );
};

export default GalleryCard;
