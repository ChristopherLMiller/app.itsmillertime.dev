import { roles } from "config";

export const isAdmin = (session, serverSide = false) => {
  if (serverSide) {
    return session?.user.role.name.toUpperCase() === roles.admin;
  } else {
    if (!isAuthenticated(session)) return false;
    const userRoles = getRole(session);
    if (userRoles.toUpperCase() == roles.admin) return true;
  }
  return false;
};

export const isSessionLoading = (session) => session.status == "loading";

export const isAuthenticated = (session) => session.status === "authenticated";

export const isGuest = (session) =>
  session.status === "unauthenticated" || "loading";

export const getUser = (session) => {
  if (isAuthenticated(session)) {
    return session.data.user;
  }
  return null;
};

export const getRole = (session) => {
  if (!isSessionLoading(session)) {
    return getUser(session)?.role?.name;
  }
  return "Guest";
};

export const getUsername = (session) => {
  const user = getUser(session);

  if (user) {
    return user.username;
  }
  return "Guest";
};

export const getJWT = (session) => {
  if (isAuthenticated(session)) {
    return session.data.jwt;
  }
  return null;
};
