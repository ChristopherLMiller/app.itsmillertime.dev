import { iArticleCategories } from "./articleCategories";
import { iArticleTags } from "./articleTags";
import { iUploadFile } from "./uploadFile";
import { iUser } from "./user";

export interface iArticle {
    id: string;
    title: string;
    createdAt: string;
    updatedAt: string;
    published_at?: string;
    content: string;
    featured_image?: iUploadFile;
    slug: string;
    users_permission_user: iUser;
    article_categories?: Array<iArticleCategories>;
    article_tags?: Array<iArticleTags>;

}