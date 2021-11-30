import { isClient } from "src/utils";
import { FunctionComponent, useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { ScrollTopDiv, ScrollTopVariants } from "./styles";

const ScrollTop: FunctionComponent = () => {
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
    if (isClient()) window.addEventListener(`scroll`, handleScroll);

    // cleanup
    return () => {
      if (isClient()) window.removeEventListener(`scroll`, handleScroll);
    };
  });

  const scrollToTop = () => {
    if (isClient()) {
      window.scrollTo({ top: 0, behavior: `smooth` });
    }
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
