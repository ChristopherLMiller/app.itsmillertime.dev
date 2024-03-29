import { FunctionComponent } from "react";
import SyncLoader from "react-spinners/SyncLoader";
import { defaultTheme } from "styles/default";
import { LoaderContainer } from "./styles";

interface iLoader {
  isLoading: boolean;
}

const Loader: FunctionComponent<iLoader> = ({ isLoading }) => {
  if (isLoading) {
    return (
      <LoaderContainer>
        <SyncLoader
          size={20}
          margin={10}
          loading={isLoading}
          color={defaultTheme.colors.primary}
        />
      </LoaderContainer>
    );
  }
  return <></>;
};

export default Loader;
