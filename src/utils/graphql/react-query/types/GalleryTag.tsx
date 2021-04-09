import { InputId, Maybe, Scalars } from '.';

export type GalleryTags = {
  __typename?: `GalleryTags`;
  id: Scalars[`ID`];
  _id: Scalars[`ID`];
  createdAt: Scalars[`DateTime`];
  updatedAt: Scalars[`DateTime`];
  title?: Maybe<Scalars[`String`]>;
  slug?: Maybe<Scalars[`String`]>;
};

export type GalleryTagsConnection = {
  __typename?: `GalleryTagsConnection`;
  values?: Maybe<Array<Maybe<GalleryTags>>>;
  groupBy?: Maybe<GalleryTagsGroupBy>;
  aggregate?: Maybe<GalleryTagsAggregator>;
};

export type GalleryTagsAggregator = {
  __typename?: `GalleryTagsAggregator`;
  count?: Maybe<Scalars[`Int`]>;
  totalCount?: Maybe<Scalars[`Int`]>;
};

export type GalleryTagsGroupBy = {
  __typename?: `GalleryTagsGroupBy`;
  id?: Maybe<Array<Maybe<GalleryTagsConnectionId>>>;
  _id?: Maybe<Array<Maybe<GalleryTagsConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<GalleryTagsConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<GalleryTagsConnectionUpdatedAt>>>;
  title?: Maybe<Array<Maybe<GalleryTagsConnectionTitle>>>;
  slug?: Maybe<Array<Maybe<GalleryTagsConnectionSlug>>>;
};

export type GalleryTagsConnectionId = {
  __typename?: `GalleryTagsConnectionId`;
  key?: Maybe<Scalars[`ID`]>;
  connection?: Maybe<GalleryTagsConnection>;
};

export type GalleryTagsConnection_Id = {
  __typename?: `GalleryTagsConnection_id`;
  key?: Maybe<Scalars[`ID`]>;
  connection?: Maybe<GalleryTagsConnection>;
};

export type GalleryTagsConnectionCreatedAt = {
  __typename?: `GalleryTagsConnectionCreatedAt`;
  key?: Maybe<Scalars[`DateTime`]>;
  connection?: Maybe<GalleryTagsConnection>;
};

export type GalleryTagsConnectionUpdatedAt = {
  __typename?: `GalleryTagsConnectionUpdatedAt`;
  key?: Maybe<Scalars[`DateTime`]>;
  connection?: Maybe<GalleryTagsConnection>;
};

export type GalleryTagsConnectionTitle = {
  __typename?: `GalleryTagsConnectionTitle`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<GalleryTagsConnection>;
};

export type GalleryTagsConnectionSlug = {
  __typename?: `GalleryTagsConnectionSlug`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<GalleryTagsConnection>;
};

export type GalleryTagInput = {
  title?: Maybe<Scalars[`String`]>;
  slug?: Maybe<Scalars[`String`]>;
  created_by?: Maybe<Scalars[`ID`]>;
  updated_by?: Maybe<Scalars[`ID`]>;
};

export type EditGalleryTagInput = {
  title?: Maybe<Scalars[`String`]>;
  slug?: Maybe<Scalars[`String`]>;
  created_by?: Maybe<Scalars[`ID`]>;
  updated_by?: Maybe<Scalars[`ID`]>;
};

export type CreateGalleryTagInput = {
  data?: Maybe<GalleryTagInput>;
};

export type CreateGalleryTagPayload = {
  __typename?: `createGalleryTagPayload`;
  galleryTag?: Maybe<GalleryTags>;
};

export type UpdateGalleryTagInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditGalleryTagInput>;
};

export type UpdateGalleryTagPayload = {
  __typename?: `updateGalleryTagPayload`;
  galleryTag?: Maybe<GalleryTags>;
};

export type DeleteGalleryTagInput = {
  where?: Maybe<InputId>;
};

export type DeleteGalleryTagPayload = {
  __typename?: `deleteGalleryTagPayload`;
  galleryTag?: Maybe<GalleryTags>;
};
