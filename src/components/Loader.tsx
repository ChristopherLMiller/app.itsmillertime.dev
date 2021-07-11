import { defaultTheme } from 'styles/default';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import SyncLoader from 'react-spinners/SyncLoader';

const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
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
