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
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
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

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type ArticleCategory = {
  __typename?: 'ArticleCategory';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title: Scalars['String'];
  slug: Scalars['String'];
};

export type ArticleCategoryConnection = {
  __typename?: 'ArticleCategoryConnection';
  values?: Maybe<Array<Maybe<ArticleCategory>>>;
  groupBy?: Maybe<ArticleCategoryGroupBy>;
  aggregate?: Maybe<ArticleCategoryAggregator>;
};

export type ArticleCategoryAggregator = {
  __typename?: 'ArticleCategoryAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ArticleCategoryGroupBy = {
  __typename?: 'ArticleCategoryGroupBy';
  id?: Maybe<Array<Maybe<ArticleCategoryConnectionId>>>;
  _id?: Maybe<Array<Maybe<ArticleCategoryConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<ArticleCategoryConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<ArticleCategoryConnectionUpdatedAt>>>;
  title?: Maybe<Array<Maybe<ArticleCategoryConnectionTitle>>>;
  slug?: Maybe<Array<Maybe<ArticleCategoryConnectionSlug>>>;
};

export type ArticleCategoryConnectionId = {
  __typename?: 'ArticleCategoryConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ArticleCategoryConnection>;
};

export type ArticleCategoryConnection_Id = {
  __typename?: 'ArticleCategoryConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ArticleCategoryConnection>;
};

export type ArticleCategoryConnectionCreatedAt = {
  __typename?: 'ArticleCategoryConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ArticleCategoryConnection>;
};

export type ArticleCategoryConnectionUpdatedAt = {
  __typename?: 'ArticleCategoryConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ArticleCategoryConnection>;
};

export type ArticleCategoryConnectionTitle = {
  __typename?: 'ArticleCategoryConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ArticleCategoryConnection>;
};

export type ArticleCategoryConnectionSlug = {
  __typename?: 'ArticleCategoryConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ArticleCategoryConnection>;
};

export type ArticleCategoryInput = {
  title: Scalars['String'];
  slug: Scalars['String'];
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditArticleCategoryInput = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateArticleCategoryInput = {
  data?: Maybe<ArticleCategoryInput>;
};

export type CreateArticleCategoryPayload = {
  __typename?: 'createArticleCategoryPayload';
  articleCategory?: Maybe<ArticleCategory>;
};

export type UpdateArticleCategoryInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditArticleCategoryInput>;
};

export type UpdateArticleCategoryPayload = {
  __typename?: 'updateArticleCategoryPayload';
  articleCategory?: Maybe<ArticleCategory>;
};

export type DeleteArticleCategoryInput = {
  where?: Maybe<InputId>;
};

export type DeleteArticleCategoryPayload = {
  __typename?: 'deleteArticleCategoryPayload';
  articleCategory?: Maybe<ArticleCategory>;
};

export type ArticleTags = {
  __typename?: 'ArticleTags';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title: Scalars['String'];
  slug: Scalars['String'];
};

export type ArticleTagsConnection = {
  __typename?: 'ArticleTagsConnection';
  values?: Maybe<Array<Maybe<ArticleTags>>>;
  groupBy?: Maybe<ArticleTagsGroupBy>;
  aggregate?: Maybe<ArticleTagsAggregator>;
};

export type ArticleTagsAggregator = {
  __typename?: 'ArticleTagsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ArticleTagsGroupBy = {
  __typename?: 'ArticleTagsGroupBy';
  id?: Maybe<Array<Maybe<ArticleTagsConnectionId>>>;
  _id?: Maybe<Array<Maybe<ArticleTagsConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<ArticleTagsConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<ArticleTagsConnectionUpdatedAt>>>;
  title?: Maybe<Array<Maybe<ArticleTagsConnectionTitle>>>;
  slug?: Maybe<Array<Maybe<ArticleTagsConnectionSlug>>>;
};

export type ArticleTagsConnectionId = {
  __typename?: 'ArticleTagsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ArticleTagsConnection>;
};

export type ArticleTagsConnection_Id = {
  __typename?: 'ArticleTagsConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ArticleTagsConnection>;
};

export type ArticleTagsConnectionCreatedAt = {
  __typename?: 'ArticleTagsConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ArticleTagsConnection>;
};

export type ArticleTagsConnectionUpdatedAt = {
  __typename?: 'ArticleTagsConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ArticleTagsConnection>;
};

export type ArticleTagsConnectionTitle = {
  __typename?: 'ArticleTagsConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ArticleTagsConnection>;
};

export type ArticleTagsConnectionSlug = {
  __typename?: 'ArticleTagsConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ArticleTagsConnection>;
};

