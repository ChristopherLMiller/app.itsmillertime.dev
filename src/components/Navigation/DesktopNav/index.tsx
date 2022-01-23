import { NavigationItem } from "@components/Navigation/NavigationItem";
import { FunctionComponent, useEffect, useState } from "react";
import ChildMenu from "../ChildMenu";
import { NavigationBar, NavigationVariants, StyledNavigation } from "./styles";

const DesktopNav: FunctionComponent = () => {
  const [isLoading, setLoading] = useState(true);
  const [navLinks, setNavLinks] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await import(`fixtures/json/nav.json`);
      setNavLinks(data.items);
      setLoading(false);
    }

    fetchData();
  });

  return (
    <StyledNavigation
      initial="hidden"
      animate={isLoading ? "hidden" : "visible"}
      variants={NavigationVariants}
    >
      <NavigationBar>
        {!isLoading &&
          navLinks.map((navItem) => {
            // we need to determine if the nav item is just that a nav item or a child menu
            if (navItem.children?.items) {
              return <ChildMenu key={navItem.title} item={navItem} />;
            } else {
              return <NavigationItem item={navItem} key={navItem.title} />;
            }
          })}
      </NavigationBar>
    </StyledNavigation>
  );
};

export default DesktopNav;
