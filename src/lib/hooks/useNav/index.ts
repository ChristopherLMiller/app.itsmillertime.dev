import { useUser } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { filterNavigation } from "src/utils";

export function useNav() {
  const [isLoading, setIsLoading] = useState(true);
  const [navLinks, setNavLinks] = useState<Array<any>>([]);
  const user = useUser();

  useEffect(() => {
    async function fetchNavData() {
      const data = await import("@fixtures/json/nav");
      const filteredData = filterNavigation(data.nav.items, user?.role);
      setNavLinks(filteredData);
      setIsLoading(false);
    }

    fetchNavData();
  }, [isLoading, user?.role]);

  return { isLoading, navLinks };
}
