import { InputId, Maybe, Scalars } from '.';

export type ArticleCategory = {
  __typename?: `ArticleCategory`;
  id: Scalars[`ID`];
  _id: Scalars[`ID`];
  createdAt: Scalars[`DateTime`];
  updatedAt: Scalars[`DateTime`];
  title: Scalars[`String`];
  slug: Scalars[`String`];
};

export type ArticleCategoryConnection = {
  __typename?: `ArticleCategoryConnection`;
  values?: Maybe<Array<Maybe<ArticleCategory>>>;
  groupBy?: Maybe<ArticleCategoryGroupBy>;
  aggregate?: Maybe<ArticleCategoryAggregator>;
};

export type ArticleCategoryAggregator = {
  __typename?: `ArticleCategoryAggregator`;
  count?: Maybe<Scalars[`Int`]>;
  totalCount?: Maybe<Scalars[`Int`]>;
};

export type ArticleCategoryGroupBy = {
  __typename?: `ArticleCategoryGroupBy`;
  id?: Maybe<Array<Maybe<ArticleCategoryConnectionId>>>;
  _id?: Maybe<Array<Maybe<ArticleCategoryConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<ArticleCategoryConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<ArticleCategoryConnectionUpdatedAt>>>;
  title?: Maybe<Array<Maybe<ArticleCategoryConnectionTitle>>>;
  slug?: Maybe<Array<Maybe<ArticleCategoryConnectionSlug>>>;
};

export type ArticleCategoryConnectionId = {
  __typename?: `ArticleCategoryConnectionId`;
  key?: Maybe<Scalars[`ID`]>;
  connection?: Maybe<ArticleCategoryConnection>;
};

export type ArticleCategoryConnection_Id = {
  __typename?: `ArticleCategoryConnection_id`;
  key?: Maybe<Scalars[`ID`]>;
  connection?: Maybe<ArticleCategoryConnection>;
};

export type ArticleCategoryConnectionCreatedAt = {
  __typename?: `ArticleCategoryConnectionCreatedAt`;
  key?: Maybe<Scalars[`DateTime`]>;
  connection?: Maybe<ArticleCategoryConnection>;
};

export type ArticleCategoryConnectionUpdatedAt = {
  __typename?: `ArticleCategoryConnectionUpdatedAt`;
  key?: Maybe<Scalars[`DateTime`]>;
  connection?: Maybe<ArticleCategoryConnection>;
};

export type ArticleCategoryConnectionTitle = {
  __typename?: `ArticleCategoryConnectionTitle`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<ArticleCategoryConnection>;
};

export type ArticleCategoryConnectionSlug = {
  __typename?: `ArticleCategoryConnectionSlug`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<ArticleCategoryConnection>;
};

export type ArticleCategoryInput = {
  title: Scalars[`String`];
  slug: Scalars[`String`];
  created_by?: Maybe<Scalars[`ID`]>;
  updated_by?: Maybe<Scalars[`ID`]>;
};

export type EditArticleCategoryInput = {
  title?: Maybe<Scalars[`String`]>;
  slug?: Maybe<Scalars[`String`]>;
  created_by?: Maybe<Scalars[`ID`]>;
  updated_by?: Maybe<Scalars[`ID`]>;
};

export type CreateArticleCategoryInput = {
  data?: Maybe<ArticleCategoryInput>;
};

export type CreateArticleCategoryPayload = {
  __typename?: `createArticleCategoryPayload`;
  articleCategory?: Maybe<ArticleCategory>;
};

export type UpdateArticleCategoryInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditArticleCategoryInput>;
};

export type UpdateArticleCategoryPayload = {
  __typename?: `updateArticleCategoryPayload`;
  articleCategory?: Maybe<ArticleCategory>;
};

export type DeleteArticleCategoryInput = {
  where?: Maybe<InputId>;
};

export type DeleteArticleCategoryPayload = {
  __typename?: `deleteArticleCategoryPayload`;
  articleCategory?: Maybe<ArticleCategory>;
};
