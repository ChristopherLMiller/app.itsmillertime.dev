/* eslint-disable no-unused-vars */
import { Scalars, Maybe, InputId } from '.';
import {
  ComponentGlobalSeo,
  ComponentGlobalSeoInput,
  EditComponentGlobalSeoInput,
} from './GlobalComponents';
import { Manufacturer } from './Manufacturer';
import { ModelTags } from './ModelTag';
import { Scale } from './Scale';
import { UploadFile } from './UploadFile';
import { UsersPermissionsRole, UsersPermissionsUser } from './UsersPermissions';

// eslint-disable-next-line no-shadow
export enum Enum_Model_Status {
  Public = `PUBLIC`,
  Private = `PRIVATE`,
  Protected = `PROTECTED`,
}

export type Model = {
  __typename?: `Model`;
  id: Scalars[`ID`];
  _id: Scalars[`ID`];
  createdAt: Scalars[`DateTime`];
  updatedAt: Scalars[`DateTime`];
  title?: Maybe<Scalars[`String`]>;
  slug?: Maybe<Scalars[`String`]>;
  content?: Maybe<Scalars[`String`]>;
  completed?: Maybe<Scalars[`Boolean`]>;
  kit_number?: Maybe<Scalars[`String`]>;
  year_released?: Maybe<Scalars[`Int`]>;
  clockify_project_id?: Maybe<Scalars[`String`]>;
  scalemates_link?: Maybe<Scalars[`String`]>;
  scale?: Maybe<Scale>;
  manufacturer?: Maybe<Manufacturer>;
  featured_image?: Maybe<UploadFile>;
  completed_at?: Maybe<Scalars[`Date`]>;
  youtube_video?: Maybe<Scalars[`String`]>;
  status?: Maybe<Enum_Model_Status>;
  SEO?: Maybe<ComponentGlobalSeo>;
  published_at?: Maybe<Scalars[`DateTime`]>;
  model_tags?: Maybe<Array<Maybe<ModelTags>>>;
  images?: Maybe<Array<Maybe<UploadFile>>>;
  users_permissions_roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  users_permissions_users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type ModelModel_TagsArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
};

export type ModelImagesArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
};

export type ModelUsers_Permissions_RolesArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
};

export type ModelUsers_Permissions_UsersArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
};

export type ModelConnection = {
  __typename?: `ModelConnection`;
  values?: Maybe<Array<Maybe<Model>>>;
  groupBy?: Maybe<ModelGroupBy>;
  aggregate?: Maybe<ModelAggregator>;
};

export type ModelAggregator = {
  __typename?: `ModelAggregator`;
  count?: Maybe<Scalars[`Int`]>;
  totalCount?: Maybe<Scalars[`Int`]>;
  sum?: Maybe<ModelAggregatorSum>;
  avg?: Maybe<ModelAggregatorAvg>;
  min?: Maybe<ModelAggregatorMin>;
  max?: Maybe<ModelAggregatorMax>;
};

export type ModelAggregatorSum = {
  __typename?: `ModelAggregatorSum`;
  year_released?: Maybe<Scalars[`Float`]>;
};

export type ModelAggregatorAvg = {
  __typename?: `ModelAggregatorAvg`;
  year_released?: Maybe<Scalars[`Float`]>;
};

export type ModelAggregatorMin = {
  __typename?: `ModelAggregatorMin`;
  year_released?: Maybe<Scalars[`Float`]>;
};

export type ModelAggregatorMax = {
  __typename?: `ModelAggregatorMax`;
  year_released?: Maybe<Scalars[`Float`]>;
};

