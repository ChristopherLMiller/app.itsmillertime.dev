import { useSession, useUser } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "src/lib/fetch";
import { filterNavigation } from "src/utils";

export function useNav() {
  const [isLoading, setIsLoading] = useState(true);
  const [navLinks, setNavLinks] = useState<Array<any>>([]);
  const [userPermissions, setUserPermissions] = useState([]);
  const user = useUser();
  const session = useSession();

  useEffect(() => {
    async function fetchNavData() {
      const data = await import("@fixtures/json/nav");
      const filteredData = filterNavigation(
        data.nav.items,
        user?.role,
        userPermissions,
      );
      setNavLinks(filteredData);
      setIsLoading(false);
    }

    fetchNavData();
  }, [isLoading, user?.role, userPermissions]);

  useEffect(() => {
    const fetchUserPermissions = async (headers) => {
      const { data, statusCode } = await fetchFromAPI(
        "auth/users/me/permissions",
        headers,
      );

      if (statusCode === 200 && data !== null) {
        setUserPermissions(data);
      }
    };
    // Only run when the session isn't null (aka loaded)
    if (session) {
      const headers = {};
      headers["Authorization"] = `bearer ${session.access_token}`;
      fetchUserPermissions(headers);
    }
  }, [session]);

  return { isLoading, navLinks };
}
