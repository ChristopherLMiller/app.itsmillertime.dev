import { Scalars, Maybe, InputId } from '.';
import { Gallery } from './Gallery';
import {
  ComponentGlobalShare,
  ComponentGlobalSell,
  ComponentGlobalShareInput,
  ComponentGlobalSellInput,
  EditComponentGlobalShareInput,
  EditComponentGlobalSellInput,
} from './GlobalComponents';
import { UploadFile } from './UploadFile';

export type GalleryImage = {
  __typename?: `GalleryImage`;
  id: Scalars[`ID`];
  _id: Scalars[`ID`];
  createdAt: Scalars[`DateTime`];
  updatedAt: Scalars[`DateTime`];
  caption?: Maybe<Scalars[`String`]>;
  slug?: Maybe<Scalars[`String`]>;
  watermarked?: Maybe<UploadFile>;
  clean?: Maybe<UploadFile>;
  share?: Maybe<ComponentGlobalShare>;
  sell?: Maybe<ComponentGlobalSell>;
  galleries?: Maybe<Array<Maybe<Gallery>>>;
};

export type GalleryImageGalleriesArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
};

export type GalleryImageConnection = {
  __typename?: `GalleryImageConnection`;
  values?: Maybe<Array<Maybe<GalleryImage>>>;
  groupBy?: Maybe<GalleryImageGroupBy>;
  aggregate?: Maybe<GalleryImageAggregator>;
};

export type GalleryImageAggregator = {
  __typename?: `GalleryImageAggregator`;
  count?: Maybe<Scalars[`Int`]>;
  totalCount?: Maybe<Scalars[`Int`]>;
};

export type GalleryImageGroupBy = {
  __typename?: `GalleryImageGroupBy`;
  id?: Maybe<Array<Maybe<GalleryImageConnectionId>>>;
  _id?: Maybe<Array<Maybe<GalleryImageConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<GalleryImageConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<GalleryImageConnectionUpdatedAt>>>;
  caption?: Maybe<Array<Maybe<GalleryImageConnectionCaption>>>;
  slug?: Maybe<Array<Maybe<GalleryImageConnectionSlug>>>;
  watermarked?: Maybe<Array<Maybe<GalleryImageConnectionWatermarked>>>;
  clean?: Maybe<Array<Maybe<GalleryImageConnectionClean>>>;
  share?: Maybe<Array<Maybe<GalleryImageConnectionShare>>>;
  sell?: Maybe<Array<Maybe<GalleryImageConnectionSell>>>;
};

export type GalleryImageConnectionId = {
  __typename?: `GalleryImageConnectionId`;
  key?: Maybe<Scalars[`ID`]>;
  connection?: Maybe<GalleryImageConnection>;
};

export type GalleryImageConnection_Id = {
  __typename?: `GalleryImageConnection_id`;
  key?: Maybe<Scalars[`ID`]>;
  connection?: Maybe<GalleryImageConnection>;
};

export type GalleryImageConnectionCreatedAt = {
  __typename?: `GalleryImageConnectionCreatedAt`;
  key?: Maybe<Scalars[`DateTime`]>;
  connection?: Maybe<GalleryImageConnection>;
};

export type GalleryImageConnectionUpdatedAt = {
  __typename?: `GalleryImageConnectionUpdatedAt`;
  key?: Maybe<Scalars[`DateTime`]>;
  connection?: Maybe<GalleryImageConnection>;
};

export type GalleryImageConnectionCaption = {
  __typename?: `GalleryImageConnectionCaption`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<GalleryImageConnection>;
};

export type GalleryImageConnectionSlug = {
  __typename?: `GalleryImageConnectionSlug`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<GalleryImageConnection>;
};

export type GalleryImageConnectionWatermarked = {
  __typename?: `GalleryImageConnectionWatermarked`;
  key?: Maybe<Scalars[`ID`]>;
  connection?: Maybe<GalleryImageConnection>;
};

export type GalleryImageConnectionClean = {
  __typename?: `GalleryImageConnectionClean`;
  key?: Maybe<Scalars[`ID`]>;
  connection?: Maybe<GalleryImageConnection>;
};

export type GalleryImageConnectionShare = {
  __typename?: `GalleryImageConnectionShare`;
  key?: Maybe<Scalars[`ID`]>;
  connection?: Maybe<GalleryImageConnection>;
};

export type GalleryImageConnectionSell = {
  __typename?: `GalleryImageConnectionSell`;
  key?: Maybe<Scalars[`ID`]>;
  connection?: Maybe<GalleryImageConnection>;
};

export type GalleryImageInput = {
  caption?: Maybe<Scalars[`String`]>;
  slug?: Maybe<Scalars[`String`]>;
  watermarked?: Maybe<Scalars[`ID`]>;
  clean?: Maybe<Scalars[`ID`]>;
  galleries?: Maybe<Array<Maybe<Scalars[`ID`]>>>;
  share?: Maybe<ComponentGlobalShareInput>;
  sell?: Maybe<ComponentGlobalSellInput>;
  created_by?: Maybe<Scalars[`ID`]>;
  updated_by?: Maybe<Scalars[`ID`]>;
};

export type EditGalleryImageInput = {
  caption?: Maybe<Scalars[`String`]>;
  slug?: Maybe<Scalars[`String`]>;
  watermarked?: Maybe<Scalars[`ID`]>;
  clean?: Maybe<Scalars[`ID`]>;
  galleries?: Maybe<Array<Maybe<Scalars[`ID`]>>>;
  share?: Maybe<EditComponentGlobalShareInput>;
  sell?: Maybe<EditComponentGlobalSellInput>;
  created_by?: Maybe<Scalars[`ID`]>;
  updated_by?: Maybe<Scalars[`ID`]>;
};

export type CreateGalleryImageInput = {
  data?: Maybe<GalleryImageInput>;
};

export type CreateGalleryImagePayload = {
  __typename?: `createGalleryImagePayload`;
  galleryImage?: Maybe<GalleryImage>;
};

export type UpdateGalleryImageInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditGalleryImageInput>;
};

export type UpdateGalleryImagePayload = {
  __typename?: `updateGalleryImagePayload`;
  galleryImage?: Maybe<GalleryImage>;
};

export type DeleteGalleryImageInput = {
  where?: Maybe<InputId>;
};

export type DeleteGalleryImagePayload = {
  __typename?: `deleteGalleryImagePayload`;
  galleryImage?: Maybe<GalleryImage>;
};
