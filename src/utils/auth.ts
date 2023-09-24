import { Session } from "@supabase/supabase-js";

export const isSessionLoading = (session) => session.status == "loading";

export const isAuthenticated = (session) => session.status === "authenticated";

export const isGuest = (session) =>
  session.status === "unauthenticated" || "loading";

export const getUser = (session: Session) => {
  if (isAuthenticated(session)) {
    return session.user;
  }
  return null;
};

export const getUsername = (session) => {
  if (isAuthenticated(session)) {
    return session?.data?.user?.user?.email;
  }
};

export const isAdmin = (session, value = true) => {
  return true;
};
