import { NavigationItem } from "@components/Navigation/Items/NavigationItem";
import { useSession } from "next-auth/react";
import { FunctionComponent, useEffect, useState } from "react";
import { filterNavigation } from "src/utils";
import {
  NavigationBar,
  NavigationBarVariants,
  NavigationVariants,
  StyledNavigation,
} from "./styles";

const DesktopNav: FunctionComponent = () => {
  const session = useSession();
  const [isLoading, setLoading] = useState(true);
  const [navLinks, setNavLinks] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await import(`fixtures/json/nav.json`);
      const filteredData = filterNavigation(data.items, session);
      setNavLinks(filteredData);
      setLoading(false);
    }

    fetchData();
  }, [session, isLoading]);

  return (
    <StyledNavigation
      initial="hidden"
      animate={isLoading ? "hidden" : "visible"}
      variants={NavigationVariants}
    >
      <NavigationBar variants={NavigationBarVariants}>
        {!isLoading &&
          navLinks.map((navItem) => (
            <NavigationItem key={navItem.slug} item={navItem} />
          ))}
      </NavigationBar>
    </StyledNavigation>
  );
};

export default DesktopNav;
