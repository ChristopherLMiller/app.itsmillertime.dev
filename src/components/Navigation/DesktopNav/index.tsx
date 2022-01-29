import { NavigationItem } from "@components/Navigation/Items/NavigationItem";
import { useSession } from "next-auth/react";
import { FunctionComponent, useEffect, useState } from "react";
import { getRole } from "src/utils/auth";
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
      <NavigationBar variants={NavigationBarVariants}>
        {!isLoading &&
          navLinks.map((navItem) => {
            // Lets map and display the nav items, however  we need to filter some stuff first

            // 1.  filter out things with none, they aren't meant to be seen right now
            if (navItem.authState === "NONE") return null;

            // 2. determine if we need to filter baased on the user's auth state
            if (navItem.authState === "LOGGED_IN") {
              // 2.1.1 if the user isn't logged in, filter it
              if (session.status !== "authenticated") return null;

              // 2.1.2 If user is logged in, lets see if the requiredRole is set and if the user has the role
              if (!navItem?.requiredRole?.includes(getRole(session)))
                return null;
            }

            // 3. Filter out things for logged out users if only for logged in
            if (
              navItem.authState === "LOGGED_OUT" &&
              session.status !== "unauthenticated"
            )
              return null;

            return <NavigationItem key={navItem.slug} item={navItem} />;
          })}
      </NavigationBar>
    </StyledNavigation>
  );
};

export default DesktopNav;
