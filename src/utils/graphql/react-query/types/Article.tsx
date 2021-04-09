import { InputId, Maybe, Scalars } from '.';
import { ArticleCategory } from './ArticleCategory';
import { ArticleTags } from './ArticleTags';
import { UploadFile } from './UploadFile';
import { UsersPermissionsUser } from './UsersPermissions';

export type Article = {
  __typename?: `Article`;
  id: Scalars[`ID`];
  _id: Scalars[`ID`];
  createdAt: Scalars[`DateTime`];
  updatedAt: Scalars[`DateTime`];
  title: Scalars[`String`];
  content: Scalars[`String`];
  featured_image?: Maybe<UploadFile>;
  slug: Scalars[`String`];
  users_permissions_user?: Maybe<UsersPermissionsUser>;
  excerpt?: Maybe<Scalars[`String`]>;
  published_at?: Maybe<Scalars[`DateTime`]>;
  article_categories?: Maybe<Array<Maybe<ArticleCategory>>>;
  article_tags?: Maybe<Array<Maybe<ArticleTags>>>;
};

export type ArticleArticle_CategoriesArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
};

export type ArticleArticle_TagsArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
};

export type ArticleConnection = {
  __typename?: `ArticleConnection`;
  values?: Maybe<Array<Maybe<Article>>>;
  groupBy?: Maybe<ArticleGroupBy>;
  aggregate?: Maybe<ArticleAggregator>;
};

export type ArticleAggregator = {
  __typename?: `ArticleAggregator`;
  count?: Maybe<Scalars[`Int`]>;
  totalCount?: Maybe<Scalars[`Int`]>;
};

export type ArticleGroupBy = {
  __typename?: `ArticleGroupBy`;
  id?: Maybe<Array<Maybe<ArticleConnectionId>>>;
  _id?: Maybe<Array<Maybe<ArticleConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<ArticleConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<ArticleConnectionUpdatedAt>>>;
  title?: Maybe<Array<Maybe<ArticleConnectionTitle>>>;
  content?: Maybe<Array<Maybe<ArticleConnectionContent>>>;
  featured_image?: Maybe<Array<Maybe<ArticleConnectionFeatured_Image>>>;
  slug?: Maybe<Array<Maybe<ArticleConnectionSlug>>>;
  users_permissions_user?: Maybe<
    Array<Maybe<ArticleConnectionUsers_Permissions_User>>
  >;
  excerpt?: Maybe<Array<Maybe<ArticleConnectionExcerpt>>>;
  published_at?: Maybe<Array<Maybe<ArticleConnectionPublished_At>>>;
};

export type ArticleConnectionId = {
  __typename?: `ArticleConnectionId`;
  key?: Maybe<Scalars[`ID`]>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnection_Id = {
  __typename?: `ArticleConnection_id`;
  key?: Maybe<Scalars[`ID`]>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnectionCreatedAt = {
  __typename?: `ArticleConnectionCreatedAt`;
  key?: Maybe<Scalars[`DateTime`]>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnectionUpdatedAt = {
  __typename?: `ArticleConnectionUpdatedAt`;
  key?: Maybe<Scalars[`DateTime`]>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnectionTitle = {
  __typename?: `ArticleConnectionTitle`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnectionContent = {
  __typename?: `ArticleConnectionContent`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnectionFeatured_Image = {
  __typename?: `ArticleConnectionFeatured_image`;
  key?: Maybe<Scalars[`ID`]>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnectionSlug = {
  __typename?: `ArticleConnectionSlug`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnectionUsers_Permissions_User = {
  __typename?: `ArticleConnectionUsers_permissions_user`;
  key?: Maybe<Scalars[`ID`]>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnectionExcerpt = {
  __typename?: `ArticleConnectionExcerpt`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnectionPublished_At = {
  __typename?: `ArticleConnectionPublished_at`;
  key?: Maybe<Scalars[`DateTime`]>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleInput = {
  title: Scalars[`String`];
  content: Scalars[`String`];
  featured_image?: Maybe<Scalars[`ID`]>;
  slug: Scalars[`String`];
  users_permissions_user?: Maybe<Scalars[`ID`]>;
  article_categories?: Maybe<Array<Maybe<Scalars[`ID`]>>>;
  article_tags?: Maybe<Array<Maybe<Scalars[`ID`]>>>;
  excerpt?: Maybe<Scalars[`String`]>;
  published_at?: Maybe<Scalars[`DateTime`]>;
  created_by?: Maybe<Scalars[`ID`]>;
  updated_by?: Maybe<Scalars[`ID`]>;
};

export type EditArticleInput = {
  title?: Maybe<Scalars[`String`]>;
  content?: Maybe<Scalars[`String`]>;
  featured_image?: Maybe<Scalars[`ID`]>;
  slug?: Maybe<Scalars[`String`]>;
  users_permissions_user?: Maybe<Scalars[`ID`]>;
  article_categories?: Maybe<Array<Maybe<Scalars[`ID`]>>>;
  article_tags?: Maybe<Array<Maybe<Scalars[`ID`]>>>;
  excerpt?: Maybe<Scalars[`String`]>;
  published_at?: Maybe<Scalars[`DateTime`]>;
  created_by?: Maybe<Scalars[`ID`]>;
  updated_by?: Maybe<Scalars[`ID`]>;
};

export type CreateArticleInput = {
  data?: Maybe<ArticleInput>;
};

export type CreateArticlePayload = {
  __typename?: `createArticlePayload`;
  article?: Maybe<Article>;
};

export type UpdateArticleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditArticleInput>;
};

export type UpdateArticlePayload = {
  __typename?: `updateArticlePayload`;
  article?: Maybe<Article>;
};

export type DeleteArticleInput = {
  where?: Maybe<InputId>;
};

export type DeleteArticlePayload = {
  __typename?: `deleteArticlePayload`;
  article?: Maybe<Article>;
};