export type ArticleTagInput = {
  title: Scalars['String'];
  slug: Scalars['String'];
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditArticleTagInput = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateArticleTagInput = {
  data?: Maybe<ArticleTagInput>;
};

export type CreateArticleTagPayload = {
  __typename?: 'createArticleTagPayload';
  articleTag?: Maybe<ArticleTags>;
};

export type UpdateArticleTagInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditArticleTagInput>;
};

export type UpdateArticleTagPayload = {
  __typename?: 'updateArticleTagPayload';
  articleTag?: Maybe<ArticleTags>;
};

export type DeleteArticleTagInput = {
  where?: Maybe<InputId>;
};

export type DeleteArticleTagPayload = {
  __typename?: 'deleteArticleTagPayload';
  articleTag?: Maybe<ArticleTags>;
};

export type Article = {
  __typename?: 'Article';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title: Scalars['String'];
  content: Scalars['String'];
  featured_image?: Maybe<UploadFile>;
  slug: Scalars['String'];
  users_permissions_user?: Maybe<UsersPermissionsUser>;
  excerpt?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  article_categories?: Maybe<Array<Maybe<ArticleCategory>>>;
  article_tags?: Maybe<Array<Maybe<ArticleTags>>>;
};


export type ArticleArticle_CategoriesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type ArticleArticle_TagsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ArticleConnection = {
  __typename?: 'ArticleConnection';
  values?: Maybe<Array<Maybe<Article>>>;
  groupBy?: Maybe<ArticleGroupBy>;
  aggregate?: Maybe<ArticleAggregator>;
};

export type ArticleAggregator = {
  __typename?: 'ArticleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ArticleGroupBy = {
  __typename?: 'ArticleGroupBy';
  id?: Maybe<Array<Maybe<ArticleConnectionId>>>;
  _id?: Maybe<Array<Maybe<ArticleConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<ArticleConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<ArticleConnectionUpdatedAt>>>;
  title?: Maybe<Array<Maybe<ArticleConnectionTitle>>>;
  content?: Maybe<Array<Maybe<ArticleConnectionContent>>>;
  featured_image?: Maybe<Array<Maybe<ArticleConnectionFeatured_Image>>>;
  slug?: Maybe<Array<Maybe<ArticleConnectionSlug>>>;
  users_permissions_user?: Maybe<Array<Maybe<ArticleConnectionUsers_Permissions_User>>>;
  excerpt?: Maybe<Array<Maybe<ArticleConnectionExcerpt>>>;
  published_at?: Maybe<Array<Maybe<ArticleConnectionPublished_At>>>;
};

