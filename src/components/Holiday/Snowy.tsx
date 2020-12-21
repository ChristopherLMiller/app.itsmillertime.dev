import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
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
  const [enabled, setEnabled] = useState(true);
  const [snowFlakeCount, setSnowFlakeCount] = useState(250);

  useEffect(() => {
    if (process.browser) {
      const snowEffects = localStorage.getItem("snowEffects");

      if (snowEffects) {
        const parsed = JSON.parse(snowEffects);
        setEnabled(parsed.enabled);
        setSnowFlakeCount(parsed.snowFlakeCount);
      } else {
        localStorage.setItem(
          "snowEffects",
          JSON.stringify({ enabled, snowFlakeCount })
        );
      }
    }
  }, []);

  return (
    <SnowContainer>
      <Snowfall snowflakeCount={snowFlakeCount} />
    </SnowContainer>
  );
};

export default Snowy;
