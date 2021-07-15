import { ADMIN } from 'config';
import { UsersPermissionsMe } from 'src/graphql/types';

export const isAdmin = (user: UsersPermissionsMe) => {
  console.log(user?.role?.name);
  return user?.role?.name.toUpperCase().includes(ADMIN);
};
