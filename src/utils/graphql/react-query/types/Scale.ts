import { Scalars, Maybe, InputId } from '.';

export type Scale = {
  __typename?: `Scale`;
  id: Scalars[`ID`];
  _id: Scalars[`ID`];
  createdAt: Scalars[`DateTime`];
  updatedAt: Scalars[`DateTime`];
  name?: Maybe<Scalars[`String`]>;
  slug?: Maybe<Scalars[`String`]>;
};

export type ScaleConnection = {
  __typename?: `ScaleConnection`;
  values?: Maybe<Array<Maybe<Scale>>>;
  groupBy?: Maybe<ScaleGroupBy>;
  aggregate?: Maybe<ScaleAggregator>;
};

export type ScaleAggregator = {
  __typename?: `ScaleAggregator`;
  count?: Maybe<Scalars[`Int`]>;
  totalCount?: Maybe<Scalars[`Int`]>;
};

export type ScaleGroupBy = {
  __typename?: `ScaleGroupBy`;
  id?: Maybe<Array<Maybe<ScaleConnectionId>>>;
  _id?: Maybe<Array<Maybe<ScaleConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<ScaleConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<ScaleConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<ScaleConnectionName>>>;
  slug?: Maybe<Array<Maybe<ScaleConnectionSlug>>>;
};

export type ScaleConnectionId = {
  __typename?: `ScaleConnectionId`;
  key?: Maybe<Scalars[`ID`]>;
  connection?: Maybe<ScaleConnection>;
};

export type ScaleConnection_Id = {
  __typename?: `ScaleConnection_id`;
  key?: Maybe<Scalars[`ID`]>;
  connection?: Maybe<ScaleConnection>;
};

export type ScaleConnectionCreatedAt = {
  __typename?: `ScaleConnectionCreatedAt`;
  key?: Maybe<Scalars[`DateTime`]>;
  connection?: Maybe<ScaleConnection>;
};

export type ScaleConnectionUpdatedAt = {
  __typename?: `ScaleConnectionUpdatedAt`;
  key?: Maybe<Scalars[`DateTime`]>;
  connection?: Maybe<ScaleConnection>;
};

export type ScaleConnectionName = {
  __typename?: `ScaleConnectionName`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<ScaleConnection>;
};

export type ScaleConnectionSlug = {
  __typename?: `ScaleConnectionSlug`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<ScaleConnection>;
};

export type ScaleInput = {
  name?: Maybe<Scalars[`String`]>;
  slug?: Maybe<Scalars[`String`]>;
  created_by?: Maybe<Scalars[`ID`]>;
  updated_by?: Maybe<Scalars[`ID`]>;
};

export type EditScaleInput = {
  name?: Maybe<Scalars[`String`]>;
  slug?: Maybe<Scalars[`String`]>;
  created_by?: Maybe<Scalars[`ID`]>;
  updated_by?: Maybe<Scalars[`ID`]>;
};

export type CreateScaleInput = {
  data?: Maybe<ScaleInput>;
};

export type CreateScalePayload = {
  __typename?: `createScalePayload`;
  scale?: Maybe<Scale>;
};

export type UpdateScaleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditScaleInput>;
};

export type UpdateScalePayload = {
  __typename?: `updateScalePayload`;
  scale?: Maybe<Scale>;
};

export type DeleteScaleInput = {
  where?: Maybe<InputId>;
};

export type DeleteScalePayload = {
  __typename?: `deleteScalePayload`;
  scale?: Maybe<Scale>;
};
