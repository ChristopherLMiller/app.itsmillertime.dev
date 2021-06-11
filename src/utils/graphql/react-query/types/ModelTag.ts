import { Scalars, Maybe, InputId } from '.';

export type ModelTags = {
  __typename?: `ModelTags`;
  id: Scalars[`ID`];
  _id: Scalars[`ID`];
  createdAt: Scalars[`DateTime`];
  updatedAt: Scalars[`DateTime`];
  name?: Maybe<Scalars[`String`]>;
  slug?: Maybe<Scalars[`String`]>;
};

export type ModelTagsConnection = {
  __typename?: `ModelTagsConnection`;
  values?: Maybe<Array<Maybe<ModelTags>>>;
  groupBy?: Maybe<ModelTagsGroupBy>;
  aggregate?: Maybe<ModelTagsAggregator>;
};

export type ModelTagsAggregator = {
  __typename?: `ModelTagsAggregator`;
  count?: Maybe<Scalars[`Int`]>;
  totalCount?: Maybe<Scalars[`Int`]>;
};

export type ModelTagsGroupBy = {
  __typename?: `ModelTagsGroupBy`;
  id?: Maybe<Array<Maybe<ModelTagsConnectionId>>>;
  _id?: Maybe<Array<Maybe<ModelTagsConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<ModelTagsConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<ModelTagsConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<ModelTagsConnectionName>>>;
  slug?: Maybe<Array<Maybe<ModelTagsConnectionSlug>>>;
};

export type ModelTagsConnectionId = {
  __typename?: `ModelTagsConnectionId`;
  key?: Maybe<Scalars[`ID`]>;
  connection?: Maybe<ModelTagsConnection>;
};

export type ModelTagsConnection_Id = {
  __typename?: `ModelTagsConnection_id`;
  key?: Maybe<Scalars[`ID`]>;
  connection?: Maybe<ModelTagsConnection>;
};

export type ModelTagsConnectionCreatedAt = {
  __typename?: `ModelTagsConnectionCreatedAt`;
  key?: Maybe<Scalars[`DateTime`]>;
  connection?: Maybe<ModelTagsConnection>;
};

export type ModelTagsConnectionUpdatedAt = {
  __typename?: `ModelTagsConnectionUpdatedAt`;
  key?: Maybe<Scalars[`DateTime`]>;
  connection?: Maybe<ModelTagsConnection>;
};

export type ModelTagsConnectionName = {
  __typename?: `ModelTagsConnectionName`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<ModelTagsConnection>;
};

export type ModelTagsConnectionSlug = {
  __typename?: `ModelTagsConnectionSlug`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<ModelTagsConnection>;
};

export type ModelTagInput = {
  name?: Maybe<Scalars[`String`]>;
  slug?: Maybe<Scalars[`String`]>;
  created_by?: Maybe<Scalars[`ID`]>;
  updated_by?: Maybe<Scalars[`ID`]>;
};

export type EditModelTagInput = {
  name?: Maybe<Scalars[`String`]>;
  slug?: Maybe<Scalars[`String`]>;
  created_by?: Maybe<Scalars[`ID`]>;
  updated_by?: Maybe<Scalars[`ID`]>;
};

export type CreateModelTagInput = {
  data?: Maybe<ModelTagInput>;
};

export type CreateModelTagPayload = {
  __typename?: `createModelTagPayload`;
  modelTag?: Maybe<ModelTags>;
};

export type UpdateModelTagInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditModelTagInput>;
};

export type UpdateModelTagPayload = {
  __typename?: `updateModelTagPayload`;
  modelTag?: Maybe<ModelTags>;
};

export type DeleteModelTagInput = {
  where?: Maybe<InputId>;
};

export type DeleteModelTagPayload = {
  __typename?: `deleteModelTagPayload`;
  modelTag?: Maybe<ModelTags>;
};
