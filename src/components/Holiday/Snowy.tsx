import dynamic from "next/dynamic";
import styled from "styled-components";

const Snowfall = dynamic(() => import("react-snowfall"), { ssr: false });

const SnowContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Snowy = () => {
  return (
    <SnowContainer>
      <Snowfall snowflakeCount={1000} />
    </SnowContainer>
  );
};

export default Snowy;
