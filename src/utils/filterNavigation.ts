import { AUTH_STATE } from "config";
import { hasRole } from ".";

export const filterNavigation = (navArray, session) => {
  // start filtering
  const filteredNav = navArray.filter((item) => {
    // if the item is set to any return true as all can see
    switch (item?.authState) {
      case AUTH_STATE.ANY:
        return true;
      case AUTH_STATE.NONE:
        return false;
      case AUTH_STATE.LOGGED_IN:
        // if the item needs you to be logged in if they are anything but authenticated then thats not considered logged in
        if (session.status === "authenticated") {
          if (item?.requiredRole) {
            return hasRole(session, item?.requiredRole);
          }

          // not all items have a required role, so just return true
          return true;
        } else {
          return false;
        }
      case AUTH_STATE.LOGGED_OUT:
        // if the items needs you to be logged out, if they are authenticated then thats not the case,
        // loading and unauthenticated are considered logged out
        if (
          session.status === "loading" ||
          session.status === "unauthenticated"
        ) {
          return true;
        } else {
          return false;
        }
      default:
        return false;
    }
  });

  return filteredNav;
};
