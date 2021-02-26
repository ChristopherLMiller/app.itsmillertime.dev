export interface iArticleCategories {
  article_categories: Array<iArticleCategory>;
}
export interface iArticleCategory {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  slug: string;
}
