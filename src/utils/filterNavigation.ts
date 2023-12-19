import { AUTH_STATE } from "config";

export const filterNavigation = (navArray, user) => {
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
        if (user !== undefined) {
          if (item?.requiredRole) {
            return true; //hasRole(session, item?.requiredRole);
          }

          // not all items have a required role, so just return true
          return true;
        } else {
          return false;
        }
      case AUTH_STATE.LOGGED_OUT:
        // if the items needs you to be logged out, if they are authenticated then thats not the case,
        // loading and unauthenticated are considered logged out
        if (user == undefined) {
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
