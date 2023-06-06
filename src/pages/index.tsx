import Head from "next/head";
import { useState } from "react";

import { ContentWrapper } from "@/components/layout/ContentWrapper";

import { NavBar } from "@/components/navigation/NavBar";
import { PermanentSideMenu } from "@/components/navigation/PermanentSideMenu";
import { FullScreenMenuComponent } from "@/components/navigation/FullScreenMenuComponent";

import { IndexHeroSection } from "@/components/sections/hero/IndexHeroSection";

import { ProjectsOverviewSection } from "@/components/sections/contentful/ProjectsOverviewSection";
import { AboutMeSection } from "@/components/sections/contentful/AboutMeSection";
import { MyToolsSection } from "@/components/sections/contentful/MyToolsSection";
import { ContactSection } from "@/components/sections/contentful/ContactSection";

import { Footer } from "@/components/footer/Footer";

export default function Projects() {
  const [isFullscreenMenuOn, setIsFullscreenMenuOn] = useState<boolean>(false);

  const fullscreenMenuHandler = (): void =>
    setIsFullscreenMenuOn(!isFullscreenMenuOn);

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
        <IndexHeroSection />
        <ProjectsOverviewSection idValue="projects" />
        <AboutMeSection idValue="about" />
        <MyToolsSection id="tools" />
        <ContactSection id="contact" />
        <Footer />
      </ContentWrapper>
    </>
  );
}
