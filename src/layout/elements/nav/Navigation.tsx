import styled from "styled-components";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import NavItem from "../nav/sidebar/NavItem";

const StyledNav = styled(motion.nav)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  align-items: center;
  justify-content: space-around;
  background: var(--color-red-transparent);
  box-shadow: var(--box-shadow-elev-1);
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
    <StyledNav initial="hidden" animate="visible" variants={NavVariants}>
      {!isLoading &&
        navLinks.map((navItem) => (
          <NavItem item={navItem} key={navItem.title} />
        ))}
    </StyledNav>
  );
};

export default Nav;