export type ModelGroupBy = {
  __typename?: `ModelGroupBy`;
  id?: Maybe<Array<Maybe<ModelConnectionId>>>;
  _id?: Maybe<Array<Maybe<ModelConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<ModelConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<ModelConnectionUpdatedAt>>>;
  title?: Maybe<Array<Maybe<ModelConnectionTitle>>>;
  slug?: Maybe<Array<Maybe<ModelConnectionSlug>>>;
  content?: Maybe<Array<Maybe<ModelConnectionContent>>>;
  completed?: Maybe<Array<Maybe<ModelConnectionCompleted>>>;
  kit_number?: Maybe<Array<Maybe<ModelConnectionKit_Number>>>;
  year_released?: Maybe<Array<Maybe<ModelConnectionYear_Released>>>;
  clockify_project_id?: Maybe<Array<Maybe<ModelConnectionClockify_Project_Id>>>;
  scalemates_link?: Maybe<Array<Maybe<ModelConnectionScalemates_Link>>>;
  scale?: Maybe<Array<Maybe<ModelConnectionScale>>>;
  manufacturer?: Maybe<Array<Maybe<ModelConnectionManufacturer>>>;
  featured_image?: Maybe<Array<Maybe<ModelConnectionFeatured_Image>>>;
  completed_at?: Maybe<Array<Maybe<ModelConnectionCompleted_At>>>;
  youtube_video?: Maybe<Array<Maybe<ModelConnectionYoutube_Video>>>;
  status?: Maybe<Array<Maybe<ModelConnectionStatus>>>;
  SEO?: Maybe<Array<Maybe<ModelConnectionSeo>>>;
  published_at?: Maybe<Array<Maybe<ModelConnectionPublished_At>>>;
};

export type ModelConnectionId = {
  __typename?: `ModelConnectionId`;
  key?: Maybe<Scalars[`ID`]>;
  connection?: Maybe<ModelConnection>;
};

export type ModelConnection_Id = {
  __typename?: `ModelConnection_id`;
  key?: Maybe<Scalars[`ID`]>;
  connection?: Maybe<ModelConnection>;
};

export type ModelConnectionCreatedAt = {
  __typename?: `ModelConnectionCreatedAt`;
  key?: Maybe<Scalars[`DateTime`]>;
  connection?: Maybe<ModelConnection>;
};

export type ModelConnectionUpdatedAt = {
  __typename?: `ModelConnectionUpdatedAt`;
  key?: Maybe<Scalars[`DateTime`]>;
  connection?: Maybe<ModelConnection>;
};

export type ModelConnectionTitle = {
  __typename?: `ModelConnectionTitle`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<ModelConnection>;
};

export type ModelConnectionSlug = {
  __typename?: `ModelConnectionSlug`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<ModelConnection>;
};

export type ModelConnectionContent = {
  __typename?: `ModelConnectionContent`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<ModelConnection>;
};

export type ModelConnectionCompleted = {
  __typename?: `ModelConnectionCompleted`;
  key?: Maybe<Scalars[`Boolean`]>;
  connection?: Maybe<ModelConnection>;
};

export type ModelConnectionKit_Number = {
  __typename?: `ModelConnectionKit_number`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<ModelConnection>;
};

export type ModelConnectionYear_Released = {
  __typename?: `ModelConnectionYear_released`;
  key?: Maybe<Scalars[`Int`]>;
  connection?: Maybe<ModelConnection>;
};

export type ModelConnectionClockify_Project_Id = {
  __typename?: `ModelConnectionClockify_project_id`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<ModelConnection>;
};

export type ModelConnectionScalemates_Link = {
  __typename?: `ModelConnectionScalemates_link`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<ModelConnection>;
};

export type ModelConnectionScale = {
  __typename?: `ModelConnectionScale`;
  key?: Maybe<Scalars[`ID`]>;
  connection?: Maybe<ModelConnection>;
};

export type ModelConnectionManufacturer = {
  __typename?: `ModelConnectionManufacturer`;
  key?: Maybe<Scalars[`ID`]>;
  connection?: Maybe<ModelConnection>;
};

export type ModelConnectionFeatured_Image = {
  __typename?: `ModelConnectionFeatured_image`;
  key?: Maybe<Scalars[`ID`]>;
  connection?: Maybe<ModelConnection>;
};

export type ModelConnectionCompleted_At = {
  __typename?: `ModelConnectionCompleted_at`;
  key?: Maybe<Scalars[`ID`]>;
  connection?: Maybe<ModelConnection>;
};

export type ModelConnectionYoutube_Video = {
  __typename?: `ModelConnectionYoutube_video`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<ModelConnection>;
};

