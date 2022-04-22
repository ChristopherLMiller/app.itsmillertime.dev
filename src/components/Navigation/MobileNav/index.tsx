import Router from "next/router";
import { Fragment, useEffect, useState } from "react";
import { useNav } from "src/lib/hooks/useNav";
import { NavigationItem } from "../Items";
import { MenuButton, MobileMenu, MobileMenuVariants } from "./styles";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading, navLinks } = useNav();

  useEffect(() => {
    function handleRouteChange() {
      setIsOpen(false);
    }

    Router.events.on("routeChangeStart", handleRouteChange);

    return Router.events.off("routeChangeComplete", handleRouteChange);
  }, []);

  return (
    <Fragment>
      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Menu"}
      </MenuButton>
      <MobileMenu
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={MobileMenuVariants}
      >
        {!isLoading &&
          navLinks.map((navItem, index) => (
            <NavigationItem key={index} item={navItem} />
          ))}
      </MobileMenu>
    </Fragment>
  );
};

export default MobileNav;
