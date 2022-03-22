import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { filterNavigation } from "src/utils";

export function useNav() {
  const session = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const [navLinks, setNavLinks] = useState(null);

  useEffect(() => {
    async function fetchNavData() {
      const data = await import("fixtures/json/nav.json");
      const filteredData = filterNavigation(data.items, session);
      setNavLinks(filteredData);
      setIsLoading(false);
    }

    fetchNavData();
  }, [session, isLoading]);

  return { isLoading, navLinks };
}
