import { Fragment, FunctionComponent } from 'react';
import styled from 'styled-components';
import SiteTitle from './SiteTitle';
import Nav from './nav/Navigation';
import AccountDetails from './AccountDetails';

const StyledTopBar = styled.div`
  background: var(--color-grey-darker);
  display: flex;
  justify-content: space-between;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

const TopBar: FunctionComponent = () => (
  <Fragment>
    <StyledTopBar>
      <AccountDetails />
      <SiteTitle />
    </StyledTopBar>
    <Nav />
  </Fragment>
);

export default TopBar;
