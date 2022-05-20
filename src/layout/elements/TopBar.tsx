import MobileNav from "@components/Navigation/MobileNav";
import { FunctionComponent } from "react";
import styled from "styled-components";
import SiteTitle from "./SiteTitle";

const TopBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
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
      <MobileNav />
      <SiteTitle />
    </StyledTopBar>
  </TopBarContainer>
);

export default TopBar;
