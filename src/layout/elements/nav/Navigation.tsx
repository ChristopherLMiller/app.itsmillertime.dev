import styled from "styled-components";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import NavItem from "./NavItem";

const StyledNav = styled(motion.nav)`
  display: grid;
  grid-template-columns: 1;
  align-items: center;
  background: var(--color-gold-transparent);
  box-shadow: var(--box-shadow-elev-1);

  @media (min-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(165px, 1fr));
  }
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
  const isMenuOpen = useState(false);

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
        isMenuOpen &&
        navLinks.map((navItem) => (
          <NavItem item={navItem} key={navItem.title} />
        ))}
    </StyledNav>
  );
};

export default Nav;
