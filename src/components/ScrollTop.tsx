import styled from 'styled-components';
import { motion } from 'framer-motion';
import { isClient } from 'src/utils/functions/isClientServer';
import { useEffect, useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollTopDiv = styled(motion.div)`
  position: fixed;
  right: 30px;
  bottom: 30px;
  color: var(--color-red-dark);
  justify-content: center;
  align-content: center;
  font-size: 6rem;
  cursor: pointer;
`;

const ScrollTopVariants = {
  hidden: {
    opacity: 0,
    display: 'none',
  },
  visible: {
    opacity: 1,
    display: 'flex',
  },
};

const ScrollTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isClient() && window.pageYOffset >= 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    // add event listener for scroll events
    if (isClient()) window.addEventListener('scroll', handleScroll);

    // cleanup
    return () => {
      if (isClient()) window.removeEventListener('scroll', handleScroll);
    };
  });

  const scrollToTop = () => {
    if (isClient()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <ScrollTopDiv
      initial='hidden'
      animate={showScrollTop ? 'visible' : 'hidden'}
      variants={ScrollTopVariants}
      onClick={scrollToTop}
    >
      <FaArrowCircleUp />
    </ScrollTopDiv>
  );
};

export default ScrollTop;
