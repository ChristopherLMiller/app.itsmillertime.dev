import dynamic from "next/dynamic";
import { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";
import SiteTitle from "./SiteTitle";

const TopBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  box-shadow: var(--box-shadow-elev-1);
`;
const StyledTopBar = styled.div`
  background: var(--color-grey-darker);
  display: flex;
  justify-content: space-between;
  height: var(--top-bar-height);
  padding-inline: 10px;
`;

const TopBar: FunctionComponent = () => {
  const [isMobileNavVisible, setMobileNavVisibility] = useState(false);

  // Some logic to determine if the mobile navigation should be visible
  useEffect(() => {
    // For example, you can check the window width to decide when to show the mobile navigation
    const handleResize = () => {
      setMobileNavVisibility(window.innerWidth <= 500);
    };

    handleResize(); // Check initial window width
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const Nav = dynamic(() => import("@components/Navigation/MobileNav"), {
    ssr: false,
  });

  return (
    <TopBarContainer>
      <StyledTopBar>
        {isMobileNavVisible && <Nav />}
        <SiteTitle />
      </StyledTopBar>
    </TopBarContainer>
  );
};

export default TopBar;
