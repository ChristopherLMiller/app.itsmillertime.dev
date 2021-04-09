import { InputId, Maybe, Scalars } from '.';

export type ArticleTags = {
  __typename?: `ArticleTags`;
  id: Scalars[`ID`];
  _id: Scalars[`ID`];
  createdAt: Scalars[`DateTime`];
  updatedAt: Scalars[`DateTime`];
  title: Scalars[`String`];
  slug: Scalars[`String`];
};

export type ArticleTagsConnection = {
  __typename?: `ArticleTagsConnection`;
  values?: Maybe<Array<Maybe<ArticleTags>>>;
  groupBy?: Maybe<ArticleTagsGroupBy>;
  aggregate?: Maybe<ArticleTagsAggregator>;
};

export type ArticleTagsAggregator = {
  __typename?: `ArticleTagsAggregator`;
  count?: Maybe<Scalars[`Int`]>;
  totalCount?: Maybe<Scalars[`Int`]>;
};

export type ArticleTagsGroupBy = {
  __typename?: `ArticleTagsGroupBy`;
  id?: Maybe<Array<Maybe<ArticleTagsConnectionId>>>;
  _id?: Maybe<Array<Maybe<ArticleTagsConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<ArticleTagsConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<ArticleTagsConnectionUpdatedAt>>>;
  title?: Maybe<Array<Maybe<ArticleTagsConnectionTitle>>>;
  slug?: Maybe<Array<Maybe<ArticleTagsConnectionSlug>>>;
};

export type ArticleTagsConnectionId = {
  __typename?: `ArticleTagsConnectionId`;
  key?: Maybe<Scalars[`ID`]>;
  connection?: Maybe<ArticleTagsConnection>;
};

export type ArticleTagsConnection_Id = {
  __typename?: `ArticleTagsConnection_id`;
  key?: Maybe<Scalars[`ID`]>;
  connection?: Maybe<ArticleTagsConnection>;
};

export type ArticleTagsConnectionCreatedAt = {
  __typename?: `ArticleTagsConnectionCreatedAt`;
  key?: Maybe<Scalars[`DateTime`]>;
  connection?: Maybe<ArticleTagsConnection>;
};

export type ArticleTagsConnectionUpdatedAt = {
  __typename?: `ArticleTagsConnectionUpdatedAt`;
  key?: Maybe<Scalars[`DateTime`]>;
  connection?: Maybe<ArticleTagsConnection>;
};

export type ArticleTagsConnectionTitle = {
  __typename?: `ArticleTagsConnectionTitle`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<ArticleTagsConnection>;
};

export type ArticleTagsConnectionSlug = {
  __typename?: `ArticleTagsConnectionSlug`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<ArticleTagsConnection>;
};

export type ArticleTagInput = {
  title: Scalars[`String`];
  slug: Scalars[`String`];
  created_by?: Maybe<Scalars[`ID`]>;
  updated_by?: Maybe<Scalars[`ID`]>;
};

export type EditArticleTagInput = {
  title?: Maybe<Scalars[`String`]>;
  slug?: Maybe<Scalars[`String`]>;
  created_by?: Maybe<Scalars[`ID`]>;
  updated_by?: Maybe<Scalars[`ID`]>;
};

export type CreateArticleTagInput = {
  data?: Maybe<ArticleTagInput>;
};

export type CreateArticleTagPayload = {
  __typename?: `createArticleTagPayload`;
  articleTag?: Maybe<ArticleTags>;
};

export type UpdateArticleTagInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditArticleTagInput>;
};

export type UpdateArticleTagPayload = {
  __typename?: `updateArticleTagPayload`;
  articleTag?: Maybe<ArticleTags>;
};

export type DeleteArticleTagInput = {
  where?: Maybe<InputId>;
};

export type DeleteArticleTagPayload = {
  __typename?: `deleteArticleTagPayload`;
  articleTag?: Maybe<ArticleTags>;
};
