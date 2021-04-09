import { InputId, Maybe, Scalars } from '.';

export type GalleryCategories = {
  __typename?: `GalleryCategories`;
  id: Scalars[`ID`];
  _id: Scalars[`ID`];
  createdAt: Scalars[`DateTime`];
  updatedAt: Scalars[`DateTime`];
  title?: Maybe<Scalars[`String`]>;
  slug?: Maybe<Scalars[`String`]>;
  image_large?: Maybe<Scalars[`String`]>;
  image_full?: Maybe<Scalars[`String`]>;
  image_large_watermarked?: Maybe<Scalars[`String`]>;
  image_full_watermarked?: Maybe<Scalars[`String`]>;
};

export type GalleryCategoriesConnection = {
  __typename?: `GalleryCategoriesConnection`;
  values?: Maybe<Array<Maybe<GalleryCategories>>>;
  groupBy?: Maybe<GalleryCategoriesGroupBy>;
  aggregate?: Maybe<GalleryCategoriesAggregator>;
};

export type GalleryCategoriesAggregator = {
  __typename?: `GalleryCategoriesAggregator`;
  count?: Maybe<Scalars[`Int`]>;
  totalCount?: Maybe<Scalars[`Int`]>;
};

export type GalleryCategoriesGroupBy = {
  __typename?: `GalleryCategoriesGroupBy`;
  id?: Maybe<Array<Maybe<GalleryCategoriesConnectionId>>>;
  _id?: Maybe<Array<Maybe<GalleryCategoriesConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<GalleryCategoriesConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<GalleryCategoriesConnectionUpdatedAt>>>;
  title?: Maybe<Array<Maybe<GalleryCategoriesConnectionTitle>>>;
  slug?: Maybe<Array<Maybe<GalleryCategoriesConnectionSlug>>>;
  image_large?: Maybe<Array<Maybe<GalleryCategoriesConnectionImage_Large>>>;
  image_full?: Maybe<Array<Maybe<GalleryCategoriesConnectionImage_Full>>>;
  image_large_watermarked?: Maybe<
    Array<Maybe<GalleryCategoriesConnectionImage_Large_Watermarked>>
  >;
  image_full_watermarked?: Maybe<
    Array<Maybe<GalleryCategoriesConnectionImage_Full_Watermarked>>
  >;
};

export type GalleryCategoriesConnectionId = {
  __typename?: `GalleryCategoriesConnectionId`;
  key?: Maybe<Scalars[`ID`]>;
  connection?: Maybe<GalleryCategoriesConnection>;
};

export type GalleryCategoriesConnection_Id = {
  __typename?: `GalleryCategoriesConnection_id`;
  key?: Maybe<Scalars[`ID`]>;
  connection?: Maybe<GalleryCategoriesConnection>;
};

export type GalleryCategoriesConnectionCreatedAt = {
  __typename?: `GalleryCategoriesConnectionCreatedAt`;
  key?: Maybe<Scalars[`DateTime`]>;
  connection?: Maybe<GalleryCategoriesConnection>;
};

export type GalleryCategoriesConnectionUpdatedAt = {
  __typename?: `GalleryCategoriesConnectionUpdatedAt`;
  key?: Maybe<Scalars[`DateTime`]>;
  connection?: Maybe<GalleryCategoriesConnection>;
};

export type GalleryCategoriesConnectionTitle = {
  __typename?: `GalleryCategoriesConnectionTitle`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<GalleryCategoriesConnection>;
};

export type GalleryCategoriesConnectionSlug = {
  __typename?: `GalleryCategoriesConnectionSlug`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<GalleryCategoriesConnection>;
};

export type GalleryCategoriesConnectionImage_Large = {
  __typename?: `GalleryCategoriesConnectionImage_large`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<GalleryCategoriesConnection>;
};

export type GalleryCategoriesConnectionImage_Full = {
  __typename?: `GalleryCategoriesConnectionImage_full`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<GalleryCategoriesConnection>;
};

export type GalleryCategoriesConnectionImage_Large_Watermarked = {
  __typename?: `GalleryCategoriesConnectionImage_large_watermarked`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<GalleryCategoriesConnection>;
};

export type GalleryCategoriesConnectionImage_Full_Watermarked = {
  __typename?: `GalleryCategoriesConnectionImage_full_watermarked`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<GalleryCategoriesConnection>;
};

export type GalleryCategoryInput = {
  title?: Maybe<Scalars[`String`]>;
  slug?: Maybe<Scalars[`String`]>;
  image_large?: Maybe<Scalars[`String`]>;
  image_full?: Maybe<Scalars[`String`]>;
  image_large_watermarked?: Maybe<Scalars[`String`]>;
  image_full_watermarked?: Maybe<Scalars[`String`]>;
  created_by?: Maybe<Scalars[`ID`]>;
  updated_by?: Maybe<Scalars[`ID`]>;
};

export type EditGalleryCategoryInput = {
  title?: Maybe<Scalars[`String`]>;
  slug?: Maybe<Scalars[`String`]>;
  image_large?: Maybe<Scalars[`String`]>;
  image_full?: Maybe<Scalars[`String`]>;
  image_large_watermarked?: Maybe<Scalars[`String`]>;
  image_full_watermarked?: Maybe<Scalars[`String`]>;
  created_by?: Maybe<Scalars[`ID`]>;
  updated_by?: Maybe<Scalars[`ID`]>;
};

export type CreateGalleryCategoryInput = {
  data?: Maybe<GalleryCategoryInput>;
};

export type CreateGalleryCategoryPayload = {
  __typename?: `createGalleryCategoryPayload`;
  galleryCategory?: Maybe<GalleryCategories>;
};

export type UpdateGalleryCategoryInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditGalleryCategoryInput>;
};

export type UpdateGalleryCategoryPayload = {
  __typename?: `updateGalleryCategoryPayload`;
  galleryCategory?: Maybe<GalleryCategories>;
};

export type DeleteGalleryCategoryInput = {
  where?: Maybe<InputId>;
};

export type DeleteGalleryCategoryPayload = {
  __typename?: `deleteGalleryCategoryPayload`;
  galleryCategory?: Maybe<GalleryCategories>;
};
