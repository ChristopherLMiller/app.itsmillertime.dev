export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  firstname: Scalars['String'];
  id: Scalars['ID'];
  lastname: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};

export type Article = {
  __typename?: 'Article';
  _id: Scalars['ID'];
  article_tags?: Maybe<Array<Maybe<ArticleTags>>>;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  seo?: Maybe<ComponentGlobalSeo>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type ArticleArticle_TagsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ArticleAggregator = {
  __typename?: 'ArticleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ArticleConnection = {
  __typename?: 'ArticleConnection';
  aggregate?: Maybe<ArticleAggregator>;
  groupBy?: Maybe<ArticleGroupBy>;
  values?: Maybe<Array<Maybe<Article>>>;
};

export type ArticleConnectionContent = {
  __typename?: 'ArticleConnectionContent';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionCreatedAt = {
  __typename?: 'ArticleConnectionCreatedAt';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ArticleConnectionId = {
  __typename?: 'ArticleConnectionId';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ArticleConnectionPublished_At = {
  __typename?: 'ArticleConnectionPublished_at';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ArticleConnectionSeo = {
  __typename?: 'ArticleConnectionSeo';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ArticleConnectionSlug = {
  __typename?: 'ArticleConnectionSlug';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionTitle = {
  __typename?: 'ArticleConnectionTitle';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionUpdatedAt = {
  __typename?: 'ArticleConnectionUpdatedAt';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ArticleConnection_Id = {
  __typename?: 'ArticleConnection_id';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ArticleGroupBy = {
  __typename?: 'ArticleGroupBy';
  _id?: Maybe<Array<Maybe<ArticleConnection_Id>>>;
  content?: Maybe<Array<Maybe<ArticleConnectionContent>>>;
  createdAt?: Maybe<Array<Maybe<ArticleConnectionCreatedAt>>>;
  id?: Maybe<Array<Maybe<ArticleConnectionId>>>;
  published_at?: Maybe<Array<Maybe<ArticleConnectionPublished_At>>>;
  seo?: Maybe<Array<Maybe<ArticleConnectionSeo>>>;
  slug?: Maybe<Array<Maybe<ArticleConnectionSlug>>>;
  title?: Maybe<Array<Maybe<ArticleConnectionTitle>>>;
  updatedAt?: Maybe<Array<Maybe<ArticleConnectionUpdatedAt>>>;
};

export type ArticleInput = {
  article_tags?: Maybe<Array<Maybe<Scalars['ID']>>>;
  content: Scalars['String'];
  created_by?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  seo: ComponentGlobalSeoInput;
  slug: Scalars['String'];
  title: Scalars['String'];
  updated_by?: Maybe<Scalars['ID']>;
};

export type ArticleTagInput = {
  created_by?: Maybe<Scalars['ID']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updated_by?: Maybe<Scalars['ID']>;
};

export type ArticleTags = {
  __typename?: 'ArticleTags';
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ArticleTagsAggregator = {
  __typename?: 'ArticleTagsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ArticleTagsConnection = {
  __typename?: 'ArticleTagsConnection';
  aggregate?: Maybe<ArticleTagsAggregator>;
  groupBy?: Maybe<ArticleTagsGroupBy>;
  values?: Maybe<Array<Maybe<ArticleTags>>>;
};

export type ArticleTagsConnectionCreatedAt = {
  __typename?: 'ArticleTagsConnectionCreatedAt';
  connection?: Maybe<ArticleTagsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ArticleTagsConnectionId = {
  __typename?: 'ArticleTagsConnectionId';
  connection?: Maybe<ArticleTagsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ArticleTagsConnectionSlug = {
  __typename?: 'ArticleTagsConnectionSlug';
  connection?: Maybe<ArticleTagsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleTagsConnectionTitle = {
  __typename?: 'ArticleTagsConnectionTitle';
  connection?: Maybe<ArticleTagsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleTagsConnectionUpdatedAt = {
  __typename?: 'ArticleTagsConnectionUpdatedAt';
  connection?: Maybe<ArticleTagsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ArticleTagsConnection_Id = {
  __typename?: 'ArticleTagsConnection_id';
  connection?: Maybe<ArticleTagsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ArticleTagsGroupBy = {
  __typename?: 'ArticleTagsGroupBy';
  _id?: Maybe<Array<Maybe<ArticleTagsConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<ArticleTagsConnectionCreatedAt>>>;
  id?: Maybe<Array<Maybe<ArticleTagsConnectionId>>>;
  slug?: Maybe<Array<Maybe<ArticleTagsConnectionSlug>>>;
  title?: Maybe<Array<Maybe<ArticleTagsConnectionTitle>>>;
  updatedAt?: Maybe<Array<Maybe<ArticleTagsConnectionUpdatedAt>>>;
};

export type ComponentGlobalSell = {
  __typename?: 'ComponentGlobalSell';
  _id: Scalars['ID'];
  id: Scalars['ID'];
  price: Scalars['Int'];
};

export type ComponentGlobalSellInput = {
  price: Scalars['Int'];
};

export type ComponentGlobalSeo = {
  __typename?: 'ComponentGlobalSeo';
  _id: Scalars['ID'];
  description?: Maybe<Scalars['String']>;
  featured_image?: Maybe<UploadFile>;
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type ComponentGlobalSeoInput = {
  description?: Maybe<Scalars['String']>;
  featured_image?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
};

export type ComponentGlobalShare = {
  __typename?: 'ComponentGlobalShare';
  _id: Scalars['ID'];
  facebook?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  instagram?: Maybe<Scalars['Boolean']>;
  twitter?: Maybe<Scalars['Boolean']>;
};

export type ComponentGlobalShareInput = {
  facebook?: Maybe<Scalars['Boolean']>;
  instagram?: Maybe<Scalars['Boolean']>;
  twitter?: Maybe<Scalars['Boolean']>;
};

export enum Enum_Gallery_Status {
  Archived = 'ARCHIVED',
  Draft = 'DRAFT',
  Private = 'PRIVATE',
  Protected = 'PROTECTED',
  Public = 'PUBLIC'
}

export enum Enum_Model_Status {
  Private = 'PRIVATE',
  Protected = 'PROTECTED',
  Public = 'PUBLIC'
}

export type FileInfoInput = {
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type FileInput = {
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  size: Scalars['Float'];
  updated_by?: Maybe<Scalars['ID']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type Gallery = {
  __typename?: 'Gallery';
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  featured_image?: Maybe<UploadFile>;
  gallery_categories?: Maybe<Array<Maybe<GalleryCategories>>>;
  gallery_images?: Maybe<Array<Maybe<GalleryImage>>>;
  gallery_tags?: Maybe<Array<Maybe<GalleryTags>>>;
  id: Scalars['ID'];
  meta?: Maybe<Scalars['String']>;
  nsfw?: Maybe<Scalars['Boolean']>;
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  slug?: Maybe<Scalars['String']>;
  status: Enum_Gallery_Status;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  users_permissions_users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type GalleryGallery_CategoriesArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type GalleryGallery_ImagesArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type GalleryGallery_TagsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type GalleryRolesArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type GalleryUsers_Permissions_UsersArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type GalleryAggregator = {
  __typename?: 'GalleryAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type GalleryCategories = {
  __typename?: 'GalleryCategories';
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type GalleryCategoriesAggregator = {
  __typename?: 'GalleryCategoriesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type GalleryCategoriesConnection = {
  __typename?: 'GalleryCategoriesConnection';
  aggregate?: Maybe<GalleryCategoriesAggregator>;
  groupBy?: Maybe<GalleryCategoriesGroupBy>;
  values?: Maybe<Array<Maybe<GalleryCategories>>>;
};

export type GalleryCategoriesConnectionCreatedAt = {
  __typename?: 'GalleryCategoriesConnectionCreatedAt';
  connection?: Maybe<GalleryCategoriesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type GalleryCategoriesConnectionId = {
  __typename?: 'GalleryCategoriesConnectionId';
  connection?: Maybe<GalleryCategoriesConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type GalleryCategoriesConnectionSlug = {
  __typename?: 'GalleryCategoriesConnectionSlug';
  connection?: Maybe<GalleryCategoriesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type GalleryCategoriesConnectionTitle = {
  __typename?: 'GalleryCategoriesConnectionTitle';
  connection?: Maybe<GalleryCategoriesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type GalleryCategoriesConnectionUpdatedAt = {
  __typename?: 'GalleryCategoriesConnectionUpdatedAt';
  connection?: Maybe<GalleryCategoriesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type GalleryCategoriesConnection_Id = {
  __typename?: 'GalleryCategoriesConnection_id';
  connection?: Maybe<GalleryCategoriesConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type GalleryCategoriesGroupBy = {
  __typename?: 'GalleryCategoriesGroupBy';
  _id?: Maybe<Array<Maybe<GalleryCategoriesConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<GalleryCategoriesConnectionCreatedAt>>>;
  id?: Maybe<Array<Maybe<GalleryCategoriesConnectionId>>>;
  slug?: Maybe<Array<Maybe<GalleryCategoriesConnectionSlug>>>;
  title?: Maybe<Array<Maybe<GalleryCategoriesConnectionTitle>>>;
  updatedAt?: Maybe<Array<Maybe<GalleryCategoriesConnectionUpdatedAt>>>;
};

export type GalleryCategoryInput = {
  created_by?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type GalleryConnection = {
  __typename?: 'GalleryConnection';
  aggregate?: Maybe<GalleryAggregator>;
  groupBy?: Maybe<GalleryGroupBy>;
  values?: Maybe<Array<Maybe<Gallery>>>;
};

export type GalleryConnectionCreatedAt = {
  __typename?: 'GalleryConnectionCreatedAt';
  connection?: Maybe<GalleryConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type GalleryConnectionDescription = {
  __typename?: 'GalleryConnectionDescription';
  connection?: Maybe<GalleryConnection>;
  key?: Maybe<Scalars['String']>;
};

export type GalleryConnectionFeatured_Image = {
  __typename?: 'GalleryConnectionFeatured_image';
  connection?: Maybe<GalleryConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type GalleryConnectionId = {
  __typename?: 'GalleryConnectionId';
  connection?: Maybe<GalleryConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type GalleryConnectionMeta = {
  __typename?: 'GalleryConnectionMeta';
  connection?: Maybe<GalleryConnection>;
  key?: Maybe<Scalars['String']>;
};

export type GalleryConnectionNsfw = {
  __typename?: 'GalleryConnectionNsfw';
  connection?: Maybe<GalleryConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type GalleryConnectionSlug = {
  __typename?: 'GalleryConnectionSlug';
  connection?: Maybe<GalleryConnection>;
  key?: Maybe<Scalars['String']>;
};

export type GalleryConnectionStatus = {
  __typename?: 'GalleryConnectionStatus';
  connection?: Maybe<GalleryConnection>;
  key?: Maybe<Scalars['String']>;
};

export type GalleryConnectionTitle = {
  __typename?: 'GalleryConnectionTitle';
  connection?: Maybe<GalleryConnection>;
  key?: Maybe<Scalars['String']>;
};

export type GalleryConnectionUpdatedAt = {
  __typename?: 'GalleryConnectionUpdatedAt';
  connection?: Maybe<GalleryConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type GalleryConnection_Id = {
  __typename?: 'GalleryConnection_id';
  connection?: Maybe<GalleryConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type GalleryGroupBy = {
  __typename?: 'GalleryGroupBy';
  _id?: Maybe<Array<Maybe<GalleryConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<GalleryConnectionCreatedAt>>>;
  description?: Maybe<Array<Maybe<GalleryConnectionDescription>>>;
  featured_image?: Maybe<Array<Maybe<GalleryConnectionFeatured_Image>>>;
  id?: Maybe<Array<Maybe<GalleryConnectionId>>>;
  meta?: Maybe<Array<Maybe<GalleryConnectionMeta>>>;
  nsfw?: Maybe<Array<Maybe<GalleryConnectionNsfw>>>;
  slug?: Maybe<Array<Maybe<GalleryConnectionSlug>>>;
  status?: Maybe<Array<Maybe<GalleryConnectionStatus>>>;
  title?: Maybe<Array<Maybe<GalleryConnectionTitle>>>;
  updatedAt?: Maybe<Array<Maybe<GalleryConnectionUpdatedAt>>>;
};

export type GalleryImage = {
  __typename?: 'GalleryImage';
  _id: Scalars['ID'];
  caption?: Maybe<Scalars['String']>;
  clean?: Maybe<UploadFile>;
  createdAt: Scalars['DateTime'];
  galleries?: Maybe<Array<Maybe<Gallery>>>;
  id: Scalars['ID'];
  sell?: Maybe<ComponentGlobalSell>;
  share?: Maybe<ComponentGlobalShare>;
  slug?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  watermarked?: Maybe<UploadFile>;
};


export type GalleryImageGalleriesArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type GalleryImageAggregator = {
  __typename?: 'GalleryImageAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type GalleryImageConnection = {
  __typename?: 'GalleryImageConnection';
  aggregate?: Maybe<GalleryImageAggregator>;
  groupBy?: Maybe<GalleryImageGroupBy>;
  values?: Maybe<Array<Maybe<GalleryImage>>>;
};

export type GalleryImageConnectionCaption = {
  __typename?: 'GalleryImageConnectionCaption';
  connection?: Maybe<GalleryImageConnection>;
  key?: Maybe<Scalars['String']>;
};

export type GalleryImageConnectionClean = {
  __typename?: 'GalleryImageConnectionClean';
  connection?: Maybe<GalleryImageConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type GalleryImageConnectionCreatedAt = {
  __typename?: 'GalleryImageConnectionCreatedAt';
  connection?: Maybe<GalleryImageConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type GalleryImageConnectionId = {
  __typename?: 'GalleryImageConnectionId';
  connection?: Maybe<GalleryImageConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type GalleryImageConnectionSell = {
  __typename?: 'GalleryImageConnectionSell';
  connection?: Maybe<GalleryImageConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type GalleryImageConnectionShare = {
  __typename?: 'GalleryImageConnectionShare';
  connection?: Maybe<GalleryImageConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type GalleryImageConnectionSlug = {
  __typename?: 'GalleryImageConnectionSlug';
  connection?: Maybe<GalleryImageConnection>;
  key?: Maybe<Scalars['String']>;
};

export type GalleryImageConnectionUpdatedAt = {
  __typename?: 'GalleryImageConnectionUpdatedAt';
  connection?: Maybe<GalleryImageConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type GalleryImageConnectionWatermarked = {
  __typename?: 'GalleryImageConnectionWatermarked';
  connection?: Maybe<GalleryImageConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type GalleryImageConnection_Id = {
  __typename?: 'GalleryImageConnection_id';
  connection?: Maybe<GalleryImageConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type GalleryImageGroupBy = {
  __typename?: 'GalleryImageGroupBy';
  _id?: Maybe<Array<Maybe<GalleryImageConnection_Id>>>;
  caption?: Maybe<Array<Maybe<GalleryImageConnectionCaption>>>;
  clean?: Maybe<Array<Maybe<GalleryImageConnectionClean>>>;
  createdAt?: Maybe<Array<Maybe<GalleryImageConnectionCreatedAt>>>;
  id?: Maybe<Array<Maybe<GalleryImageConnectionId>>>;
  sell?: Maybe<Array<Maybe<GalleryImageConnectionSell>>>;
  share?: Maybe<Array<Maybe<GalleryImageConnectionShare>>>;
  slug?: Maybe<Array<Maybe<GalleryImageConnectionSlug>>>;
  updatedAt?: Maybe<Array<Maybe<GalleryImageConnectionUpdatedAt>>>;
  watermarked?: Maybe<Array<Maybe<GalleryImageConnectionWatermarked>>>;
};

export type GalleryImageInput = {
  caption?: Maybe<Scalars['String']>;
  clean?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  galleries?: Maybe<Array<Maybe<Scalars['ID']>>>;
  sell?: Maybe<ComponentGlobalSellInput>;
  share?: Maybe<ComponentGlobalShareInput>;
  slug?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
  watermarked?: Maybe<Scalars['ID']>;
};

export type GalleryInput = {
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  featured_image?: Maybe<Scalars['ID']>;
  gallery_categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  gallery_images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  gallery_tags?: Maybe<Array<Maybe<Scalars['ID']>>>;
  meta?: Maybe<Scalars['String']>;
  nsfw?: Maybe<Scalars['Boolean']>;
  roles?: Maybe<Array<Maybe<Scalars['ID']>>>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Enum_Gallery_Status>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
  users_permissions_users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type GalleryTagInput = {
  created_by?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type GalleryTags = {
  __typename?: 'GalleryTags';
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type GalleryTagsAggregator = {
  __typename?: 'GalleryTagsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type GalleryTagsConnection = {
  __typename?: 'GalleryTagsConnection';
  aggregate?: Maybe<GalleryTagsAggregator>;
  groupBy?: Maybe<GalleryTagsGroupBy>;
  values?: Maybe<Array<Maybe<GalleryTags>>>;
};

export type GalleryTagsConnectionCreatedAt = {
  __typename?: 'GalleryTagsConnectionCreatedAt';
  connection?: Maybe<GalleryTagsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type GalleryTagsConnectionId = {
  __typename?: 'GalleryTagsConnectionId';
  connection?: Maybe<GalleryTagsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type GalleryTagsConnectionSlug = {
  __typename?: 'GalleryTagsConnectionSlug';
  connection?: Maybe<GalleryTagsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type GalleryTagsConnectionTitle = {
  __typename?: 'GalleryTagsConnectionTitle';
  connection?: Maybe<GalleryTagsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type GalleryTagsConnectionUpdatedAt = {
  __typename?: 'GalleryTagsConnectionUpdatedAt';
  connection?: Maybe<GalleryTagsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type GalleryTagsConnection_Id = {
  __typename?: 'GalleryTagsConnection_id';
  connection?: Maybe<GalleryTagsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type GalleryTagsGroupBy = {
  __typename?: 'GalleryTagsGroupBy';
  _id?: Maybe<Array<Maybe<GalleryTagsConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<GalleryTagsConnectionCreatedAt>>>;
  id?: Maybe<Array<Maybe<GalleryTagsConnectionId>>>;
  slug?: Maybe<Array<Maybe<GalleryTagsConnectionSlug>>>;
  title?: Maybe<Array<Maybe<GalleryTagsConnectionTitle>>>;
  updatedAt?: Maybe<Array<Maybe<GalleryTagsConnectionUpdatedAt>>>;
};

export type GardenInput = {
  contents: Scalars['String'];
  created_by?: Maybe<Scalars['ID']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updated_by?: Maybe<Scalars['ID']>;
};

export type Gardens = {
  __typename?: 'Gardens';
  _id: Scalars['ID'];
  contents: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type GardensAggregator = {
  __typename?: 'GardensAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type GardensConnection = {
  __typename?: 'GardensConnection';
  aggregate?: Maybe<GardensAggregator>;
  groupBy?: Maybe<GardensGroupBy>;
  values?: Maybe<Array<Maybe<Gardens>>>;
};

export type GardensConnectionContents = {
  __typename?: 'GardensConnectionContents';
  connection?: Maybe<GardensConnection>;
  key?: Maybe<Scalars['String']>;
};

export type GardensConnectionCreatedAt = {
  __typename?: 'GardensConnectionCreatedAt';
  connection?: Maybe<GardensConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type GardensConnectionId = {
  __typename?: 'GardensConnectionId';
  connection?: Maybe<GardensConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type GardensConnectionSlug = {
  __typename?: 'GardensConnectionSlug';
  connection?: Maybe<GardensConnection>;
  key?: Maybe<Scalars['String']>;
};

export type GardensConnectionTitle = {
  __typename?: 'GardensConnectionTitle';
  connection?: Maybe<GardensConnection>;
  key?: Maybe<Scalars['String']>;
};

export type GardensConnectionUpdatedAt = {
  __typename?: 'GardensConnectionUpdatedAt';
  connection?: Maybe<GardensConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type GardensConnection_Id = {
  __typename?: 'GardensConnection_id';
  connection?: Maybe<GardensConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type GardensGroupBy = {
  __typename?: 'GardensGroupBy';
  _id?: Maybe<Array<Maybe<GardensConnection_Id>>>;
  contents?: Maybe<Array<Maybe<GardensConnectionContents>>>;
  createdAt?: Maybe<Array<Maybe<GardensConnectionCreatedAt>>>;
  id?: Maybe<Array<Maybe<GardensConnectionId>>>;
  slug?: Maybe<Array<Maybe<GardensConnectionSlug>>>;
  title?: Maybe<Array<Maybe<GardensConnectionTitle>>>;
  updatedAt?: Maybe<Array<Maybe<GardensConnectionUpdatedAt>>>;
};

export type InputId = {
  id: Scalars['ID'];
};

export type Manufacturer = {
  __typename?: 'Manufacturer';
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ManufacturerAggregator = {
  __typename?: 'ManufacturerAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ManufacturerConnection = {
  __typename?: 'ManufacturerConnection';
  aggregate?: Maybe<ManufacturerAggregator>;
  groupBy?: Maybe<ManufacturerGroupBy>;
  values?: Maybe<Array<Maybe<Manufacturer>>>;
};

export type ManufacturerConnectionCreatedAt = {
  __typename?: 'ManufacturerConnectionCreatedAt';
  connection?: Maybe<ManufacturerConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ManufacturerConnectionId = {
  __typename?: 'ManufacturerConnectionId';
  connection?: Maybe<ManufacturerConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ManufacturerConnectionName = {
  __typename?: 'ManufacturerConnectionName';
  connection?: Maybe<ManufacturerConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ManufacturerConnectionSlug = {
  __typename?: 'ManufacturerConnectionSlug';
  connection?: Maybe<ManufacturerConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ManufacturerConnectionUpdatedAt = {
  __typename?: 'ManufacturerConnectionUpdatedAt';
  connection?: Maybe<ManufacturerConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ManufacturerConnection_Id = {
  __typename?: 'ManufacturerConnection_id';
  connection?: Maybe<ManufacturerConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ManufacturerGroupBy = {
  __typename?: 'ManufacturerGroupBy';
  _id?: Maybe<Array<Maybe<ManufacturerConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<ManufacturerConnectionCreatedAt>>>;
  id?: Maybe<Array<Maybe<ManufacturerConnectionId>>>;
  name?: Maybe<Array<Maybe<ManufacturerConnectionName>>>;
  slug?: Maybe<Array<Maybe<ManufacturerConnectionSlug>>>;
  updatedAt?: Maybe<Array<Maybe<ManufacturerConnectionUpdatedAt>>>;
};

export type ManufacturerInput = {
  created_by?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  updated_by?: Maybe<Scalars['ID']>;
};

export type Model = {
  __typename?: 'Model';
  SEO?: Maybe<ComponentGlobalSeo>;
  _id: Scalars['ID'];
  clockify_project_id?: Maybe<Scalars['String']>;
  completed?: Maybe<Scalars['Boolean']>;
  completed_at?: Maybe<Scalars['Date']>;
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  images?: Maybe<Array<Maybe<UploadFile>>>;
  kit_number?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<Manufacturer>;
  model_tags?: Maybe<Array<Maybe<ModelTags>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  scale?: Maybe<Scale>;
  scalemates_link?: Maybe<Scalars['String']>;
  sharing?: Maybe<ComponentGlobalShare>;
  slug: Scalars['String'];
  status?: Maybe<Enum_Model_Status>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  users_permissions_roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  users_permissions_users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  year_released?: Maybe<Scalars['Int']>;
  youtube_video?: Maybe<Scalars['String']>;
};


export type ModelImagesArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type ModelModel_TagsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type ModelUsers_Permissions_RolesArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type ModelUsers_Permissions_UsersArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ModelAggregator = {
  __typename?: 'ModelAggregator';
  avg?: Maybe<ModelAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ModelAggregatorMax>;
  min?: Maybe<ModelAggregatorMin>;
  sum?: Maybe<ModelAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ModelAggregatorAvg = {
  __typename?: 'ModelAggregatorAvg';
  year_released?: Maybe<Scalars['Float']>;
};

export type ModelAggregatorMax = {
  __typename?: 'ModelAggregatorMax';
  year_released?: Maybe<Scalars['Float']>;
};

export type ModelAggregatorMin = {
  __typename?: 'ModelAggregatorMin';
  year_released?: Maybe<Scalars['Float']>;
};

export type ModelAggregatorSum = {
  __typename?: 'ModelAggregatorSum';
  year_released?: Maybe<Scalars['Float']>;
};

export type ModelConnection = {
  __typename?: 'ModelConnection';
  aggregate?: Maybe<ModelAggregator>;
  groupBy?: Maybe<ModelGroupBy>;
  values?: Maybe<Array<Maybe<Model>>>;
};

export type ModelConnectionClockify_Project_Id = {
  __typename?: 'ModelConnectionClockify_project_id';
  connection?: Maybe<ModelConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ModelConnectionCompleted = {
  __typename?: 'ModelConnectionCompleted';
  connection?: Maybe<ModelConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type ModelConnectionCompleted_At = {
  __typename?: 'ModelConnectionCompleted_at';
  connection?: Maybe<ModelConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ModelConnectionContent = {
  __typename?: 'ModelConnectionContent';
  connection?: Maybe<ModelConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ModelConnectionCreatedAt = {
  __typename?: 'ModelConnectionCreatedAt';
  connection?: Maybe<ModelConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ModelConnectionId = {
  __typename?: 'ModelConnectionId';
  connection?: Maybe<ModelConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ModelConnectionKit_Number = {
  __typename?: 'ModelConnectionKit_number';
  connection?: Maybe<ModelConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ModelConnectionManufacturer = {
  __typename?: 'ModelConnectionManufacturer';
  connection?: Maybe<ModelConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ModelConnectionPublished_At = {
  __typename?: 'ModelConnectionPublished_at';
  connection?: Maybe<ModelConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ModelConnectionSeo = {
  __typename?: 'ModelConnectionSEO';
  connection?: Maybe<ModelConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ModelConnectionScale = {
  __typename?: 'ModelConnectionScale';
  connection?: Maybe<ModelConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ModelConnectionScalemates_Link = {
  __typename?: 'ModelConnectionScalemates_link';
  connection?: Maybe<ModelConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ModelConnectionSharing = {
  __typename?: 'ModelConnectionSharing';
  connection?: Maybe<ModelConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ModelConnectionSlug = {
  __typename?: 'ModelConnectionSlug';
  connection?: Maybe<ModelConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ModelConnectionStatus = {
  __typename?: 'ModelConnectionStatus';
  connection?: Maybe<ModelConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ModelConnectionTitle = {
  __typename?: 'ModelConnectionTitle';
  connection?: Maybe<ModelConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ModelConnectionUpdatedAt = {
  __typename?: 'ModelConnectionUpdatedAt';
  connection?: Maybe<ModelConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ModelConnectionYear_Released = {
  __typename?: 'ModelConnectionYear_released';
  connection?: Maybe<ModelConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type ModelConnectionYoutube_Video = {
  __typename?: 'ModelConnectionYoutube_video';
  connection?: Maybe<ModelConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ModelConnection_Id = {
  __typename?: 'ModelConnection_id';
  connection?: Maybe<ModelConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ModelGroupBy = {
  __typename?: 'ModelGroupBy';
  SEO?: Maybe<Array<Maybe<ModelConnectionSeo>>>;
  _id?: Maybe<Array<Maybe<ModelConnection_Id>>>;
  clockify_project_id?: Maybe<Array<Maybe<ModelConnectionClockify_Project_Id>>>;
  completed?: Maybe<Array<Maybe<ModelConnectionCompleted>>>;
  completed_at?: Maybe<Array<Maybe<ModelConnectionCompleted_At>>>;
  content?: Maybe<Array<Maybe<ModelConnectionContent>>>;
  createdAt?: Maybe<Array<Maybe<ModelConnectionCreatedAt>>>;
  id?: Maybe<Array<Maybe<ModelConnectionId>>>;
  kit_number?: Maybe<Array<Maybe<ModelConnectionKit_Number>>>;
  manufacturer?: Maybe<Array<Maybe<ModelConnectionManufacturer>>>;
  published_at?: Maybe<Array<Maybe<ModelConnectionPublished_At>>>;
  scale?: Maybe<Array<Maybe<ModelConnectionScale>>>;
  scalemates_link?: Maybe<Array<Maybe<ModelConnectionScalemates_Link>>>;
  sharing?: Maybe<Array<Maybe<ModelConnectionSharing>>>;
  slug?: Maybe<Array<Maybe<ModelConnectionSlug>>>;
  status?: Maybe<Array<Maybe<ModelConnectionStatus>>>;
  title?: Maybe<Array<Maybe<ModelConnectionTitle>>>;
  updatedAt?: Maybe<Array<Maybe<ModelConnectionUpdatedAt>>>;
  year_released?: Maybe<Array<Maybe<ModelConnectionYear_Released>>>;
  youtube_video?: Maybe<Array<Maybe<ModelConnectionYoutube_Video>>>;
};

export type ModelInput = {
  SEO?: Maybe<ComponentGlobalSeoInput>;
  clockify_project_id?: Maybe<Scalars['String']>;
  completed?: Maybe<Scalars['Boolean']>;
  completed_at?: Maybe<Scalars['Date']>;
  content?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  kit_number?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<Scalars['ID']>;
  model_tags?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  scale?: Maybe<Scalars['ID']>;
  scalemates_link?: Maybe<Scalars['String']>;
  sharing?: Maybe<ComponentGlobalShareInput>;
  slug: Scalars['String'];
  status?: Maybe<Enum_Model_Status>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
  users_permissions_roles?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users_permissions_users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  year_released?: Maybe<Scalars['Int']>;
  youtube_video?: Maybe<Scalars['String']>;
};

export type ModelTagInput = {
  created_by?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type ModelTags = {
  __typename?: 'ModelTags';
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type ModelTagsAggregator = {
  __typename?: 'ModelTagsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ModelTagsConnection = {
  __typename?: 'ModelTagsConnection';
  aggregate?: Maybe<ModelTagsAggregator>;
  groupBy?: Maybe<ModelTagsGroupBy>;
  values?: Maybe<Array<Maybe<ModelTags>>>;
};

export type ModelTagsConnectionCreatedAt = {
  __typename?: 'ModelTagsConnectionCreatedAt';
  connection?: Maybe<ModelTagsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ModelTagsConnectionId = {
  __typename?: 'ModelTagsConnectionId';
  connection?: Maybe<ModelTagsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ModelTagsConnectionName = {
  __typename?: 'ModelTagsConnectionName';
  connection?: Maybe<ModelTagsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ModelTagsConnectionSlug = {
  __typename?: 'ModelTagsConnectionSlug';
  connection?: Maybe<ModelTagsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ModelTagsConnectionUpdatedAt = {
  __typename?: 'ModelTagsConnectionUpdatedAt';
  connection?: Maybe<ModelTagsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ModelTagsConnection_Id = {
  __typename?: 'ModelTagsConnection_id';
  connection?: Maybe<ModelTagsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ModelTagsGroupBy = {
  __typename?: 'ModelTagsGroupBy';
  _id?: Maybe<Array<Maybe<ModelTagsConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<ModelTagsConnectionCreatedAt>>>;
  id?: Maybe<Array<Maybe<ModelTagsConnectionId>>>;
  name?: Maybe<Array<Maybe<ModelTagsConnectionName>>>;
  slug?: Maybe<Array<Maybe<ModelTagsConnectionSlug>>>;
  updatedAt?: Maybe<Array<Maybe<ModelTagsConnectionUpdatedAt>>>;
};

export type Morph = Article | ArticleAggregator | ArticleConnection | ArticleConnectionContent | ArticleConnectionCreatedAt | ArticleConnectionId | ArticleConnectionPublished_At | ArticleConnectionSeo | ArticleConnectionSlug | ArticleConnectionTitle | ArticleConnectionUpdatedAt | ArticleConnection_Id | ArticleGroupBy | ArticleTags | ArticleTagsAggregator | ArticleTagsConnection | ArticleTagsConnectionCreatedAt | ArticleTagsConnectionId | ArticleTagsConnectionSlug | ArticleTagsConnectionTitle | ArticleTagsConnectionUpdatedAt | ArticleTagsConnection_Id | ArticleTagsGroupBy | ComponentGlobalSell | ComponentGlobalSeo | ComponentGlobalShare | Gallery | GalleryAggregator | GalleryCategories | GalleryCategoriesAggregator | GalleryCategoriesConnection | GalleryCategoriesConnectionCreatedAt | GalleryCategoriesConnectionId | GalleryCategoriesConnectionSlug | GalleryCategoriesConnectionTitle | GalleryCategoriesConnectionUpdatedAt | GalleryCategoriesConnection_Id | GalleryCategoriesGroupBy | GalleryConnection | GalleryConnectionCreatedAt | GalleryConnectionDescription | GalleryConnectionFeatured_Image | GalleryConnectionId | GalleryConnectionMeta | GalleryConnectionNsfw | GalleryConnectionSlug | GalleryConnectionStatus | GalleryConnectionTitle | GalleryConnectionUpdatedAt | GalleryConnection_Id | GalleryGroupBy | GalleryImage | GalleryImageAggregator | GalleryImageConnection | GalleryImageConnectionCaption | GalleryImageConnectionClean | GalleryImageConnectionCreatedAt | GalleryImageConnectionId | GalleryImageConnectionSell | GalleryImageConnectionShare | GalleryImageConnectionSlug | GalleryImageConnectionUpdatedAt | GalleryImageConnectionWatermarked | GalleryImageConnection_Id | GalleryImageGroupBy | GalleryTags | GalleryTagsAggregator | GalleryTagsConnection | GalleryTagsConnectionCreatedAt | GalleryTagsConnectionId | GalleryTagsConnectionSlug | GalleryTagsConnectionTitle | GalleryTagsConnectionUpdatedAt | GalleryTagsConnection_Id | GalleryTagsGroupBy | Gardens | GardensAggregator | GardensConnection | GardensConnectionContents | GardensConnectionCreatedAt | GardensConnectionId | GardensConnectionSlug | GardensConnectionTitle | GardensConnectionUpdatedAt | GardensConnection_Id | GardensGroupBy | Manufacturer | ManufacturerAggregator | ManufacturerConnection | ManufacturerConnectionCreatedAt | ManufacturerConnectionId | ManufacturerConnectionName | ManufacturerConnectionSlug | ManufacturerConnectionUpdatedAt | ManufacturerConnection_Id | ManufacturerGroupBy | Model | ModelAggregator | ModelAggregatorAvg | ModelAggregatorMax | ModelAggregatorMin | ModelAggregatorSum | ModelConnection | ModelConnectionClockify_Project_Id | ModelConnectionCompleted | ModelConnectionCompleted_At | ModelConnectionContent | ModelConnectionCreatedAt | ModelConnectionId | ModelConnectionKit_Number | ModelConnectionManufacturer | ModelConnectionPublished_At | ModelConnectionSeo | ModelConnectionScale | ModelConnectionScalemates_Link | ModelConnectionSharing | ModelConnectionSlug | ModelConnectionStatus | ModelConnectionTitle | ModelConnectionUpdatedAt | ModelConnectionYear_Released | ModelConnectionYoutube_Video | ModelConnection_Id | ModelGroupBy | ModelTags | ModelTagsAggregator | ModelTagsConnection | ModelTagsConnectionCreatedAt | ModelTagsConnectionId | ModelTagsConnectionName | ModelTagsConnectionSlug | ModelTagsConnectionUpdatedAt | ModelTagsConnection_Id | ModelTagsGroupBy | Pages | PagesAggregator | PagesConnection | PagesConnectionContent | PagesConnectionCreatedAt | PagesConnectionDescription | PagesConnectionId | PagesConnectionPublished_At | PagesConnectionSlug | PagesConnectionTitle | PagesConnectionUpdatedAt | PagesConnection_Id | PagesGroupBy | Scale | ScaleAggregator | ScaleConnection | ScaleConnectionCreatedAt | ScaleConnectionId | ScaleConnectionName | ScaleConnectionSlug | ScaleConnectionUpdatedAt | ScaleConnection_Id | ScaleGroupBy | UploadFile | UploadFileAggregator | UploadFileAggregatorAvg | UploadFileAggregatorMax | UploadFileAggregatorMin | UploadFileAggregatorSum | UploadFileConnection | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionCreatedAt | UploadFileConnectionExt | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionHeight | UploadFileConnectionId | UploadFileConnectionMime | UploadFileConnectionName | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | UploadFileConnectionSize | UploadFileConnectionUpdatedAt | UploadFileConnectionUrl | UploadFileConnectionWidth | UploadFileConnection_Id | UploadFileGroupBy | UserPermissionsPasswordPayload | UserSettings | UserSettingsAggregator | UserSettingsConnection | UserSettingsConnectionBirthdate | UserSettingsConnectionCreatedAt | UserSettingsConnectionId | UserSettingsConnectionUpdatedAt | UserSettingsConnectionUsers_Permissions_User | UserSettingsConnection_Id | UserSettingsGroupBy | UsersPermissionsLoginPayload | UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleAggregator | UsersPermissionsRoleConnection | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionType | UsersPermissionsRoleConnection_Id | UsersPermissionsRoleGroupBy | UsersPermissionsUser | UsersPermissionsUserAggregator | UsersPermissionsUserConnection | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionCreatedAt | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionRole | UsersPermissionsUserConnectionUpdatedAt | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnection_Id | UsersPermissionsUserGroupBy | CreateArticlePayload | CreateArticleTagPayload | CreateGalleryCategoryPayload | CreateGalleryImagePayload | CreateGalleryPayload | CreateGalleryTagPayload | CreateGardenPayload | CreateManufacturerPayload | CreateModelPayload | CreateModelTagPayload | CreatePagePayload | CreateRolePayload | CreateScalePayload | CreateUserPayload | CreateUserSettingPayload | DeleteArticlePayload | DeleteArticleTagPayload | DeleteFilePayload | DeleteGalleryCategoryPayload | DeleteGalleryImagePayload | DeleteGalleryPayload | DeleteGalleryTagPayload | DeleteGardenPayload | DeleteManufacturerPayload | DeleteModelPayload | DeleteModelTagPayload | DeletePagePayload | DeleteRolePayload | DeleteScalePayload | DeleteUserPayload | DeleteUserSettingPayload | UpdateArticlePayload | UpdateArticleTagPayload | UpdateGalleryCategoryPayload | UpdateGalleryImagePayload | UpdateGalleryPayload | UpdateGalleryTagPayload | UpdateGardenPayload | UpdateManufacturerPayload | UpdateModelPayload | UpdateModelTagPayload | UpdatePagePayload | UpdateRolePayload | UpdateScalePayload | UpdateUserPayload | UpdateUserSettingPayload;

export type Mutation = {
  __typename?: 'Mutation';
  createArticle?: Maybe<CreateArticlePayload>;
  createArticleTag?: Maybe<CreateArticleTagPayload>;
  createGallery?: Maybe<CreateGalleryPayload>;
  createGalleryCategory?: Maybe<CreateGalleryCategoryPayload>;
  createGalleryImage?: Maybe<CreateGalleryImagePayload>;
  createGalleryTag?: Maybe<CreateGalleryTagPayload>;
  createGarden?: Maybe<CreateGardenPayload>;
  createManufacturer?: Maybe<CreateManufacturerPayload>;
  createModel?: Maybe<CreateModelPayload>;
  createModelTag?: Maybe<CreateModelTagPayload>;
  createPage?: Maybe<CreatePagePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  createScale?: Maybe<CreateScalePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  createUserSetting?: Maybe<CreateUserSettingPayload>;
  deleteArticle?: Maybe<DeleteArticlePayload>;
  deleteArticleTag?: Maybe<DeleteArticleTagPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  deleteGallery?: Maybe<DeleteGalleryPayload>;
  deleteGalleryCategory?: Maybe<DeleteGalleryCategoryPayload>;
  deleteGalleryImage?: Maybe<DeleteGalleryImagePayload>;
  deleteGalleryTag?: Maybe<DeleteGalleryTagPayload>;
  deleteGarden?: Maybe<DeleteGardenPayload>;
  deleteManufacturer?: Maybe<DeleteManufacturerPayload>;
  deleteModel?: Maybe<DeleteModelPayload>;
  deleteModelTag?: Maybe<DeleteModelTagPayload>;
  deletePage?: Maybe<DeletePagePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  deleteScale?: Maybe<DeleteScalePayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  deleteUserSetting?: Maybe<DeleteUserSettingPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFile>>;
  register: UsersPermissionsLoginPayload;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateArticle?: Maybe<UpdateArticlePayload>;
  updateArticleTag?: Maybe<UpdateArticleTagPayload>;
  updateFileInfo: UploadFile;
  updateGallery?: Maybe<UpdateGalleryPayload>;
  updateGalleryCategory?: Maybe<UpdateGalleryCategoryPayload>;
  updateGalleryImage?: Maybe<UpdateGalleryImagePayload>;
  updateGalleryTag?: Maybe<UpdateGalleryTagPayload>;
  updateGarden?: Maybe<UpdateGardenPayload>;
  updateManufacturer?: Maybe<UpdateManufacturerPayload>;
  updateModel?: Maybe<UpdateModelPayload>;
  updateModelTag?: Maybe<UpdateModelTagPayload>;
  updatePage?: Maybe<UpdatePagePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  updateScale?: Maybe<UpdateScalePayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  updateUserSetting?: Maybe<UpdateUserSettingPayload>;
  upload: UploadFile;
};


export type MutationCreateArticleArgs = {
  input?: Maybe<CreateArticleInput>;
};


export type MutationCreateArticleTagArgs = {
  input?: Maybe<CreateArticleTagInput>;
};


export type MutationCreateGalleryArgs = {
  input?: Maybe<CreateGalleryInput>;
};


export type MutationCreateGalleryCategoryArgs = {
  input?: Maybe<CreateGalleryCategoryInput>;
};


export type MutationCreateGalleryImageArgs = {
  input?: Maybe<CreateGalleryImageInput>;
};


export type MutationCreateGalleryTagArgs = {
  input?: Maybe<CreateGalleryTagInput>;
};


export type MutationCreateGardenArgs = {
  input?: Maybe<CreateGardenInput>;
};


export type MutationCreateManufacturerArgs = {
  input?: Maybe<CreateManufacturerInput>;
};


export type MutationCreateModelArgs = {
  input?: Maybe<CreateModelInput>;
};


export type MutationCreateModelTagArgs = {
  input?: Maybe<CreateModelTagInput>;
};


export type MutationCreatePageArgs = {
  input?: Maybe<CreatePageInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationCreateScaleArgs = {
  input?: Maybe<CreateScaleInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationCreateUserSettingArgs = {
  input?: Maybe<CreateUserSettingInput>;
};


export type MutationDeleteArticleArgs = {
  input?: Maybe<DeleteArticleInput>;
};


export type MutationDeleteArticleTagArgs = {
  input?: Maybe<DeleteArticleTagInput>;
};


export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};


export type MutationDeleteGalleryArgs = {
  input?: Maybe<DeleteGalleryInput>;
};


export type MutationDeleteGalleryCategoryArgs = {
  input?: Maybe<DeleteGalleryCategoryInput>;
};


export type MutationDeleteGalleryImageArgs = {
  input?: Maybe<DeleteGalleryImageInput>;
};


export type MutationDeleteGalleryTagArgs = {
  input?: Maybe<DeleteGalleryTagInput>;
};


export type MutationDeleteGardenArgs = {
  input?: Maybe<DeleteGardenInput>;
};


export type MutationDeleteManufacturerArgs = {
  input?: Maybe<DeleteManufacturerInput>;
};


export type MutationDeleteModelArgs = {
  input?: Maybe<DeleteModelInput>;
};


export type MutationDeleteModelTagArgs = {
  input?: Maybe<DeleteModelTagInput>;
};


export type MutationDeletePageArgs = {
  input?: Maybe<DeletePageInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationDeleteScaleArgs = {
  input?: Maybe<DeleteScaleInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationDeleteUserSettingArgs = {
  input?: Maybe<DeleteUserSettingInput>;
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
  ref?: Maybe<Scalars['String']>;
  refId?: Maybe<Scalars['ID']>;
  source?: Maybe<Scalars['String']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateArticleArgs = {
  input?: Maybe<UpdateArticleInput>;
};


export type MutationUpdateArticleTagArgs = {
  input?: Maybe<UpdateArticleTagInput>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationUpdateGalleryArgs = {
  input?: Maybe<UpdateGalleryInput>;
};


export type MutationUpdateGalleryCategoryArgs = {
  input?: Maybe<UpdateGalleryCategoryInput>;
};


export type MutationUpdateGalleryImageArgs = {
  input?: Maybe<UpdateGalleryImageInput>;
};


export type MutationUpdateGalleryTagArgs = {
  input?: Maybe<UpdateGalleryTagInput>;
};


export type MutationUpdateGardenArgs = {
  input?: Maybe<UpdateGardenInput>;
};


export type MutationUpdateManufacturerArgs = {
  input?: Maybe<UpdateManufacturerInput>;
};


export type MutationUpdateModelArgs = {
  input?: Maybe<UpdateModelInput>;
};


export type MutationUpdateModelTagArgs = {
  input?: Maybe<UpdateModelTagInput>;
};


export type MutationUpdatePageArgs = {
  input?: Maybe<UpdatePageInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationUpdateScaleArgs = {
  input?: Maybe<UpdateScaleInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationUpdateUserSettingArgs = {
  input?: Maybe<UpdateUserSettingInput>;
};


export type MutationUploadArgs = {
  field?: Maybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: Maybe<FileInfoInput>;
  ref?: Maybe<Scalars['String']>;
  refId?: Maybe<Scalars['ID']>;
  source?: Maybe<Scalars['String']>;
};

export type PageInput = {
  content: Scalars['String'];
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updated_by?: Maybe<Scalars['ID']>;
};

export type Pages = {
  __typename?: 'Pages';
  _id: Scalars['ID'];
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type PagesAggregator = {
  __typename?: 'PagesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PagesConnection = {
  __typename?: 'PagesConnection';
  aggregate?: Maybe<PagesAggregator>;
  groupBy?: Maybe<PagesGroupBy>;
  values?: Maybe<Array<Maybe<Pages>>>;
};

export type PagesConnectionContent = {
  __typename?: 'PagesConnectionContent';
  connection?: Maybe<PagesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type PagesConnectionCreatedAt = {
  __typename?: 'PagesConnectionCreatedAt';
  connection?: Maybe<PagesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type PagesConnectionDescription = {
  __typename?: 'PagesConnectionDescription';
  connection?: Maybe<PagesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type PagesConnectionId = {
  __typename?: 'PagesConnectionId';
  connection?: Maybe<PagesConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type PagesConnectionPublished_At = {
  __typename?: 'PagesConnectionPublished_at';
  connection?: Maybe<PagesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type PagesConnectionSlug = {
  __typename?: 'PagesConnectionSlug';
  connection?: Maybe<PagesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type PagesConnectionTitle = {
  __typename?: 'PagesConnectionTitle';
  connection?: Maybe<PagesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type PagesConnectionUpdatedAt = {
  __typename?: 'PagesConnectionUpdatedAt';
  connection?: Maybe<PagesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type PagesConnection_Id = {
  __typename?: 'PagesConnection_id';
  connection?: Maybe<PagesConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type PagesGroupBy = {
  __typename?: 'PagesGroupBy';
  _id?: Maybe<Array<Maybe<PagesConnection_Id>>>;
  content?: Maybe<Array<Maybe<PagesConnectionContent>>>;
  createdAt?: Maybe<Array<Maybe<PagesConnectionCreatedAt>>>;
  description?: Maybe<Array<Maybe<PagesConnectionDescription>>>;
  id?: Maybe<Array<Maybe<PagesConnectionId>>>;
  published_at?: Maybe<Array<Maybe<PagesConnectionPublished_At>>>;
  slug?: Maybe<Array<Maybe<PagesConnectionSlug>>>;
  title?: Maybe<Array<Maybe<PagesConnectionTitle>>>;
  updatedAt?: Maybe<Array<Maybe<PagesConnectionUpdatedAt>>>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  article?: Maybe<Article>;
  articleTag?: Maybe<ArticleTags>;
  articleTags?: Maybe<Array<Maybe<ArticleTags>>>;
  articleTagsConnection?: Maybe<ArticleTagsConnection>;
  articles?: Maybe<Array<Maybe<Article>>>;
  articlesConnection?: Maybe<ArticleConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  galleries?: Maybe<Array<Maybe<Gallery>>>;
  galleriesConnection?: Maybe<GalleryConnection>;
  gallery?: Maybe<Gallery>;
  galleryCategories?: Maybe<Array<Maybe<GalleryCategories>>>;
  galleryCategoriesConnection?: Maybe<GalleryCategoriesConnection>;
  galleryCategory?: Maybe<GalleryCategories>;
  galleryImage?: Maybe<GalleryImage>;
  galleryImages?: Maybe<Array<Maybe<GalleryImage>>>;
  galleryImagesConnection?: Maybe<GalleryImageConnection>;
  galleryTag?: Maybe<GalleryTags>;
  galleryTags?: Maybe<Array<Maybe<GalleryTags>>>;
  galleryTagsConnection?: Maybe<GalleryTagsConnection>;
  garden?: Maybe<Gardens>;
  gardens?: Maybe<Array<Maybe<Gardens>>>;
  gardensConnection?: Maybe<GardensConnection>;
  manufacturer?: Maybe<Manufacturer>;
  manufacturers?: Maybe<Array<Maybe<Manufacturer>>>;
  manufacturersConnection?: Maybe<ManufacturerConnection>;
  me?: Maybe<UsersPermissionsMe>;
  model?: Maybe<Model>;
  modelTag?: Maybe<ModelTags>;
  modelTags?: Maybe<Array<Maybe<ModelTags>>>;
  modelTagsConnection?: Maybe<ModelTagsConnection>;
  models?: Maybe<Array<Maybe<Model>>>;
  modelsConnection?: Maybe<ModelConnection>;
  page?: Maybe<Pages>;
  pages?: Maybe<Array<Maybe<Pages>>>;
  pagesConnection?: Maybe<PagesConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  scale?: Maybe<Scale>;
  scales?: Maybe<Array<Maybe<Scale>>>;
  scalesConnection?: Maybe<ScaleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  userSetting?: Maybe<UserSettings>;
  userSettings?: Maybe<Array<Maybe<UserSettings>>>;
  userSettingsConnection?: Maybe<UserSettingsConnection>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
};


export type QueryArticleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryArticleTagArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryArticleTagsArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryArticleTagsConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryArticlesArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryArticlesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryGalleriesArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryGalleriesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryGalleryArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryGalleryCategoriesArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryGalleryCategoriesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryGalleryCategoryArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryGalleryImageArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryGalleryImagesArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryGalleryImagesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryGalleryTagArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryGalleryTagsArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryGalleryTagsConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryGardenArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryGardensArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryGardensConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryManufacturerArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryManufacturersArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryManufacturersConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryModelArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryModelTagArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryModelTagsArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryModelTagsConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryModelsArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryModelsConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryPageArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryPagesArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryPagesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRolesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryScaleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryScalesArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryScalesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryUserSettingArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryUserSettingsArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserSettingsConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUsersArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUsersConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type RoleInput = {
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  type?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type Scale = {
  __typename?: 'Scale';
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type ScaleAggregator = {
  __typename?: 'ScaleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ScaleConnection = {
  __typename?: 'ScaleConnection';
  aggregate?: Maybe<ScaleAggregator>;
  groupBy?: Maybe<ScaleGroupBy>;
  values?: Maybe<Array<Maybe<Scale>>>;
};

export type ScaleConnectionCreatedAt = {
  __typename?: 'ScaleConnectionCreatedAt';
  connection?: Maybe<ScaleConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ScaleConnectionId = {
  __typename?: 'ScaleConnectionId';
  connection?: Maybe<ScaleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ScaleConnectionName = {
  __typename?: 'ScaleConnectionName';
  connection?: Maybe<ScaleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ScaleConnectionSlug = {
  __typename?: 'ScaleConnectionSlug';
  connection?: Maybe<ScaleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ScaleConnectionUpdatedAt = {
  __typename?: 'ScaleConnectionUpdatedAt';
  connection?: Maybe<ScaleConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ScaleConnection_Id = {
  __typename?: 'ScaleConnection_id';
  connection?: Maybe<ScaleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ScaleGroupBy = {
  __typename?: 'ScaleGroupBy';
  _id?: Maybe<Array<Maybe<ScaleConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<ScaleConnectionCreatedAt>>>;
  id?: Maybe<Array<Maybe<ScaleConnectionId>>>;
  name?: Maybe<Array<Maybe<ScaleConnectionName>>>;
  slug?: Maybe<Array<Maybe<ScaleConnectionSlug>>>;
  updatedAt?: Maybe<Array<Maybe<ScaleConnectionUpdatedAt>>>;
};

export type ScaleInput = {
  created_by?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  _id: Scalars['ID'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
  size: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};


export type UploadFileRelatedArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  avg?: Maybe<UploadFileAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<UploadFileAggregatorMax>;
  min?: Maybe<UploadFileAggregatorMin>;
  sum?: Maybe<UploadFileAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  aggregate?: Maybe<UploadFileAggregator>;
  groupBy?: Maybe<UploadFileGroupBy>;
  values?: Maybe<Array<Maybe<UploadFile>>>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCreatedAt = {
  __typename?: 'UploadFileConnectionCreatedAt';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type UploadFileConnectionUpdatedAt = {
  __typename?: 'UploadFileConnectionUpdatedAt';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileConnection_Id = {
  __typename?: 'UploadFileConnection_id';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  _id?: Maybe<Array<Maybe<UploadFileConnection_Id>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  createdAt?: Maybe<Array<Maybe<UploadFileConnectionCreatedAt>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  updatedAt?: Maybe<Array<Maybe<UploadFileConnectionUpdatedAt>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
};

export type UserInput = {
  blocked?: Maybe<Scalars['Boolean']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  email: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
  username: Scalars['String'];
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UserSettingInput = {
  Avatar?: Maybe<Array<Maybe<Scalars['ID']>>>;
  Birthdate?: Maybe<Scalars['Date']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
  users_permissions_user?: Maybe<Scalars['ID']>;
};

export type UserSettings = {
  __typename?: 'UserSettings';
  Avatar?: Maybe<Array<Maybe<UploadFile>>>;
  Birthdate?: Maybe<Scalars['Date']>;
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  users_permissions_user?: Maybe<UsersPermissionsUser>;
};


export type UserSettingsAvatarArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UserSettingsAggregator = {
  __typename?: 'UserSettingsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UserSettingsConnection = {
  __typename?: 'UserSettingsConnection';
  aggregate?: Maybe<UserSettingsAggregator>;
  groupBy?: Maybe<UserSettingsGroupBy>;
  values?: Maybe<Array<Maybe<UserSettings>>>;
};

export type UserSettingsConnectionBirthdate = {
  __typename?: 'UserSettingsConnectionBirthdate';
  connection?: Maybe<UserSettingsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UserSettingsConnectionCreatedAt = {
  __typename?: 'UserSettingsConnectionCreatedAt';
  connection?: Maybe<UserSettingsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UserSettingsConnectionId = {
  __typename?: 'UserSettingsConnectionId';
  connection?: Maybe<UserSettingsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UserSettingsConnectionUpdatedAt = {
  __typename?: 'UserSettingsConnectionUpdatedAt';
  connection?: Maybe<UserSettingsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UserSettingsConnectionUsers_Permissions_User = {
  __typename?: 'UserSettingsConnectionUsers_permissions_user';
  connection?: Maybe<UserSettingsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UserSettingsConnection_Id = {
  __typename?: 'UserSettingsConnection_id';
  connection?: Maybe<UserSettingsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UserSettingsGroupBy = {
  __typename?: 'UserSettingsGroupBy';
  Birthdate?: Maybe<Array<Maybe<UserSettingsConnectionBirthdate>>>;
  _id?: Maybe<Array<Maybe<UserSettingsConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<UserSettingsConnectionCreatedAt>>>;
  id?: Maybe<Array<Maybe<UserSettingsConnectionId>>>;
  updatedAt?: Maybe<Array<Maybe<UserSettingsConnectionUpdatedAt>>>;
  users_permissions_user?: Maybe<Array<Maybe<UserSettingsConnectionUsers_Permissions_User>>>;
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  _id: Scalars['ID'];
  action: Scalars['String'];
  controller: Scalars['String'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  type: Scalars['String'];
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  _id: Scalars['ID'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  type?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnection_Id = {
  __typename?: 'UsersPermissionsRoleConnection_id';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  _id?: Maybe<Array<Maybe<UsersPermissionsRoleConnection_Id>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  _id: Scalars['ID'];
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionCreatedAt = {
  __typename?: 'UsersPermissionsUserConnectionCreatedAt';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionUpdatedAt = {
  __typename?: 'UsersPermissionsUserConnectionUpdatedAt';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnection_Id = {
  __typename?: 'UsersPermissionsUserConnection_id';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  _id?: Maybe<Array<Maybe<UsersPermissionsUserConnection_Id>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  createdAt?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreatedAt>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  updatedAt?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdatedAt>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
};

export type CreateArticleInput = {
  data?: Maybe<ArticleInput>;
};

export type CreateArticlePayload = {
  __typename?: 'createArticlePayload';
  article?: Maybe<Article>;
};

export type CreateArticleTagInput = {
  data?: Maybe<ArticleTagInput>;
};

export type CreateArticleTagPayload = {
  __typename?: 'createArticleTagPayload';
  articleTag?: Maybe<ArticleTags>;
};

export type CreateGalleryCategoryInput = {
  data?: Maybe<GalleryCategoryInput>;
};

export type CreateGalleryCategoryPayload = {
  __typename?: 'createGalleryCategoryPayload';
  galleryCategory?: Maybe<GalleryCategories>;
};

export type CreateGalleryImageInput = {
  data?: Maybe<GalleryImageInput>;
};

export type CreateGalleryImagePayload = {
  __typename?: 'createGalleryImagePayload';
  galleryImage?: Maybe<GalleryImage>;
};

export type CreateGalleryInput = {
  data?: Maybe<GalleryInput>;
};

export type CreateGalleryPayload = {
  __typename?: 'createGalleryPayload';
  gallery?: Maybe<Gallery>;
};

export type CreateGalleryTagInput = {
  data?: Maybe<GalleryTagInput>;
};

export type CreateGalleryTagPayload = {
  __typename?: 'createGalleryTagPayload';
  galleryTag?: Maybe<GalleryTags>;
};

export type CreateGardenInput = {
  data?: Maybe<GardenInput>;
};

export type CreateGardenPayload = {
  __typename?: 'createGardenPayload';
  garden?: Maybe<Gardens>;
};

export type CreateManufacturerInput = {
  data?: Maybe<ManufacturerInput>;
};

export type CreateManufacturerPayload = {
  __typename?: 'createManufacturerPayload';
  manufacturer?: Maybe<Manufacturer>;
};

export type CreateModelInput = {
  data?: Maybe<ModelInput>;
};

export type CreateModelPayload = {
  __typename?: 'createModelPayload';
  model?: Maybe<Model>;
};

export type CreateModelTagInput = {
  data?: Maybe<ModelTagInput>;
};

export type CreateModelTagPayload = {
  __typename?: 'createModelTagPayload';
  modelTag?: Maybe<ModelTags>;
};

export type CreatePageInput = {
  data?: Maybe<PageInput>;
};

export type CreatePagePayload = {
  __typename?: 'createPagePayload';
  page?: Maybe<Pages>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateScaleInput = {
  data?: Maybe<ScaleInput>;
};

export type CreateScalePayload = {
  __typename?: 'createScalePayload';
  scale?: Maybe<Scale>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type CreateUserSettingInput = {
  data?: Maybe<UserSettingInput>;
};

export type CreateUserSettingPayload = {
  __typename?: 'createUserSettingPayload';
  userSetting?: Maybe<UserSettings>;
};

export type DeleteArticleInput = {
  where?: Maybe<InputId>;
};

export type DeleteArticlePayload = {
  __typename?: 'deleteArticlePayload';
  article?: Maybe<Article>;
};

export type DeleteArticleTagInput = {
  where?: Maybe<InputId>;
};

export type DeleteArticleTagPayload = {
  __typename?: 'deleteArticleTagPayload';
  articleTag?: Maybe<ArticleTags>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type DeleteGalleryCategoryInput = {
  where?: Maybe<InputId>;
};

export type DeleteGalleryCategoryPayload = {
  __typename?: 'deleteGalleryCategoryPayload';
  galleryCategory?: Maybe<GalleryCategories>;
};

export type DeleteGalleryImageInput = {
  where?: Maybe<InputId>;
};

export type DeleteGalleryImagePayload = {
  __typename?: 'deleteGalleryImagePayload';
  galleryImage?: Maybe<GalleryImage>;
};

export type DeleteGalleryInput = {
  where?: Maybe<InputId>;
};

export type DeleteGalleryPayload = {
  __typename?: 'deleteGalleryPayload';
  gallery?: Maybe<Gallery>;
};

export type DeleteGalleryTagInput = {
  where?: Maybe<InputId>;
};

export type DeleteGalleryTagPayload = {
  __typename?: 'deleteGalleryTagPayload';
  galleryTag?: Maybe<GalleryTags>;
};

export type DeleteGardenInput = {
  where?: Maybe<InputId>;
};

export type DeleteGardenPayload = {
  __typename?: 'deleteGardenPayload';
  garden?: Maybe<Gardens>;
};

export type DeleteManufacturerInput = {
  where?: Maybe<InputId>;
};

export type DeleteManufacturerPayload = {
  __typename?: 'deleteManufacturerPayload';
  manufacturer?: Maybe<Manufacturer>;
};

export type DeleteModelInput = {
  where?: Maybe<InputId>;
};

export type DeleteModelPayload = {
  __typename?: 'deleteModelPayload';
  model?: Maybe<Model>;
};

export type DeleteModelTagInput = {
  where?: Maybe<InputId>;
};

export type DeleteModelTagPayload = {
  __typename?: 'deleteModelTagPayload';
  modelTag?: Maybe<ModelTags>;
};

export type DeletePageInput = {
  where?: Maybe<InputId>;
};

export type DeletePagePayload = {
  __typename?: 'deletePagePayload';
  page?: Maybe<Pages>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteScaleInput = {
  where?: Maybe<InputId>;
};

export type DeleteScalePayload = {
  __typename?: 'deleteScalePayload';
  scale?: Maybe<Scale>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteUserSettingInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserSettingPayload = {
  __typename?: 'deleteUserSettingPayload';
  userSetting?: Maybe<UserSettings>;
};

export type EditArticleInput = {
  article_tags?: Maybe<Array<Maybe<Scalars['ID']>>>;
  content?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  seo?: Maybe<EditComponentGlobalSeoInput>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditArticleTagInput = {
  created_by?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditComponentGlobalSellInput = {
  id?: Maybe<Scalars['ID']>;
  price?: Maybe<Scalars['Int']>;
};

export type EditComponentGlobalSeoInput = {
  description?: Maybe<Scalars['String']>;
  featured_image?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};

export type EditComponentGlobalShareInput = {
  facebook?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  instagram?: Maybe<Scalars['Boolean']>;
  twitter?: Maybe<Scalars['Boolean']>;
};

export type EditFileInput = {
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  size?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['ID']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type EditGalleryCategoryInput = {
  created_by?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditGalleryImageInput = {
  caption?: Maybe<Scalars['String']>;
  clean?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  galleries?: Maybe<Array<Maybe<Scalars['ID']>>>;
  sell?: Maybe<EditComponentGlobalSellInput>;
  share?: Maybe<EditComponentGlobalShareInput>;
  slug?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
  watermarked?: Maybe<Scalars['ID']>;
};

export type EditGalleryInput = {
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  featured_image?: Maybe<Scalars['ID']>;
  gallery_categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  gallery_images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  gallery_tags?: Maybe<Array<Maybe<Scalars['ID']>>>;
  meta?: Maybe<Scalars['String']>;
  nsfw?: Maybe<Scalars['Boolean']>;
  roles?: Maybe<Array<Maybe<Scalars['ID']>>>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Enum_Gallery_Status>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
  users_permissions_users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type EditGalleryTagInput = {
  created_by?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditGardenInput = {
  contents?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditManufacturerInput = {
  created_by?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditModelInput = {
  SEO?: Maybe<EditComponentGlobalSeoInput>;
  clockify_project_id?: Maybe<Scalars['String']>;
  completed?: Maybe<Scalars['Boolean']>;
  completed_at?: Maybe<Scalars['Date']>;
  content?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  kit_number?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<Scalars['ID']>;
  model_tags?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  scale?: Maybe<Scalars['ID']>;
  scalemates_link?: Maybe<Scalars['String']>;
  sharing?: Maybe<EditComponentGlobalShareInput>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Enum_Model_Status>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
  users_permissions_roles?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users_permissions_users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  year_released?: Maybe<Scalars['Int']>;
  youtube_video?: Maybe<Scalars['String']>;
};

export type EditModelTagInput = {
  created_by?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditPageInput = {
  content?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  type?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type EditScaleInput = {
  created_by?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditUserInput = {
  blocked?: Maybe<Scalars['Boolean']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
  username?: Maybe<Scalars['String']>;
};

export type EditUserSettingInput = {
  Avatar?: Maybe<Array<Maybe<Scalars['ID']>>>;
  Birthdate?: Maybe<Scalars['Date']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
  users_permissions_user?: Maybe<Scalars['ID']>;
};

export type UpdateArticleInput = {
  data?: Maybe<EditArticleInput>;
  where?: Maybe<InputId>;
};

export type UpdateArticlePayload = {
  __typename?: 'updateArticlePayload';
  article?: Maybe<Article>;
};

export type UpdateArticleTagInput = {
  data?: Maybe<EditArticleTagInput>;
  where?: Maybe<InputId>;
};

export type UpdateArticleTagPayload = {
  __typename?: 'updateArticleTagPayload';
  articleTag?: Maybe<ArticleTags>;
};

export type UpdateGalleryCategoryInput = {
  data?: Maybe<EditGalleryCategoryInput>;
  where?: Maybe<InputId>;
};

export type UpdateGalleryCategoryPayload = {
  __typename?: 'updateGalleryCategoryPayload';
  galleryCategory?: Maybe<GalleryCategories>;
};

export type UpdateGalleryImageInput = {
  data?: Maybe<EditGalleryImageInput>;
  where?: Maybe<InputId>;
};

export type UpdateGalleryImagePayload = {
  __typename?: 'updateGalleryImagePayload';
  galleryImage?: Maybe<GalleryImage>;
};

export type UpdateGalleryInput = {
  data?: Maybe<EditGalleryInput>;
  where?: Maybe<InputId>;
};

export type UpdateGalleryPayload = {
  __typename?: 'updateGalleryPayload';
  gallery?: Maybe<Gallery>;
};

export type UpdateGalleryTagInput = {
  data?: Maybe<EditGalleryTagInput>;
  where?: Maybe<InputId>;
};

export type UpdateGalleryTagPayload = {
  __typename?: 'updateGalleryTagPayload';
  galleryTag?: Maybe<GalleryTags>;
};

export type UpdateGardenInput = {
  data?: Maybe<EditGardenInput>;
  where?: Maybe<InputId>;
};

export type UpdateGardenPayload = {
  __typename?: 'updateGardenPayload';
  garden?: Maybe<Gardens>;
};

export type UpdateManufacturerInput = {
  data?: Maybe<EditManufacturerInput>;
  where?: Maybe<InputId>;
};

export type UpdateManufacturerPayload = {
  __typename?: 'updateManufacturerPayload';
  manufacturer?: Maybe<Manufacturer>;
};

export type UpdateModelInput = {
  data?: Maybe<EditModelInput>;
  where?: Maybe<InputId>;
};

export type UpdateModelPayload = {
  __typename?: 'updateModelPayload';
  model?: Maybe<Model>;
};

export type UpdateModelTagInput = {
  data?: Maybe<EditModelTagInput>;
  where?: Maybe<InputId>;
};

export type UpdateModelTagPayload = {
  __typename?: 'updateModelTagPayload';
  modelTag?: Maybe<ModelTags>;
};

export type UpdatePageInput = {
  data?: Maybe<EditPageInput>;
  where?: Maybe<InputId>;
};

export type UpdatePagePayload = {
  __typename?: 'updatePagePayload';
  page?: Maybe<Pages>;
};

export type UpdateRoleInput = {
  data?: Maybe<EditRoleInput>;
  where?: Maybe<InputId>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateScaleInput = {
  data?: Maybe<EditScaleInput>;
  where?: Maybe<InputId>;
};

export type UpdateScalePayload = {
  __typename?: 'updateScalePayload';
  scale?: Maybe<Scale>;
};

export type UpdateUserInput = {
  data?: Maybe<EditUserInput>;
  where?: Maybe<InputId>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateUserSettingInput = {
  data?: Maybe<EditUserSettingInput>;
  where?: Maybe<InputId>;
};

export type UpdateUserSettingPayload = {
  __typename?: 'updateUserSettingPayload';
  userSetting?: Maybe<UserSettings>;
};
