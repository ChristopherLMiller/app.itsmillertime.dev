import { roles } from "config";
import { UsersPermissionsMe } from "src/graphql/types";

export const isAdmin = (user: UsersPermissionsMe) =>
  user?.role?.name.toUpperCase().includes(roles.admin);
