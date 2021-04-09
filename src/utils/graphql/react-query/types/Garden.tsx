import { InputId, Maybe, Scalars } from '.';

export type Gardens = {
  __typename?: `Gardens`;
  id: Scalars[`ID`];
  _id: Scalars[`ID`];
  createdAt: Scalars[`DateTime`];
  updatedAt: Scalars[`DateTime`];
  title: Scalars[`String`];
  slug: Scalars[`String`];
  contents: Scalars[`String`];
};

export type GardensConnection = {
  __typename?: `GardensConnection`;
  values?: Maybe<Array<Maybe<Gardens>>>;
  groupBy?: Maybe<GardensGroupBy>;
  aggregate?: Maybe<GardensAggregator>;
};

export type GardensAggregator = {
  __typename?: `GardensAggregator`;
  count?: Maybe<Scalars[`Int`]>;
  totalCount?: Maybe<Scalars[`Int`]>;
};

export type GardensGroupBy = {
  __typename?: `GardensGroupBy`;
  id?: Maybe<Array<Maybe<GardensConnectionId>>>;
  _id?: Maybe<Array<Maybe<GardensConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<GardensConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<GardensConnectionUpdatedAt>>>;
  title?: Maybe<Array<Maybe<GardensConnectionTitle>>>;
  slug?: Maybe<Array<Maybe<GardensConnectionSlug>>>;
  contents?: Maybe<Array<Maybe<GardensConnectionContents>>>;
};

export type GardensConnectionId = {
  __typename?: `GardensConnectionId`;
  key?: Maybe<Scalars[`ID`]>;
  connection?: Maybe<GardensConnection>;
};

export type GardensConnection_Id = {
  __typename?: `GardensConnection_id`;
  key?: Maybe<Scalars[`ID`]>;
  connection?: Maybe<GardensConnection>;
};

export type GardensConnectionCreatedAt = {
  __typename?: `GardensConnectionCreatedAt`;
  key?: Maybe<Scalars[`DateTime`]>;
  connection?: Maybe<GardensConnection>;
};

export type GardensConnectionUpdatedAt = {
  __typename?: `GardensConnectionUpdatedAt`;
  key?: Maybe<Scalars[`DateTime`]>;
  connection?: Maybe<GardensConnection>;
};

export type GardensConnectionTitle = {
  __typename?: `GardensConnectionTitle`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<GardensConnection>;
};

export type GardensConnectionSlug = {
  __typename?: `GardensConnectionSlug`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<GardensConnection>;
};

export type GardensConnectionContents = {
  __typename?: `GardensConnectionContents`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<GardensConnection>;
};

export type GardenInput = {
  title: Scalars[`String`];
  slug: Scalars[`String`];
  contents: Scalars[`String`];
  created_by?: Maybe<Scalars[`ID`]>;
  updated_by?: Maybe<Scalars[`ID`]>;
};

export type EditGardenInput = {
  title?: Maybe<Scalars[`String`]>;
  slug?: Maybe<Scalars[`String`]>;
  contents?: Maybe<Scalars[`String`]>;
  created_by?: Maybe<Scalars[`ID`]>;
  updated_by?: Maybe<Scalars[`ID`]>;
};

export type CreateGardenInput = {
  data?: Maybe<GardenInput>;
};

export type CreateGardenPayload = {
  __typename?: `createGardenPayload`;
  garden?: Maybe<Gardens>;
};

export type UpdateGardenInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditGardenInput>;
};

export type UpdateGardenPayload = {
  __typename?: `updateGardenPayload`;
  garden?: Maybe<Gardens>;
};

export type DeleteGardenInput = {
  where?: Maybe<InputId>;
};

export type DeleteGardenPayload = {
  __typename?: `deleteGardenPayload`;
  garden?: Maybe<Gardens>;
};
