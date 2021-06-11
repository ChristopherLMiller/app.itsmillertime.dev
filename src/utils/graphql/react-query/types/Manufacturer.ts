import { Scalars, Maybe, InputId } from '.';

export type Manufacturer = {
  __typename?: `Manufacturer`;
  id: Scalars[`ID`];
  _id: Scalars[`ID`];
  createdAt: Scalars[`DateTime`];
  updatedAt: Scalars[`DateTime`];
  name?: Maybe<Scalars[`String`]>;
  slug: Scalars[`String`];
};

export type ManufacturerConnection = {
  __typename?: `ManufacturerConnection`;
  values?: Maybe<Array<Maybe<Manufacturer>>>;
  groupBy?: Maybe<ManufacturerGroupBy>;
  aggregate?: Maybe<ManufacturerAggregator>;
};

export type ManufacturerAggregator = {
  __typename?: `ManufacturerAggregator`;
  count?: Maybe<Scalars[`Int`]>;
  totalCount?: Maybe<Scalars[`Int`]>;
};

export type ManufacturerGroupBy = {
  __typename?: `ManufacturerGroupBy`;
  id?: Maybe<Array<Maybe<ManufacturerConnectionId>>>;
  _id?: Maybe<Array<Maybe<ManufacturerConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<ManufacturerConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<ManufacturerConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<ManufacturerConnectionName>>>;
  slug?: Maybe<Array<Maybe<ManufacturerConnectionSlug>>>;
};

export type ManufacturerConnectionId = {
  __typename?: `ManufacturerConnectionId`;
  key?: Maybe<Scalars[`ID`]>;
  connection?: Maybe<ManufacturerConnection>;
};

export type ManufacturerConnection_Id = {
  __typename?: `ManufacturerConnection_id`;
  key?: Maybe<Scalars[`ID`]>;
  connection?: Maybe<ManufacturerConnection>;
};

export type ManufacturerConnectionCreatedAt = {
  __typename?: `ManufacturerConnectionCreatedAt`;
  key?: Maybe<Scalars[`DateTime`]>;
  connection?: Maybe<ManufacturerConnection>;
};

export type ManufacturerConnectionUpdatedAt = {
  __typename?: `ManufacturerConnectionUpdatedAt`;
  key?: Maybe<Scalars[`DateTime`]>;
  connection?: Maybe<ManufacturerConnection>;
};

export type ManufacturerConnectionName = {
  __typename?: `ManufacturerConnectionName`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<ManufacturerConnection>;
};

export type ManufacturerConnectionSlug = {
  __typename?: `ManufacturerConnectionSlug`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<ManufacturerConnection>;
};

export type ManufacturerInput = {
  name?: Maybe<Scalars[`String`]>;
  slug: Scalars[`String`];
  created_by?: Maybe<Scalars[`ID`]>;
  updated_by?: Maybe<Scalars[`ID`]>;
};

export type EditManufacturerInput = {
  name?: Maybe<Scalars[`String`]>;
  slug?: Maybe<Scalars[`String`]>;
  created_by?: Maybe<Scalars[`ID`]>;
  updated_by?: Maybe<Scalars[`ID`]>;
};

export type CreateManufacturerInput = {
  data?: Maybe<ManufacturerInput>;
};

export type CreateManufacturerPayload = {
  __typename?: `createManufacturerPayload`;
  manufacturer?: Maybe<Manufacturer>;
};

export type UpdateManufacturerInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditManufacturerInput>;
};

export type UpdateManufacturerPayload = {
  __typename?: `updateManufacturerPayload`;
  manufacturer?: Maybe<Manufacturer>;
};

export type DeleteManufacturerInput = {
  where?: Maybe<InputId>;
};

export type DeleteManufacturerPayload = {
  __typename?: `deleteManufacturerPayload`;
  manufacturer?: Maybe<Manufacturer>;
};
