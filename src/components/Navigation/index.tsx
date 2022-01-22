import { NavigationItem } from "@components/NavigationItem";
import { FunctionComponent, useEffect, useState } from "react";
import { NavigationVariants, StyledNavigation } from "./styles";

const Navigation: FunctionComponent = () => {
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
      {!isLoading &&
        navLinks.map((navItem) => (
          <NavigationItem item={navItem} key={navItem.title} />
        ))}
    </StyledNavigation>
  );
};

export default Navigation;
