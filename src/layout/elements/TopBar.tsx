import { Fragment, useState } from "react";
import styled from "styled-components";
import SiteTitle from "./SiteTitle";
import Nav from "./nav/Navigation";

const StyledTopBar = styled.div`
  background: var(--color-grey-darker);
  display: grid;
  grid-template-columns: auto 1fr;

  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

const TopBar = () => {
  return (
    <Fragment>
      <StyledTopBar>
        <SiteTitle />
      </StyledTopBar>
      <Nav />
    </Fragment>
  );
};

export default TopBar;
