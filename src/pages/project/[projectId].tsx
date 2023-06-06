import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

import { ProjectsData } from "@/pages/api/ProjectDetailsDataset";
import { GalleryData } from "@/pages/api/ProjectGalleryDataset";

import { ContentWrapper } from "@/components/layout/ContentWrapper";

import { NavBar } from "@/components/navigation/NavBar";
import { PermanentSideMenu } from "@/components/navigation/PermanentSideMenu";
import { FullScreenMenuComponent } from "@/components/navigation/FullScreenMenuComponent";

import { WhyAndChallengesSection } from "@/components/sections/contentful/StyledWhy";
import { WhatHappenedSection } from "@/components/sections/contentful/WhatHappenedSection";
import { ProjectsHeroSection } from "@/components/sections/hero/ProjectsHeroSection";
import { MobileGallerySection } from "@/components/sections/contentful/MobileGallerySection";
import { DesktopShotsSection } from "@/components/sections/contentful/DesktopShotsSection";
import { OtherProjectsSection } from "@/components/sections/contentful/OtherProjectsSection";

import { Footer } from "@/components/footer/Footer";

export default function Projects() {
  const router = useRouter();
  const { projectId } = router.query;

  const [isFullscreenMenuOn, setIsFullscreenMenuOn] = useState<boolean>(false);

  // Get the data of the current project based on the project slug

  const currentProjectData = GalleryData.filter(
    (entry) => entry.projectSlug === projectId
  );

  // Find the index of the current project for previous and next project pagination
  const currentProjectDescriptionIndex = GalleryData.map(
    (e) => e.projectSlug
  ).indexOf(projectId as string);

  // Find the previous and next project based on the current project index
  const previousProjectData =
    currentProjectDescriptionIndex === 0
      ? GalleryData[GalleryData.length - 1]
      : GalleryData[currentProjectDescriptionIndex - 1];

  const nextProjectData =
    currentProjectDescriptionIndex === GalleryData.length - 1
      ? GalleryData[0]
      : GalleryData[currentProjectDescriptionIndex + 1];

  const currentProjectDescriptions = ProjectsData.filter(
    (entry) => entry.projectSlug == projectId
  );

  const fullscreenMenuHandler: () => void = () =>
    setIsFullscreenMenuOn(!isFullscreenMenuOn);

  // Handle missing project data or descriptions
  if (!currentProjectData[0] && currentProjectDescriptions[0])
    return <h1>Missing Project Data</h1>;
  if (currentProjectData[0] && !currentProjectDescriptions[0])
    return <h1>Missing Project Description</h1>;

  if (currentProjectData[0] && currentProjectDescriptions[0])
    return (
      <>
        <Head>
          <title>JV23</title>
          <meta name="description" content="Jonas Volny's Personal Website." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <PermanentSideMenu />
        {isFullscreenMenuOn && (
          <FullScreenMenuComponent
            fullscreenMenuHandler={fullscreenMenuHandler}
          />
        )}
        <ContentWrapper isFullscreenMenuOn={isFullscreenMenuOn}>
          <NavBar
            fullscreenMenuHandler={fullscreenMenuHandler}
            isFullscreenMenuOn={isFullscreenMenuOn}
          />
          <ProjectsHeroSection
            bgColor={"#ffffff"}
            currentProjectData={currentProjectData}
            currentProjectDescriptions={currentProjectDescriptions}
          />
          <WhyAndChallengesSection
            bgColor={"#f5f5f5"}
            currentProjectDescriptions={currentProjectDescriptions}
          />
          {currentProjectDescriptions[0]?.projectDesktopPhoto?.length &&
          currentProjectDescriptions[0].projectDesktopPhoto.length > 1 ? (
            <DesktopShotsSection
              currentProjectDescriptions={currentProjectDescriptions}
            />
          ) : (
            <></>
          )}
          <WhatHappenedSection
            bgColor="#11111"
            currentProjectDescriptions={currentProjectDescriptions}
          />
          {currentProjectDescriptions[0].projectMobilePhoto ? (
            <MobileGallerySection
              currentProjectDescriptions={currentProjectDescriptions}
            />
          ) : (
            <></>
          )}
          <OtherProjectsSection
            bgColor={"#e2e2e2"}
            previousProjectData={previousProjectData}
            nextProjectData={nextProjectData}
          />
          <Footer />
        </ContentWrapper>
      </>
    );
}
