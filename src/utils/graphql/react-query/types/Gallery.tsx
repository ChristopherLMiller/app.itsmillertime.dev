import { InputId, Maybe, Scalars, UploadFile, UsersPermissionsRole } from '.';
import { GalleryCategories } from './GalleryCategory';
import { GalleryImage } from './GalleryImage';
import { GalleryTags } from './GalleryTag';

export enum Enum_Gallery_Status {
  Public = `PUBLIC`,
  Protected = `PROTECTED`,
  Draft = `DRAFT`,
  Archived = `ARCHIVED`,
  Private = `PRIVATE`,
}

export type Gallery = {
  __typename?: `Gallery`;
  id: Scalars[`ID`];
  _id: Scalars[`ID`];
  createdAt: Scalars[`DateTime`];
  updatedAt: Scalars[`DateTime`];
  title?: Maybe<Scalars[`String`]>;
  slug?: Maybe<Scalars[`String`]>;
  description?: Maybe<Scalars[`String`]>;
  featured_image?: Maybe<UploadFile>;
  status: Enum_Gallery_Status;
  nsfw?: Maybe<Scalars[`Boolean`]>;
  gallery_categories?: Maybe<Array<Maybe<GalleryCategories>>>;
  gallery_tags?: Maybe<Array<Maybe<GalleryTags>>>;
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  gallery_images?: Maybe<Array<Maybe<GalleryImage>>>;
};

export type GalleryGallery_CategoriesArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
};

export type GalleryGallery_TagsArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
};

export type GalleryRolesArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
};

export type GalleryGallery_ImagesArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
};

export type GalleryConnection = {
  __typename?: `GalleryConnection`;
  values?: Maybe<Array<Maybe<Gallery>>>;
  groupBy?: Maybe<GalleryGroupBy>;
  aggregate?: Maybe<GalleryAggregator>;
};

export type GalleryAggregator = {
  __typename?: `GalleryAggregator`;
  count?: Maybe<Scalars[`Int`]>;
  totalCount?: Maybe<Scalars[`Int`]>;
};

export type GalleryGroupBy = {
  __typename?: `GalleryGroupBy`;
  id?: Maybe<Array<Maybe<GalleryConnectionId>>>;
  _id?: Maybe<Array<Maybe<GalleryConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<GalleryConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<GalleryConnectionUpdatedAt>>>;
  title?: Maybe<Array<Maybe<GalleryConnectionTitle>>>;
  slug?: Maybe<Array<Maybe<GalleryConnectionSlug>>>;
  description?: Maybe<Array<Maybe<GalleryConnectionDescription>>>;
  featured_image?: Maybe<Array<Maybe<GalleryConnectionFeatured_Image>>>;
  status?: Maybe<Array<Maybe<GalleryConnectionStatus>>>;
  nsfw?: Maybe<Array<Maybe<GalleryConnectionNsfw>>>;
};

export type GalleryConnectionId = {
  __typename?: `GalleryConnectionId`;
  key?: Maybe<Scalars[`ID`]>;
  connection?: Maybe<GalleryConnection>;
};

export type GalleryConnection_Id = {
  __typename?: `GalleryConnection_id`;
  key?: Maybe<Scalars[`ID`]>;
  connection?: Maybe<GalleryConnection>;
};

export type GalleryConnectionCreatedAt = {
  __typename?: `GalleryConnectionCreatedAt`;
  key?: Maybe<Scalars[`DateTime`]>;
  connection?: Maybe<GalleryConnection>;
};

export type GalleryConnectionUpdatedAt = {
  __typename?: `GalleryConnectionUpdatedAt`;
  key?: Maybe<Scalars[`DateTime`]>;
  connection?: Maybe<GalleryConnection>;
};

export type GalleryConnectionTitle = {
  __typename?: `GalleryConnectionTitle`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<GalleryConnection>;
};

export type GalleryConnectionSlug = {
  __typename?: `GalleryConnectionSlug`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<GalleryConnection>;
};

export type GalleryConnectionDescription = {
  __typename?: `GalleryConnectionDescription`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<GalleryConnection>;
};

export type GalleryConnectionFeatured_Image = {
  __typename?: `GalleryConnectionFeatured_image`;
  key?: Maybe<Scalars[`ID`]>;
  connection?: Maybe<GalleryConnection>;
};

export type GalleryConnectionStatus = {
  __typename?: `GalleryConnectionStatus`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<GalleryConnection>;
};

export type GalleryConnectionNsfw = {
  __typename?: `GalleryConnectionNsfw`;
  key?: Maybe<Scalars[`Boolean`]>;
  connection?: Maybe<GalleryConnection>;
};

export type GalleryInput = {
  title?: Maybe<Scalars[`String`]>;
  slug?: Maybe<Scalars[`String`]>;
  description?: Maybe<Scalars[`String`]>;
  featured_image?: Maybe<Scalars[`ID`]>;
  gallery_categories?: Maybe<Array<Maybe<Scalars[`ID`]>>>;
  gallery_tags?: Maybe<Array<Maybe<Scalars[`ID`]>>>;
  roles?: Maybe<Array<Maybe<Scalars[`ID`]>>>;
  gallery_images?: Maybe<Array<Maybe<Scalars[`ID`]>>>;
  status?: Maybe<Enum_Gallery_Status>;
  nsfw?: Maybe<Scalars[`Boolean`]>;
  created_by?: Maybe<Scalars[`ID`]>;
  updated_by?: Maybe<Scalars[`ID`]>;
};

export type EditGalleryInput = {
  title?: Maybe<Scalars[`String`]>;
  slug?: Maybe<Scalars[`String`]>;
  description?: Maybe<Scalars[`String`]>;
  featured_image?: Maybe<Scalars[`ID`]>;
  gallery_categories?: Maybe<Array<Maybe<Scalars[`ID`]>>>;
  gallery_tags?: Maybe<Array<Maybe<Scalars[`ID`]>>>;
  roles?: Maybe<Array<Maybe<Scalars[`ID`]>>>;
  gallery_images?: Maybe<Array<Maybe<Scalars[`ID`]>>>;
  status?: Maybe<Enum_Gallery_Status>;
  nsfw?: Maybe<Scalars[`Boolean`]>;
  created_by?: Maybe<Scalars[`ID`]>;
  updated_by?: Maybe<Scalars[`ID`]>;
};

export type CreateGalleryInput = {
  data?: Maybe<GalleryInput>;
};

export type CreateGalleryPayload = {
  __typename?: `createGalleryPayload`;
  gallery?: Maybe<Gallery>;
};

export type UpdateGalleryInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditGalleryInput>;
};

export type UpdateGalleryPayload = {
  __typename?: `updateGalleryPayload`;
  gallery?: Maybe<Gallery>;
};

export type DeleteGalleryInput = {
  where?: Maybe<InputId>;
};

export type DeleteGalleryPayload = {
  __typename?: `deleteGalleryPayload`;
  gallery?: Maybe<Gallery>;
};
