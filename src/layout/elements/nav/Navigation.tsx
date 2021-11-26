import styled from "styled-components";
import { motion } from "framer-motion";
import { useState, useEffect, FunctionComponent } from "react";
import NavItem from "./NavItem";

const StyledNav = styled(motion.nav)`
  display: none;

  @media (min-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(165px, 1fr));
    display: grid;
    align-items: center;
    background: var(--color-gold);
    box-shadow: var(--box-shadow-elev-1);
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

const Nav: FunctionComponent = () => {
  const [isLoading, setLoading] = useState(true);
  const [navLinks, setNavLinks] = useState(null);
  const isMenuOpen = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await import(`fixtures/json/nav.json`);
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
