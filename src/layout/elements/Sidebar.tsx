import styled from "styled-components";
import Nav from "./Nav";
import { motion } from "framer-motion";

const StyledSidebar = styled(motion.div)`
  background: var(--color-black);
  min-height: 100vh;
  z-index: 1;
`;

const SidebarVariants = {
  hidden: {
    transform: "translateX(-100%)",
  },
  visible: {
    transform: "translateX(0%)",
  },
};

const SidebarInner = styled(motion.div)`
  position: sticky;
  top: 10px;

  li {
    color: white;
  }
`;

const Sidebar = () => {
  return (
    <StyledSidebar
      initial="hidden"
      animate="visible"
      variants={SidebarVariants}
    >
      <SidebarInner>
        <img src="/logo.png" width="60px" alt="logo" loading="lazy" />
        <hr />
        <Nav />
      </SidebarInner>
    </StyledSidebar>
  );
};

export default Sidebar;
