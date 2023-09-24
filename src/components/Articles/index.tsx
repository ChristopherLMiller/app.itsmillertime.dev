import ArticleListItem from "@components/Article/ListItem";
import Card from "@components/Card";
import { CategoriesList, category } from "@components/Dynamic/Categories";
import { DynamicContents } from "@components/Dynamic/Content";
import { Pagination } from "@components/Dynamic/Provider";
import { TagsList, tag } from "@components/Dynamic/Tags";
import { FC } from "react";
import { Article } from "src/graphql/types";
import useDynamicContent from "src/lib/context/dynamicContent";
import styled from "styled-components";

const ArticleList = styled.ul`
  padding-inline-start: 0;
`;

const Columns = styled.div`
  display: grid;
  grid-template-columns: 15% auto;
  gap: 2rem;
  align-items: start;
`;

const Sidebar = styled.div`
  display: flex;
  position: sticky;
  align-self: start;
  top: 0;
  gap: 2rem;
  flex-direction: column;

  ul {
    list-style-type: none;
    padding-inline-start: 0;
    margin-block: 0;
  }
`;

interface ArticleTypes {
  tags: [tag];
  categories: [category];
}
export const ArticleLandingContent: FC<ArticleTypes> = ({
  tags,
  categories,
}) => {
  const { data } = useDynamicContent();

  return (
    <Columns>
      <Sidebar>
        <Card padding={false} subHeading="Tags">
          <TagsList tags={tags} />
        </Card>
        <Card padding={false} subHeading="Categories">
          <CategoriesList categories={categories} />
        </Card>
      </Sidebar>
      <DynamicContents pagination={Pagination.top}>
        <ArticleList>
          {data?.data?.map((article) => (
            <ArticleListItem key={article?.slug} article={article as Article} />
          ))}
        </ArticleList>
      </DynamicContents>
    </Columns>
  );
};
