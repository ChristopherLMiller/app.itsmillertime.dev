import { AUTH_STATE } from "config";

export const filterNavigation = (navArray, user, userPermissions) => {
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
        if (userPermissions !== undefined && userPermissions.length > 0) {
          if (item?.permissions?.length > 0) {
            return userPermissions.some((node) =>
              item.permissions.includes(node.permission.node),
            );
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
