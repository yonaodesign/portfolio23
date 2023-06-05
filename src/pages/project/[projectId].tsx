import { DesktopShotsSection } from "../../components/DesktopShotsSection";
import { OtherProjectsSection } from "../../components/OtherProjectsSection";
import { NavBar } from "../../components/NavBar";
import { FullScreenMenuComponent } from "../../components/FullScreenMenuComponent";
import Head from "next/head";
import ProjectsData from "../api/ProjectDetailsDataset";
import galleryData from "../api/ProjectGalleryDataset";

import { useRouter } from "next/router";
import { useState, useCallback, useEffect } from "react";

import { Footer } from "../../components/Footer";
import { PermanentSideMenu } from "../../components/PermanentSideMenu";
import { ContentWrapper } from "../../components/ContentWrapper";
import { WhyAndChallengesSection } from "../../components/StyledWhy";
import { WhatHappenedSection } from "../../components/WhatHappenedSection";
import { ProjectsHeroSection } from "../../components/ProjectsHeroSection";
import { MobileGallerySection } from "../../components/MobileGallerySection";

export default function Projects() {
  const router = useRouter();
  const { projectId } = router.query;

  const [isFullscreenMenuOn, setIsFullscreenMenuOn] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);

  const currentProjectData = galleryData.filter(
    (entry) => entry.projectSlug == projectId
  );

  const currentProjectDataId = galleryData
    .map((e) => e.projectSlug)
    .indexOf(projectId);

  const previousProjectData =
    currentProjectDataId === 0
      ? galleryData[galleryData.length - 1]
      : galleryData[currentProjectDataId - 1];

  const nextProjectData =
    currentProjectDataId === galleryData.length - 1
      ? galleryData[0]
      : galleryData[currentProjectDataId + 1];

  const currentProjectDescriptions = ProjectsData.filter(
    (entry) => entry.projectSlug == projectId
  );

  const fullscreenMenuHandler = () =>
    setIsFullscreenMenuOn(!isFullscreenMenuOn);

  const onScroll = useCallback((e) => {
    const { pageYOffset, scrollY } = window;
    setScrollY(window.pageYOffset);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, [onScroll]);

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
            scrollY={scrollY}
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
          {currentProjectDescriptions[0].projectDesktopPhoto?.length > 1 ? (
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
