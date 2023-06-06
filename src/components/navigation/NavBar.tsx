import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { StyledLink } from "@/components/common/StyledLink";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Wrapper = styled.nav`
  color: #000000;
  z-index: 20;

  span {
    a {
      @media (max-width: 1000px) {
        display: none;
      }
    }
  }
`;

const LogoTypography = styled.span`
  font-family: trap;
  display: flex;
  gap: 3px;
  align-items: center;
  min-width: 32px;
  min-height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px;
  padding: 0px 8px;
  letter-spacing: -1px;
  color: #000;
  transition: 0.5s;
`;

const CollapsableText = styled.span`
  transition: 2s;
  cursor: pointer;
`;

const Hamburger = styled.span`
  cursor: pointer;
  display: none;
  @media (max-width: 1000px) {
    display: flex;
  }
`;

interface INavBarProps {
  fullscreenMenuHandler: () => void;
  isFullscreenMenuOn: boolean;
}
export function NavBar({
  fullscreenMenuHandler,
  isFullscreenMenuOn,
}: INavBarProps) {
  // Manipulate scroll event listener to update scrollY for logo toggling
  const [scrollY, setScrollY] = useState<number>(0);

  const onScroll = useCallback(() => {
    setScrollY(window.pageYOffset);
  }, []);

  const eventOptions: AddEventListenerOptions = {
    passive: true,
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll, eventOptions);
    return () => {
      window.removeEventListener("scroll", onScroll, eventOptions);
    };
  }, [onScroll]);

  return (
    <Wrapper
      style={{
        position: "fixed",
        left: 30,
        right: 30,
        top: 20,
        display: "flex",
        justifyContent: "space-between",
        zIndex: 10,
        alignItems: "center",
      }}
    >
      <StyledLink
        style={{
          cursor: "pointer",
        }}
        href="/"
      >
        <LogoTypography
          style={{
            cursor: "pointer",
          }}
        >
          <span
            style={{
              transition: "0.5s",
              cursor: "pointer",
              width: scrollY > 100 ? "9px" : "45px",
            }}
          >
            J
            <CollapsableText
              style={{
                transition: "1s",
              }}
              className={scrollY > 100 ? "collapsable" : ""}
            >
              onas
            </CollapsableText>
          </span>
          <span
            style={{
              cursor: "pointer",
            }}
          >
            V
            <CollapsableText
              style={{
                transition: "1s",
              }}
              className={scrollY > 100 ? "collapsable" : ""}
            >
              olny
            </CollapsableText>
          </span>
        </LogoTypography>
      </StyledLink>
      <span
        style={{
          display: "flex",
          gap: 12,
          alignItems: "center",
        }}
      >
        <StyledLink href={"/#about"}>
          <span
            style={{
              whiteSpace: "nowrap",
              cursor: "pointer",
            }}
          >
            About Me
          </span>
        </StyledLink>
        <StyledLink href={"/#projects"}>
          <span
            style={{
              whiteSpace: "nowrap",
              cursor: "pointer",
            }}
          >
            Projects
          </span>
        </StyledLink>
        <StyledLink href={"/#contact"}>
          <span
            style={{
              whiteSpace: "nowrap",
              cursor: "pointer",
            }}
          >
            Contact
          </span>
        </StyledLink>
      </span>

      <Hamburger onClick={fullscreenMenuHandler}>
        {isFullscreenMenuOn ? <RxCross1 /> : <RxHamburgerMenu />}
      </Hamburger>
    </Wrapper>
  );
}
