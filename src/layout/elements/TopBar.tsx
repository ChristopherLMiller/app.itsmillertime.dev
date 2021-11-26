import { FunctionComponent } from "react";
import styled from "styled-components";
import SiteTitle from "./SiteTitle";
import Nav from "./nav/Navigation";
import AccountDetails from "./AccountDetails";
import MobileNav from "./nav/MobileNav";

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

const TopBar: FunctionComponent = () => (
  <TopBarContainer>
    <StyledTopBar>
      <AccountDetails />
      <SiteTitle />
    </StyledTopBar>
    <Nav />
    <MobileNav />
  </TopBarContainer>
);

export default TopBar;
