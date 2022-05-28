import { FunctionComponent, useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { ScrollTopDiv, ScrollTopVariants } from "./styles";

const ScrollTop: FunctionComponent = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    // add event listener for scroll events
    window.addEventListener(`scroll`, handleScroll);

    // cleanup
    return () => {
      window.removeEventListener(`scroll`, handleScroll);
    };
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: `smooth` });
  };

  return (
    <ScrollTopDiv
      initial="hidden"
      animate={showScrollTop ? `visible` : `hidden`}
      variants={ScrollTopVariants}
      onClick={scrollToTop}
    >
      <FaArrowCircleUp />
    </ScrollTopDiv>
  );
};

export default ScrollTop;