export type ModelConnectionStatus = {
  __typename?: `ModelConnectionStatus`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<ModelConnection>;
};

export type ModelConnectionSeo = {
  __typename?: `ModelConnectionSEO`;
  key?: Maybe<Scalars[`ID`]>;
  connection?: Maybe<ModelConnection>;
};

export type ModelConnectionPublished_At = {
  __typename?: `ModelConnectionPublished_at`;
  key?: Maybe<Scalars[`DateTime`]>;
  connection?: Maybe<ModelConnection>;
};

export type ModelInput = {
  title?: Maybe<Scalars[`String`]>;
  slug?: Maybe<Scalars[`String`]>;
  content?: Maybe<Scalars[`String`]>;
  completed?: Maybe<Scalars[`Boolean`]>;
  kit_number?: Maybe<Scalars[`String`]>;
  year_released?: Maybe<Scalars[`Int`]>;
  clockify_project_id?: Maybe<Scalars[`String`]>;
  scalemates_link?: Maybe<Scalars[`String`]>;
  scale?: Maybe<Scalars[`ID`]>;
  manufacturer?: Maybe<Scalars[`ID`]>;
  featured_image?: Maybe<Scalars[`ID`]>;
  completed_at?: Maybe<Scalars[`Date`]>;
  youtube_video?: Maybe<Scalars[`String`]>;
  model_tags?: Maybe<Array<Maybe<Scalars[`ID`]>>>;
  status?: Maybe<Enum_Model_Status>;
  images?: Maybe<Array<Maybe<Scalars[`ID`]>>>;
  users_permissions_roles?: Maybe<Array<Maybe<Scalars[`ID`]>>>;
  users_permissions_users?: Maybe<Array<Maybe<Scalars[`ID`]>>>;
  SEO?: Maybe<ComponentGlobalSeoInput>;
  published_at?: Maybe<Scalars[`DateTime`]>;
  created_by?: Maybe<Scalars[`ID`]>;
  updated_by?: Maybe<Scalars[`ID`]>;
};

export type EditModelInput = {
  title?: Maybe<Scalars[`String`]>;
  slug?: Maybe<Scalars[`String`]>;
  content?: Maybe<Scalars[`String`]>;
  completed?: Maybe<Scalars[`Boolean`]>;
  kit_number?: Maybe<Scalars[`String`]>;
  year_released?: Maybe<Scalars[`Int`]>;
  clockify_project_id?: Maybe<Scalars[`String`]>;
  scalemates_link?: Maybe<Scalars[`String`]>;
  scale?: Maybe<Scalars[`ID`]>;
  manufacturer?: Maybe<Scalars[`ID`]>;
  featured_image?: Maybe<Scalars[`ID`]>;
  completed_at?: Maybe<Scalars[`Date`]>;
  youtube_video?: Maybe<Scalars[`String`]>;
  model_tags?: Maybe<Array<Maybe<Scalars[`ID`]>>>;
  status?: Maybe<Enum_Model_Status>;
  images?: Maybe<Array<Maybe<Scalars[`ID`]>>>;
  users_permissions_roles?: Maybe<Array<Maybe<Scalars[`ID`]>>>;
  users_permissions_users?: Maybe<Array<Maybe<Scalars[`ID`]>>>;
  SEO?: Maybe<EditComponentGlobalSeoInput>;
  published_at?: Maybe<Scalars[`DateTime`]>;
  created_by?: Maybe<Scalars[`ID`]>;
  updated_by?: Maybe<Scalars[`ID`]>;
};

export type CreateModelInput = {
  data?: Maybe<ModelInput>;
};

export type CreateModelPayload = {
  __typename?: `createModelPayload`;
  model?: Maybe<Model>;
};

export type UpdateModelInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditModelInput>;
};

export type UpdateModelPayload = {
  __typename?: `updateModelPayload`;
  model?: Maybe<Model>;
};

export type DeleteModelInput = {
  where?: Maybe<InputId>;
};

export type DeleteModelPayload = {
  __typename?: `deleteModelPayload`;
  model?: Maybe<Model>;
};
