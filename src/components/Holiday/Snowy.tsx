import { getYear, isThisMonth } from "date-fns";
import Image from "next/image";
import ChristmasImage from "public/christmas.jpg";
import { FunctionComponent, useEffect, useState } from "react";
import Modal from "react-modal";
import Snowfall from "react-snowfall";
import styled from "styled-components";

//const Snowfall = dynamic(() => import(`react-snowfall`), { ssr: false });

// Bind the modal to the root of the app
Modal.setAppElement(`#__next`);

const SnowContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

// Set some default styles to the modal
const ModalStyles = {
  overlay: {
    background: `#131313bf`,
    zIndex: 9999,
  },
  content: {
    top: `15%`,
    left: `15%`,
    bottom: `15%`,
    right: `15%`,
    borderRadius: `none`,
    border: `none`,
    overflow: `visible`,
    outline: `10px solid var(--main-color-transparent)`,
    padding: `0`,
    background: `none`,
  },
};

const Snowy: FunctionComponent = () => {
  const [enabled, setEnabled] = useState(true);
  const [snowFlakeCount, setSnowFlakeCount] = useState(250);
  const [modalIsOpen, setIsOpen] = useState(true);

  // Only run once
  useEffect(() => {
    if (process.browser) {
      const snowEffects = localStorage.getItem(`snowEffects`);

      if (snowEffects) {
        const parsed = JSON.parse(snowEffects);
        setEnabled(parsed.enabled);
        setSnowFlakeCount(parsed.snowFlakeCount);
      } else {
        localStorage.setItem(
          `snowEffects`,
          JSON.stringify({ enabled, snowFlakeCount })
        );
      }
    }
  }, [enabled, snowFlakeCount]);

  // we don't wanna render at all if its not december
  const currentYear = getYear(new Date());
  if (!isThisMonth(new Date(`12/24/${currentYear}`))) {
    return null;
  }

  // cause modal to open
  const openModal = () => {
    console.debug(`opening modal`);
    setIsOpen(true);
  };

  // cause modal to close
  const closeModal = () => {
    console.debug(`closing modal`);
    setIsOpen(false);
  };
  return (
    <SnowContainer>
      {enabled && <Snowfall snowflakeCount={snowFlakeCount} />}
      {false && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={ModalStyles}
        >
          <Image
            src={ChristmasImage}
            alt="Merry Christmas"
            placeholder="blur"
          />
          <button onClick={() => openModal()}>Open Modal</button>
        </Modal>
      )}
    </SnowContainer>
  );
};

export default Snowy;
