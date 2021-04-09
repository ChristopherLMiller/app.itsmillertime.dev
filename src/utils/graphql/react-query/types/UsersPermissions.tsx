import { Maybe, Scalars, InputId } from '.';
import { Article } from './Article';

export type UsersPermissionsMe = {
  __typename?: `UsersPermissionsMe`;
  id: Scalars[`ID`];
  username: Scalars[`String`];
  email: Scalars[`String`];
  confirmed?: Maybe<Scalars[`Boolean`]>;
  blocked?: Maybe<Scalars[`Boolean`]>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: `UsersPermissionsMeRole`;
  id: Scalars[`ID`];
  name: Scalars[`String`];
  description?: Maybe<Scalars[`String`]>;
  type?: Maybe<Scalars[`String`]>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars[`String`];
  email: Scalars[`String`];
  password: Scalars[`String`];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars[`String`];
  password: Scalars[`String`];
  provider?: Maybe<Scalars[`String`]>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: `UsersPermissionsLoginPayload`;
  jwt?: Maybe<Scalars[`String`]>;
  user: UsersPermissionsMe;
};

export type UserPermissionsPasswordPayload = {
  __typename?: `UserPermissionsPasswordPayload`;
  ok: Scalars[`Boolean`];
};

export type UsersPermissionsPermission = {
  __typename?: `UsersPermissionsPermission`;
  id: Scalars[`ID`];
  _id: Scalars[`ID`];
  type: Scalars[`String`];
  controller: Scalars[`String`];
  action: Scalars[`String`];
  enabled: Scalars[`Boolean`];
  policy?: Maybe<Scalars[`String`]>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRole = {
  __typename?: `UsersPermissionsRole`;
  id: Scalars[`ID`];
  _id: Scalars[`ID`];
  name: Scalars[`String`];
  description?: Maybe<Scalars[`String`]>;
  type?: Maybe<Scalars[`String`]>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
};

export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: `UsersPermissionsRoleConnection`;
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: `UsersPermissionsRoleAggregator`;
  count?: Maybe<Scalars[`Int`]>;
  totalCount?: Maybe<Scalars[`Int`]>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: `UsersPermissionsRoleGroupBy`;
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  _id?: Maybe<Array<Maybe<UsersPermissionsRoleConnection_Id>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: `UsersPermissionsRoleConnectionId`;
  key?: Maybe<Scalars[`ID`]>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnection_Id = {
  __typename?: `UsersPermissionsRoleConnection_id`;
  key?: Maybe<Scalars[`ID`]>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: `UsersPermissionsRoleConnectionName`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: `UsersPermissionsRoleConnectionDescription`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: `UsersPermissionsRoleConnectionType`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsUser = {
  __typename?: `UsersPermissionsUser`;
  id: Scalars[`ID`];
  _id: Scalars[`ID`];
  createdAt: Scalars[`DateTime`];
  updatedAt: Scalars[`DateTime`];
  username: Scalars[`String`];
  email: Scalars[`String`];
  provider?: Maybe<Scalars[`String`]>;
  confirmed?: Maybe<Scalars[`Boolean`]>;
  blocked?: Maybe<Scalars[`Boolean`]>;
  role?: Maybe<UsersPermissionsRole>;
  articles?: Maybe<Array<Maybe<Article>>>;
};

export type UsersPermissionsUserArticlesArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
};

export type UsersPermissionsUserConnection = {
  __typename?: `UsersPermissionsUserConnection`;
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: `UsersPermissionsUserAggregator`;
  count?: Maybe<Scalars[`Int`]>;
  totalCount?: Maybe<Scalars[`Int`]>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: `UsersPermissionsUserGroupBy`;
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  _id?: Maybe<Array<Maybe<UsersPermissionsUserConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdatedAt>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: `UsersPermissionsUserConnectionId`;
  key?: Maybe<Scalars[`ID`]>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnection_Id = {
  __typename?: `UsersPermissionsUserConnection_id`;
  key?: Maybe<Scalars[`ID`]>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreatedAt = {
  __typename?: `UsersPermissionsUserConnectionCreatedAt`;
  key?: Maybe<Scalars[`DateTime`]>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdatedAt = {
  __typename?: `UsersPermissionsUserConnectionUpdatedAt`;
  key?: Maybe<Scalars[`DateTime`]>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: `UsersPermissionsUserConnectionUsername`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: `UsersPermissionsUserConnectionEmail`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: `UsersPermissionsUserConnectionProvider`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: `UsersPermissionsUserConnectionConfirmed`;
  key?: Maybe<Scalars[`Boolean`]>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: `UsersPermissionsUserConnectionBlocked`;
  key?: Maybe<Scalars[`Boolean`]>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: `UsersPermissionsUserConnectionRole`;
  key?: Maybe<Scalars[`ID`]>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UserInput = {
  username: Scalars[`String`];
  email: Scalars[`String`];
  provider?: Maybe<Scalars[`String`]>;
  password?: Maybe<Scalars[`String`]>;
  resetPasswordToken?: Maybe<Scalars[`String`]>;
  confirmationToken?: Maybe<Scalars[`String`]>;
  confirmed?: Maybe<Scalars[`Boolean`]>;
  blocked?: Maybe<Scalars[`Boolean`]>;
  role?: Maybe<Scalars[`ID`]>;
  articles?: Maybe<Array<Maybe<Scalars[`ID`]>>>;
  created_by?: Maybe<Scalars[`ID`]>;
  updated_by?: Maybe<Scalars[`ID`]>;
};

export type EditUserInput = {
  username?: Maybe<Scalars[`String`]>;
  email?: Maybe<Scalars[`String`]>;
  provider?: Maybe<Scalars[`String`]>;
  password?: Maybe<Scalars[`String`]>;
  resetPasswordToken?: Maybe<Scalars[`String`]>;
  confirmationToken?: Maybe<Scalars[`String`]>;
  confirmed?: Maybe<Scalars[`Boolean`]>;
  blocked?: Maybe<Scalars[`Boolean`]>;
  role?: Maybe<Scalars[`ID`]>;
  articles?: Maybe<Array<Maybe<Scalars[`ID`]>>>;
  created_by?: Maybe<Scalars[`ID`]>;
  updated_by?: Maybe<Scalars[`ID`]>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: `createUserPayload`;
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
  __typename?: `updateUserPayload`;
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: `deleteUserPayload`;
  user?: Maybe<UsersPermissionsUser>;
};

export type RoleInput = {
  name: Scalars[`String`];
  description?: Maybe<Scalars[`String`]>;
  type?: Maybe<Scalars[`String`]>;
  permissions?: Maybe<Array<Maybe<Scalars[`ID`]>>>;
  users?: Maybe<Array<Maybe<Scalars[`ID`]>>>;
  created_by?: Maybe<Scalars[`ID`]>;
  updated_by?: Maybe<Scalars[`ID`]>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars[`String`]>;
  description?: Maybe<Scalars[`String`]>;
  type?: Maybe<Scalars[`String`]>;
  permissions?: Maybe<Array<Maybe<Scalars[`ID`]>>>;
  users?: Maybe<Array<Maybe<Scalars[`ID`]>>>;
  created_by?: Maybe<Scalars[`ID`]>;
  updated_by?: Maybe<Scalars[`ID`]>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: `createRolePayload`;
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
  __typename?: `updateRolePayload`;
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: `deleteRolePayload`;
  role?: Maybe<UsersPermissionsRole>;
};