export type ArticleConnectionId = {
  __typename?: 'ArticleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnection_Id = {
  __typename?: 'ArticleConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnectionCreatedAt = {
  __typename?: 'ArticleConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnectionUpdatedAt = {
  __typename?: 'ArticleConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnectionTitle = {
  __typename?: 'ArticleConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnectionContent = {
  __typename?: 'ArticleConnectionContent';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnectionFeatured_Image = {
  __typename?: 'ArticleConnectionFeatured_image';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnectionSlug = {
  __typename?: 'ArticleConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnectionUsers_Permissions_User = {
  __typename?: 'ArticleConnectionUsers_permissions_user';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnectionExcerpt = {
  __typename?: 'ArticleConnectionExcerpt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnectionPublished_At = {
  __typename?: 'ArticleConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleInput = {
  title: Scalars['String'];
  content: Scalars['String'];
  featured_image?: Maybe<Scalars['ID']>;
  slug: Scalars['String'];
  users_permissions_user?: Maybe<Scalars['ID']>;
  article_categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  article_tags?: Maybe<Array<Maybe<Scalars['ID']>>>;
  excerpt?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditArticleInput = {
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  featured_image?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
  users_permissions_user?: Maybe<Scalars['ID']>;
  article_categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  article_tags?: Maybe<Array<Maybe<Scalars['ID']>>>;
  excerpt?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateArticleInput = {
  data?: Maybe<ArticleInput>;
};

export type CreateArticlePayload = {
  __typename?: 'createArticlePayload';
  article?: Maybe<Article>;
};

export type UpdateArticleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditArticleInput>;
};

export type UpdateArticlePayload = {
  __typename?: 'updateArticlePayload';
  article?: Maybe<Article>;
};

export type DeleteArticleInput = {
  where?: Maybe<InputId>;
};

export type DeleteArticlePayload = {
  __typename?: 'deleteArticlePayload';
  article?: Maybe<Article>;
};

export type GalleryCategories = {
  __typename?: 'GalleryCategories';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  image_large?: Maybe<Scalars['String']>;
  image_full?: Maybe<Scalars['String']>;
  image_large_watermarked?: Maybe<Scalars['String']>;
  image_full_watermarked?: Maybe<Scalars['String']>;
};

export type GalleryCategoriesConnection = {
  __typename?: 'GalleryCategoriesConnection';
  values?: Maybe<Array<Maybe<GalleryCategories>>>;
  groupBy?: Maybe<GalleryCategoriesGroupBy>;
  aggregate?: Maybe<GalleryCategoriesAggregator>;
};

export type GalleryCategoriesAggregator = {
  __typename?: 'GalleryCategoriesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type GalleryCategoriesGroupBy = {
  __typename?: 'GalleryCategoriesGroupBy';
  id?: Maybe<Array<Maybe<GalleryCategoriesConnectionId>>>;
  _id?: Maybe<Array<Maybe<GalleryCategoriesConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<GalleryCategoriesConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<GalleryCategoriesConnectionUpdatedAt>>>;
  title?: Maybe<Array<Maybe<GalleryCategoriesConnectionTitle>>>;
  slug?: Maybe<Array<Maybe<GalleryCategoriesConnectionSlug>>>;
  image_large?: Maybe<Array<Maybe<GalleryCategoriesConnectionImage_Large>>>;
  image_full?: Maybe<Array<Maybe<GalleryCategoriesConnectionImage_Full>>>;
  image_large_watermarked?: Maybe<Array<Maybe<GalleryCategoriesConnectionImage_Large_Watermarked>>>;
  image_full_watermarked?: Maybe<Array<Maybe<GalleryCategoriesConnectionImage_Full_Watermarked>>>;
};

export type GalleryCategoriesConnectionId = {
  __typename?: 'GalleryCategoriesConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<GalleryCategoriesConnection>;
};

export type GalleryCategoriesConnection_Id = {
  __typename?: 'GalleryCategoriesConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<GalleryCategoriesConnection>;
};

export type GalleryCategoriesConnectionCreatedAt = {
  __typename?: 'GalleryCategoriesConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<GalleryCategoriesConnection>;
};

export type GalleryCategoriesConnectionUpdatedAt = {
  __typename?: 'GalleryCategoriesConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<GalleryCategoriesConnection>;
};

export type GalleryCategoriesConnectionTitle = {
  __typename?: 'GalleryCategoriesConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<GalleryCategoriesConnection>;
};

export type GalleryCategoriesConnectionSlug = {
  __typename?: 'GalleryCategoriesConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<GalleryCategoriesConnection>;
};

export type GalleryCategoriesConnectionImage_Large = {
  __typename?: 'GalleryCategoriesConnectionImage_large';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<GalleryCategoriesConnection>;
};

export type GalleryCategoriesConnectionImage_Full = {
  __typename?: 'GalleryCategoriesConnectionImage_full';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<GalleryCategoriesConnection>;
};

export type GalleryCategoriesConnectionImage_Large_Watermarked = {
  __typename?: 'GalleryCategoriesConnectionImage_large_watermarked';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<GalleryCategoriesConnection>;
};

export type GalleryCategoriesConnectionImage_Full_Watermarked = {
  __typename?: 'GalleryCategoriesConnectionImage_full_watermarked';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<GalleryCategoriesConnection>;
};

export type GalleryCategoryInput = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  image_large?: Maybe<Scalars['String']>;
  image_full?: Maybe<Scalars['String']>;
  image_large_watermarked?: Maybe<Scalars['String']>;
  image_full_watermarked?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditGalleryCategoryInput = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  image_large?: Maybe<Scalars['String']>;
  image_full?: Maybe<Scalars['String']>;
  image_large_watermarked?: Maybe<Scalars['String']>;
  image_full_watermarked?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateGalleryCategoryInput = {
  data?: Maybe<GalleryCategoryInput>;
};

export type CreateGalleryCategoryPayload = {
  __typename?: 'createGalleryCategoryPayload';
  galleryCategory?: Maybe<GalleryCategories>;
};

export type UpdateGalleryCategoryInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditGalleryCategoryInput>;
};

export type UpdateGalleryCategoryPayload = {
  __typename?: 'updateGalleryCategoryPayload';
  galleryCategory?: Maybe<GalleryCategories>;
};

export type DeleteGalleryCategoryInput = {
  where?: Maybe<InputId>;
};

export type DeleteGalleryCategoryPayload = {
  __typename?: 'deleteGalleryCategoryPayload';
  galleryCategory?: Maybe<GalleryCategories>;
};

export type GalleryImage = {
  __typename?: 'GalleryImage';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  caption?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  watermarked?: Maybe<UploadFile>;
  clean?: Maybe<UploadFile>;
  share?: Maybe<ComponentGlobalShare>;
  sell?: Maybe<ComponentGlobalSell>;
  galleries?: Maybe<Array<Maybe<Gallery>>>;
};


export type GalleryImageGalleriesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type GalleryImageConnection = {
  __typename?: 'GalleryImageConnection';
  values?: Maybe<Array<Maybe<GalleryImage>>>;
  groupBy?: Maybe<GalleryImageGroupBy>;
  aggregate?: Maybe<GalleryImageAggregator>;
};

export type GalleryImageAggregator = {
  __typename?: 'GalleryImageAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type GalleryImageGroupBy = {
  __typename?: 'GalleryImageGroupBy';
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
  __typename?: 'GalleryImageConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<GalleryImageConnection>;
};

export type GalleryImageConnection_Id = {
  __typename?: 'GalleryImageConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<GalleryImageConnection>;
};

export type GalleryImageConnectionCreatedAt = {
  __typename?: 'GalleryImageConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<GalleryImageConnection>;
};

export type GalleryImageConnectionUpdatedAt = {
  __typename?: 'GalleryImageConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<GalleryImageConnection>;
};

export type GalleryImageConnectionCaption = {
  __typename?: 'GalleryImageConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<GalleryImageConnection>;
};

export type GalleryImageConnectionSlug = {
  __typename?: 'GalleryImageConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<GalleryImageConnection>;
};

export type GalleryImageConnectionWatermarked = {
  __typename?: 'GalleryImageConnectionWatermarked';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<GalleryImageConnection>;
};

export type GalleryImageConnectionClean = {
  __typename?: 'GalleryImageConnectionClean';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<GalleryImageConnection>;
};

export type GalleryImageConnectionShare = {
  __typename?: 'GalleryImageConnectionShare';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<GalleryImageConnection>;
};

export type GalleryImageConnectionSell = {
  __typename?: 'GalleryImageConnectionSell';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<GalleryImageConnection>;
};

export type GalleryImageInput = {
  caption?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  watermarked?: Maybe<Scalars['ID']>;
  clean?: Maybe<Scalars['ID']>;
  galleries?: Maybe<Array<Maybe<Scalars['ID']>>>;
  share?: Maybe<ComponentGlobalShareInput>;
  sell?: Maybe<ComponentGlobalSellInput>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditGalleryImageInput = {
  caption?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  watermarked?: Maybe<Scalars['ID']>;
  clean?: Maybe<Scalars['ID']>;
  galleries?: Maybe<Array<Maybe<Scalars['ID']>>>;
  share?: Maybe<EditComponentGlobalShareInput>;
  sell?: Maybe<EditComponentGlobalSellInput>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateGalleryImageInput = {
  data?: Maybe<GalleryImageInput>;
};

export type CreateGalleryImagePayload = {
  __typename?: 'createGalleryImagePayload';
  galleryImage?: Maybe<GalleryImage>;
};

export type UpdateGalleryImageInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditGalleryImageInput>;
};

export type UpdateGalleryImagePayload = {
  __typename?: 'updateGalleryImagePayload';
  galleryImage?: Maybe<GalleryImage>;
};

export type DeleteGalleryImageInput = {
  where?: Maybe<InputId>;
};

export type DeleteGalleryImagePayload = {
  __typename?: 'deleteGalleryImagePayload';
  galleryImage?: Maybe<GalleryImage>;
};

export type GalleryTags = {
  __typename?: 'GalleryTags';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type GalleryTagsConnection = {
  __typename?: 'GalleryTagsConnection';
  values?: Maybe<Array<Maybe<GalleryTags>>>;
  groupBy?: Maybe<GalleryTagsGroupBy>;
  aggregate?: Maybe<GalleryTagsAggregator>;
};

export type GalleryTagsAggregator = {
  __typename?: 'GalleryTagsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type GalleryTagsGroupBy = {
  __typename?: 'GalleryTagsGroupBy';
  id?: Maybe<Array<Maybe<GalleryTagsConnectionId>>>;
  _id?: Maybe<Array<Maybe<GalleryTagsConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<GalleryTagsConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<GalleryTagsConnectionUpdatedAt>>>;
  title?: Maybe<Array<Maybe<GalleryTagsConnectionTitle>>>;
  slug?: Maybe<Array<Maybe<GalleryTagsConnectionSlug>>>;
};

export type GalleryTagsConnectionId = {
  __typename?: 'GalleryTagsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<GalleryTagsConnection>;
};

export type GalleryTagsConnection_Id = {
  __typename?: 'GalleryTagsConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<GalleryTagsConnection>;
};

export type GalleryTagsConnectionCreatedAt = {
  __typename?: 'GalleryTagsConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<GalleryTagsConnection>;
};

export type GalleryTagsConnectionUpdatedAt = {
  __typename?: 'GalleryTagsConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<GalleryTagsConnection>;
};

export type GalleryTagsConnectionTitle = {
  __typename?: 'GalleryTagsConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<GalleryTagsConnection>;
};

export type GalleryTagsConnectionSlug = {
  __typename?: 'GalleryTagsConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<GalleryTagsConnection>;
};

export type GalleryTagInput = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditGalleryTagInput = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateGalleryTagInput = {
  data?: Maybe<GalleryTagInput>;
};

export type CreateGalleryTagPayload = {
  __typename?: 'createGalleryTagPayload';
  galleryTag?: Maybe<GalleryTags>;
};

export type UpdateGalleryTagInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditGalleryTagInput>;
};

export type UpdateGalleryTagPayload = {
  __typename?: 'updateGalleryTagPayload';
  galleryTag?: Maybe<GalleryTags>;
};

export type DeleteGalleryTagInput = {
  where?: Maybe<InputId>;
};

export type DeleteGalleryTagPayload = {
  __typename?: 'deleteGalleryTagPayload';
  galleryTag?: Maybe<GalleryTags>;
};

export enum Enum_Gallery_Status {
  Public = 'PUBLIC',
  Protected = 'PROTECTED',
  Draft = 'DRAFT',
  Archived = 'ARCHIVED',
  Private = 'PRIVATE'
}

export type Gallery = {
  __typename?: 'Gallery';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  featured_image?: Maybe<UploadFile>;
  status: Enum_Gallery_Status;
  nsfw?: Maybe<Scalars['Boolean']>;
  gallery_categories?: Maybe<Array<Maybe<GalleryCategories>>>;
  gallery_tags?: Maybe<Array<Maybe<GalleryTags>>>;
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  gallery_images?: Maybe<Array<Maybe<GalleryImage>>>;
};


export type GalleryGallery_CategoriesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type GalleryGallery_TagsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type GalleryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type GalleryGallery_ImagesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type GalleryConnection = {
  __typename?: 'GalleryConnection';
  values?: Maybe<Array<Maybe<Gallery>>>;
  groupBy?: Maybe<GalleryGroupBy>;
  aggregate?: Maybe<GalleryAggregator>;
};

export type GalleryAggregator = {
  __typename?: 'GalleryAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type GalleryGroupBy = {
  __typename?: 'GalleryGroupBy';
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
  __typename?: 'GalleryConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<GalleryConnection>;
};

export type GalleryConnection_Id = {
  __typename?: 'GalleryConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<GalleryConnection>;
};

export type GalleryConnectionCreatedAt = {
  __typename?: 'GalleryConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<GalleryConnection>;
};

export type GalleryConnectionUpdatedAt = {
  __typename?: 'GalleryConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<GalleryConnection>;
};

export type GalleryConnectionTitle = {
  __typename?: 'GalleryConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<GalleryConnection>;
};

export type GalleryConnectionSlug = {
  __typename?: 'GalleryConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<GalleryConnection>;
};

export type GalleryConnectionDescription = {
  __typename?: 'GalleryConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<GalleryConnection>;
};

export type GalleryConnectionFeatured_Image = {
  __typename?: 'GalleryConnectionFeatured_image';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<GalleryConnection>;
};

export type GalleryConnectionStatus = {
  __typename?: 'GalleryConnectionStatus';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<GalleryConnection>;
};

export type GalleryConnectionNsfw = {
  __typename?: 'GalleryConnectionNsfw';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<GalleryConnection>;
};

export type GalleryInput = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  featured_image?: Maybe<Scalars['ID']>;
  gallery_categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  gallery_tags?: Maybe<Array<Maybe<Scalars['ID']>>>;
  roles?: Maybe<Array<Maybe<Scalars['ID']>>>;
  gallery_images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  status?: Maybe<Enum_Gallery_Status>;
  nsfw?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditGalleryInput = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  featured_image?: Maybe<Scalars['ID']>;
  gallery_categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  gallery_tags?: Maybe<Array<Maybe<Scalars['ID']>>>;
  roles?: Maybe<Array<Maybe<Scalars['ID']>>>;
  gallery_images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  status?: Maybe<Enum_Gallery_Status>;
  nsfw?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateGalleryInput = {
  data?: Maybe<GalleryInput>;
};

export type CreateGalleryPayload = {
  __typename?: 'createGalleryPayload';
  gallery?: Maybe<Gallery>;
};

export type UpdateGalleryInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditGalleryInput>;
};

export type UpdateGalleryPayload = {
  __typename?: 'updateGalleryPayload';
  gallery?: Maybe<Gallery>;
};

export type DeleteGalleryInput = {
  where?: Maybe<InputId>;
};

export type DeleteGalleryPayload = {
  __typename?: 'deleteGalleryPayload';
  gallery?: Maybe<Gallery>;
};

export type Gardens = {
  __typename?: 'Gardens';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title: Scalars['String'];
  slug: Scalars['String'];
  contents: Scalars['String'];
};

export type GardensConnection = {
  __typename?: 'GardensConnection';
  values?: Maybe<Array<Maybe<Gardens>>>;
  groupBy?: Maybe<GardensGroupBy>;
  aggregate?: Maybe<GardensAggregator>;
};

export type GardensAggregator = {
  __typename?: 'GardensAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type GardensGroupBy = {
  __typename?: 'GardensGroupBy';
  id?: Maybe<Array<Maybe<GardensConnectionId>>>;
  _id?: Maybe<Array<Maybe<GardensConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<GardensConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<GardensConnectionUpdatedAt>>>;
  title?: Maybe<Array<Maybe<GardensConnectionTitle>>>;
  slug?: Maybe<Array<Maybe<GardensConnectionSlug>>>;
  contents?: Maybe<Array<Maybe<GardensConnectionContents>>>;
};

export type GardensConnectionId = {
  __typename?: 'GardensConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<GardensConnection>;
};

export type GardensConnection_Id = {
  __typename?: 'GardensConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<GardensConnection>;
};

export type GardensConnectionCreatedAt = {
  __typename?: 'GardensConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<GardensConnection>;
};

export type GardensConnectionUpdatedAt = {
  __typename?: 'GardensConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<GardensConnection>;
};

export type GardensConnectionTitle = {
  __typename?: 'GardensConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<GardensConnection>;
};

export type GardensConnectionSlug = {
  __typename?: 'GardensConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<GardensConnection>;
};

export type GardensConnectionContents = {
  __typename?: 'GardensConnectionContents';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<GardensConnection>;
};

export type GardenInput = {
  title: Scalars['String'];
  slug: Scalars['String'];
  contents: Scalars['String'];
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditGardenInput = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  contents?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateGardenInput = {
  data?: Maybe<GardenInput>;
};

export type CreateGardenPayload = {
  __typename?: 'createGardenPayload';
  garden?: Maybe<Gardens>;
};

export type UpdateGardenInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditGardenInput>;
};

export type UpdateGardenPayload = {
  __typename?: 'updateGardenPayload';
  garden?: Maybe<Gardens>;
};

export type DeleteGardenInput = {
  where?: Maybe<InputId>;
};

export type DeleteGardenPayload = {
  __typename?: 'deleteGardenPayload';
  garden?: Maybe<Gardens>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  _id?: Maybe<Array<Maybe<UploadFileConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<UploadFileConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<UploadFileConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnection_Id = {
  __typename?: 'UploadFileConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreatedAt = {
  __typename?: 'UploadFileConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdatedAt = {
  __typename?: 'UploadFileConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  _id?: Maybe<Array<Maybe<UsersPermissionsRoleConnection_Id>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnection_Id = {
  __typename?: 'UsersPermissionsRoleConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
  articles?: Maybe<Array<Maybe<Article>>>;
};


export type UsersPermissionsUserArticlesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  _id?: Maybe<Array<Maybe<UsersPermissionsUserConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdatedAt>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnection_Id = {
  __typename?: 'UsersPermissionsUserConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreatedAt = {
  __typename?: 'UsersPermissionsUserConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdatedAt = {
  __typename?: 'UsersPermissionsUserConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  articles?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  articles?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type ComponentGlobalSell = {
  __typename?: 'ComponentGlobalSell';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  price: Scalars['Int'];
};

export type ComponentGlobalSellInput = {
  price: Scalars['Int'];
};

export type EditComponentGlobalSellInput = {
  id?: Maybe<Scalars['ID']>;
  price?: Maybe<Scalars['Int']>;
};

export type ComponentGlobalShare = {
  __typename?: 'ComponentGlobalShare';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  facebook?: Maybe<Scalars['Boolean']>;
  twitter?: Maybe<Scalars['Boolean']>;
  instagram?: Maybe<Scalars['Boolean']>;
};

export type ComponentGlobalShareInput = {
  facebook?: Maybe<Scalars['Boolean']>;
  twitter?: Maybe<Scalars['Boolean']>;
  instagram?: Maybe<Scalars['Boolean']>;
};

export type EditComponentGlobalShareInput = {
  id?: Maybe<Scalars['ID']>;
  facebook?: Maybe<Scalars['Boolean']>;
  twitter?: Maybe<Scalars['Boolean']>;
  instagram?: Maybe<Scalars['Boolean']>;
};

export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | ArticleCategory | ArticleCategoryConnection | ArticleCategoryAggregator | ArticleCategoryGroupBy | ArticleCategoryConnectionId | ArticleCategoryConnection_Id | ArticleCategoryConnectionCreatedAt | ArticleCategoryConnectionUpdatedAt | ArticleCategoryConnectionTitle | ArticleCategoryConnectionSlug | CreateArticleCategoryPayload | UpdateArticleCategoryPayload | DeleteArticleCategoryPayload | ArticleTags | ArticleTagsConnection | ArticleTagsAggregator | ArticleTagsGroupBy | ArticleTagsConnectionId | ArticleTagsConnection_Id | ArticleTagsConnectionCreatedAt | ArticleTagsConnectionUpdatedAt | ArticleTagsConnectionTitle | ArticleTagsConnectionSlug | CreateArticleTagPayload | UpdateArticleTagPayload | DeleteArticleTagPayload | Article | ArticleConnection | ArticleAggregator | ArticleGroupBy | ArticleConnectionId | ArticleConnection_Id | ArticleConnectionCreatedAt | ArticleConnectionUpdatedAt | ArticleConnectionTitle | ArticleConnectionContent | ArticleConnectionFeatured_Image | ArticleConnectionSlug | ArticleConnectionUsers_Permissions_User | ArticleConnectionExcerpt | ArticleConnectionPublished_At | CreateArticlePayload | UpdateArticlePayload | DeleteArticlePayload | GalleryCategories | GalleryCategoriesConnection | GalleryCategoriesAggregator | GalleryCategoriesGroupBy | GalleryCategoriesConnectionId | GalleryCategoriesConnection_Id | GalleryCategoriesConnectionCreatedAt | GalleryCategoriesConnectionUpdatedAt | GalleryCategoriesConnectionTitle | GalleryCategoriesConnectionSlug | GalleryCategoriesConnectionImage_Large | GalleryCategoriesConnectionImage_Full | GalleryCategoriesConnectionImage_Large_Watermarked | GalleryCategoriesConnectionImage_Full_Watermarked | CreateGalleryCategoryPayload | UpdateGalleryCategoryPayload | DeleteGalleryCategoryPayload | GalleryImage | GalleryImageConnection | GalleryImageAggregator | GalleryImageGroupBy | GalleryImageConnectionId | GalleryImageConnection_Id | GalleryImageConnectionCreatedAt | GalleryImageConnectionUpdatedAt | GalleryImageConnectionCaption | GalleryImageConnectionSlug | GalleryImageConnectionWatermarked | GalleryImageConnectionClean | GalleryImageConnectionShare | GalleryImageConnectionSell | CreateGalleryImagePayload | UpdateGalleryImagePayload | DeleteGalleryImagePayload | GalleryTags | GalleryTagsConnection | GalleryTagsAggregator | GalleryTagsGroupBy | GalleryTagsConnectionId | GalleryTagsConnection_Id | GalleryTagsConnectionCreatedAt | GalleryTagsConnectionUpdatedAt | GalleryTagsConnectionTitle | GalleryTagsConnectionSlug | CreateGalleryTagPayload | UpdateGalleryTagPayload | DeleteGalleryTagPayload | Gallery | GalleryConnection | GalleryAggregator | GalleryGroupBy | GalleryConnectionId | GalleryConnection_Id | GalleryConnectionCreatedAt | GalleryConnectionUpdatedAt | GalleryConnectionTitle | GalleryConnectionSlug | GalleryConnectionDescription | GalleryConnectionFeatured_Image | GalleryConnectionStatus | GalleryConnectionNsfw | CreateGalleryPayload | UpdateGalleryPayload | DeleteGalleryPayload | Gardens | GardensConnection | GardensAggregator | GardensGroupBy | GardensConnectionId | GardensConnection_Id | GardensConnectionCreatedAt | GardensConnectionUpdatedAt | GardensConnectionTitle | GardensConnectionSlug | GardensConnectionContents | CreateGardenPayload | UpdateGardenPayload | DeleteGardenPayload | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnection_Id | UploadFileConnectionCreatedAt | UploadFileConnectionUpdatedAt | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | DeleteFilePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnection_Id | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnection_Id | UsersPermissionsUserConnectionCreatedAt | UsersPermissionsUserConnectionUpdatedAt | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | CreateUserPayload | UpdateUserPayload | DeleteUserPayload | ComponentGlobalSell | ComponentGlobalShare;

export type InputId = {
  id: Scalars['ID'];
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
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
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryArticleCategoriesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryArticleCategoriesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryArticleTagArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryArticleTagsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryArticleTagsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryArticleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryArticlesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryArticlesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryGalleryCategoryArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryGalleryCategoriesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryGalleryCategoriesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryGalleryImageArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryGalleryImagesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryGalleryImagesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryGalleryTagArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryGalleryTagsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryGalleryTagsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryGalleryArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryGalleriesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryGalleriesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryGardenArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryGardensArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryGardensConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createArticleCategory?: Maybe<CreateArticleCategoryPayload>;
  updateArticleCategory?: Maybe<UpdateArticleCategoryPayload>;
  deleteArticleCategory?: Maybe<DeleteArticleCategoryPayload>;
  createArticleTag?: Maybe<CreateArticleTagPayload>;
  updateArticleTag?: Maybe<UpdateArticleTagPayload>;
  deleteArticleTag?: Maybe<DeleteArticleTagPayload>;
  createArticle?: Maybe<CreateArticlePayload>;
  updateArticle?: Maybe<UpdateArticlePayload>;
  deleteArticle?: Maybe<DeleteArticlePayload>;
  createGalleryCategory?: Maybe<CreateGalleryCategoryPayload>;
  updateGalleryCategory?: Maybe<UpdateGalleryCategoryPayload>;
  deleteGalleryCategory?: Maybe<DeleteGalleryCategoryPayload>;
  createGalleryImage?: Maybe<CreateGalleryImagePayload>;
  updateGalleryImage?: Maybe<UpdateGalleryImagePayload>;
  deleteGalleryImage?: Maybe<DeleteGalleryImagePayload>;
  createGalleryTag?: Maybe<CreateGalleryTagPayload>;
  updateGalleryTag?: Maybe<UpdateGalleryTagPayload>;
  deleteGalleryTag?: Maybe<DeleteGalleryTagPayload>;
  createGallery?: Maybe<CreateGalleryPayload>;
  updateGallery?: Maybe<UpdateGalleryPayload>;
  deleteGallery?: Maybe<DeleteGalleryPayload>;
  createGarden?: Maybe<CreateGardenPayload>;
  updateGarden?: Maybe<UpdateGardenPayload>;
  deleteGarden?: Maybe<DeleteGardenPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationCreateArticleCategoryArgs = {
  input?: Maybe<CreateArticleCategoryInput>;
};


export type MutationUpdateArticleCategoryArgs = {
  input?: Maybe<UpdateArticleCategoryInput>;
};


export type MutationDeleteArticleCategoryArgs = {
  input?: Maybe<DeleteArticleCategoryInput>;
};


export type MutationCreateArticleTagArgs = {
  input?: Maybe<CreateArticleTagInput>;
};


export type MutationUpdateArticleTagArgs = {
  input?: Maybe<UpdateArticleTagInput>;
};


export type MutationDeleteArticleTagArgs = {
  input?: Maybe<DeleteArticleTagInput>;
};


export type MutationCreateArticleArgs = {
  input?: Maybe<CreateArticleInput>;
};


export type MutationUpdateArticleArgs = {
  input?: Maybe<UpdateArticleInput>;
};


export type MutationDeleteArticleArgs = {
  input?: Maybe<DeleteArticleInput>;
};


export type MutationCreateGalleryCategoryArgs = {
  input?: Maybe<CreateGalleryCategoryInput>;
};


export type MutationUpdateGalleryCategoryArgs = {
  input?: Maybe<UpdateGalleryCategoryInput>;
};


export type MutationDeleteGalleryCategoryArgs = {
  input?: Maybe<DeleteGalleryCategoryInput>;
};


export type MutationCreateGalleryImageArgs = {
  input?: Maybe<CreateGalleryImageInput>;
};


export type MutationUpdateGalleryImageArgs = {
  input?: Maybe<UpdateGalleryImageInput>;
};


export type MutationDeleteGalleryImageArgs = {
  input?: Maybe<DeleteGalleryImageInput>;
};


export type MutationCreateGalleryTagArgs = {
  input?: Maybe<CreateGalleryTagInput>;
};


export type MutationUpdateGalleryTagArgs = {
  input?: Maybe<UpdateGalleryTagInput>;
};


export type MutationDeleteGalleryTagArgs = {
  input?: Maybe<DeleteGalleryTagInput>;
};


export type MutationCreateGalleryArgs = {
  input?: Maybe<CreateGalleryInput>;
};


export type MutationUpdateGalleryArgs = {
  input?: Maybe<UpdateGalleryInput>;
};


export type MutationDeleteGalleryArgs = {
  input?: Maybe<DeleteGalleryInput>;
};


export type MutationCreateGardenArgs = {
  input?: Maybe<CreateGardenInput>;
};


export type MutationUpdateGardenArgs = {
  input?: Maybe<UpdateGardenInput>;
};


export type MutationDeleteGardenArgs = {
  input?: Maybe<DeleteGardenInput>;
};


export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  info?: Maybe<FileInfoInput>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};






