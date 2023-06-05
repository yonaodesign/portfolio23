import Head from "next/head";
import { useState, useCallback, useEffect } from "react";

import { ProjectsOverviewSection } from "../components/ProjectsOverviewSection";
import { AboutMeSection } from "../components/AboutMeSection";
import { IndexHeroSection } from "../components/IndexHeroSection";
import { PermanentSideMenu } from "../components/PermanentSideMenu";
import { FullScreenMenuComponent } from "../components/FullScreenMenuComponent";
import { NavBar } from "../components/NavBar";
import { ContentWrapper } from "../components/ContentWrapper";
import { Footer } from "../components/Footer";
import { MyToolsSection } from "../components/MyToolsSection";
import { ContactSection } from "../components/ContactSection";

export default function Projects() {
  const [isFullscreenMenuOn, setIsFullscreenMenuOn] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);
  const [toggleAboutMeMyBackground, setToggleAboutMeMyBackground] =
    useState<boolean>(false);

  const fullscreenMenuHandler = () =>
    setIsFullscreenMenuOn(!isFullscreenMenuOn);

  const onScroll: React.UIEventHandler<HTMLElement> = useCallback((e) => {
    const { pageYOffset, scrollY } = window;
    setScrollY(window.pageYOffset);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, [onScroll]);

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
        <IndexHeroSection />
        <ProjectsOverviewSection idValue="projects" />
        <AboutMeSection
          idValue="about"
          setToggleAboutMeMyBackground={setToggleAboutMeMyBackground}
          toggleAboutMeMyBackground={toggleAboutMeMyBackground}
        />
        <MyToolsSection id="tools" />
        <ContactSection id="contact" />
        <Footer />
      </ContentWrapper>
    </>
  );
}
