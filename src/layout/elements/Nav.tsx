import styled from "styled-components";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import NavItem from "./NavItem";

const StyledNav = styled(motion.nav)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const NavVariants = {
  hidden: {},
  visible: {
    transition: {
      delay: 2,
      staggarChildren: 500,
    },
  },
};

const Nav = () => {
  const [isLoading, setLoading] = useState(true);
  const [navLinks, setNavLinks] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await import("@/data/json/nav.json");
      setNavLinks(data.items);
      setLoading(false);
    }

    fetchData();
  });

  return (
    <StyledNav
      initial="hidden"
      animate="visible"
      variants={NavVariants}
      role="nav"
    >
      {!isLoading &&
        navLinks.map((navItem) => (
          <NavItem item={navItem} key={navItem.title} />
        ))}
    </StyledNav>
  );
};

export default Nav;
