import { Maybe, PublicationState, Scalars } from '.';
import { Article, ArticleConnection } from './Article';
import { ArticleCategory, ArticleCategoryConnection } from './ArticleCategory';
import { ArticleTags, ArticleTagsConnection } from './ArticleTags';
import { Gallery, GalleryConnection } from './Gallery';
import {
  GalleryCategories,
  GalleryCategoriesConnection,
} from './GalleryCategory';
import { GalleryImage, GalleryImageConnection } from './GalleryImage';
import { GalleryTags, GalleryTagsConnection } from './GalleryTag';
import { Gardens, GardensConnection } from './Garden';
import { Manufacturer, ManufacturerConnection } from './Manufacturer';
import { Model, ModelConnection } from './Model';
import { ModelTags, ModelTagsConnection } from './ModelTag';
import { Scale, ScaleConnection } from './Scale';
import { UploadFile, UploadFileConnection } from './UploadFile';
import {
  UsersPermissionsRole,
  UsersPermissionsRoleConnection,
  UsersPermissionsUser,
  UsersPermissionsUserConnection,
  UsersPermissionsMe,
} from './UsersPermissions';

export type Query = {
  __typename?: `Query`;
  articleCategory?: Maybe<ArticleCategory>;
  articleCategories?: Maybe<Array<Maybe<ArticleCategory>>>;
  articleCategoriesConnection?: Maybe<ArticleCategoryConnection>;
  articleTag?: Maybe<ArticleTags>;
  articleTags?: Maybe<Array<Maybe<ArticleTags>>>;
  articleTagsConnection?: Maybe<ArticleTagsConnection>;
  article?: Maybe<Article>;
  articles?: Maybe<Array<Maybe<Article>>>;
  articlesConnection?: Maybe<ArticleConnection>;
  galleryCategory?: Maybe<GalleryCategories>;
  galleryCategories?: Maybe<Array<Maybe<GalleryCategories>>>;
  galleryCategoriesConnection?: Maybe<GalleryCategoriesConnection>;
  galleryImage?: Maybe<GalleryImage>;
  galleryImages?: Maybe<Array<Maybe<GalleryImage>>>;
  galleryImagesConnection?: Maybe<GalleryImageConnection>;
  galleryTag?: Maybe<GalleryTags>;
  galleryTags?: Maybe<Array<Maybe<GalleryTags>>>;
  galleryTagsConnection?: Maybe<GalleryTagsConnection>;
  gallery?: Maybe<Gallery>;
  galleries?: Maybe<Array<Maybe<Gallery>>>;
  galleriesConnection?: Maybe<GalleryConnection>;
  garden?: Maybe<Gardens>;
  gardens?: Maybe<Array<Maybe<Gardens>>>;
  gardensConnection?: Maybe<GardensConnection>;
  manufacturer?: Maybe<Manufacturer>;
  manufacturers?: Maybe<Array<Maybe<Manufacturer>>>;
  manufacturersConnection?: Maybe<ManufacturerConnection>;
  modelTag?: Maybe<ModelTags>;
  modelTags?: Maybe<Array<Maybe<ModelTags>>>;
  modelTagsConnection?: Maybe<ModelTagsConnection>;
  model?: Maybe<Model>;
  models?: Maybe<Array<Maybe<Model>>>;
  modelsConnection?: Maybe<ModelConnection>;
  scale?: Maybe<Scale>;
  scales?: Maybe<Array<Maybe<Scale>>>;
  scalesConnection?: Maybe<ScaleConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  me?: Maybe<UsersPermissionsMe>;
};

export type QueryArticleCategoryArgs = {
  id: Scalars[`ID`];
  publicationState?: Maybe<PublicationState>;
};

export type QueryArticleCategoriesArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryArticleCategoriesConnectionArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
};

export type QueryArticleTagArgs = {
  id: Scalars[`ID`];
  publicationState?: Maybe<PublicationState>;
};

export type QueryArticleTagsArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryArticleTagsConnectionArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
};

export type QueryArticleArgs = {
  id: Scalars[`ID`];
  publicationState?: Maybe<PublicationState>;
};

export type QueryArticlesArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryArticlesConnectionArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
};

export type QueryGalleryCategoryArgs = {
  id: Scalars[`ID`];
  publicationState?: Maybe<PublicationState>;
};

export type QueryGalleryCategoriesArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryGalleryCategoriesConnectionArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
};

export type QueryGalleryImageArgs = {
  id: Scalars[`ID`];
  publicationState?: Maybe<PublicationState>;
};

export type QueryGalleryImagesArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryGalleryImagesConnectionArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
};

export type QueryGalleryTagArgs = {
  id: Scalars[`ID`];
  publicationState?: Maybe<PublicationState>;
};

export type QueryGalleryTagsArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryGalleryTagsConnectionArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
};

export type QueryGalleryArgs = {
  id: Scalars[`ID`];
  publicationState?: Maybe<PublicationState>;
};

export type QueryGalleriesArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryGalleriesConnectionArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
};

export type QueryGardenArgs = {
  id: Scalars[`ID`];
  publicationState?: Maybe<PublicationState>;
};

export type QueryGardensArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryGardensConnectionArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
};

export type QueryManufacturerArgs = {
  id: Scalars[`ID`];
  publicationState?: Maybe<PublicationState>;
};

export type QueryManufacturersArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryManufacturersConnectionArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
};

export type QueryModelTagArgs = {
  id: Scalars[`ID`];
  publicationState?: Maybe<PublicationState>;
};

export type QueryModelTagsArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryModelTagsConnectionArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
};

export type QueryModelArgs = {
  id: Scalars[`ID`];
  publicationState?: Maybe<PublicationState>;
};

export type QueryModelsArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryModelsConnectionArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
};

export type QueryScaleArgs = {
  id: Scalars[`ID`];
  publicationState?: Maybe<PublicationState>;
};

export type QueryScalesArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryScalesConnectionArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
};

export type QueryFilesArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
};

export type QueryRoleArgs = {
  id: Scalars[`ID`];
  publicationState?: Maybe<PublicationState>;
};

export type QueryRolesArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
};

export type QueryUserArgs = {
  id: Scalars[`ID`];
  publicationState?: Maybe<PublicationState>;
};

export type QueryUsersArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
};
