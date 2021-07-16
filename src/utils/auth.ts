import { ADMIN } from 'config';
import { UsersPermissionsMe } from 'src/graphql/types';

export const isAdmin = (user: UsersPermissionsMe) =>
  user?.role?.name.toUpperCase().includes(ADMIN);
