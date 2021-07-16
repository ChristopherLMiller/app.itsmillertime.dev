import { defaultTheme } from 'styles/default';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import SyncLoader from 'react-spinners/SyncLoader';

const StyledLoader = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: var(--color-black-60);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

interface iLoader {
  isLoading: boolean;
}

const Loader: FunctionComponent<iLoader> = ({ isLoading }) => (
  <StyledLoader>
    <SyncLoader
      size={20}
      margin={10}
      loading={isLoading}
      color={defaultTheme.colors.primary}
    />
  </StyledLoader>
);

export default Loader;
