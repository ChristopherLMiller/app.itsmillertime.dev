import { Accordian } from "@components/Accordian";
import ArticleListItem from "@components/Article/ListItem";
import { CategoriesList, category } from "@components/Dynamic/Categories";
import { DynamicContents } from "@components/Dynamic/Content";
import { Pagination } from "@components/Dynamic/Provider";
import { TagsList, tag } from "@components/Dynamic/Tags";
import Panel from "@components/Panel";
import { FC } from "react";
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
  height: 100vh;

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
        <Panel padding={false}>
          <Accordian title="Tags">
            <TagsList tags={tags} />
          </Accordian>
        </Panel>
        <Panel padding={false}>
          <Accordian title="Categories">
            <CategoriesList categories={categories} />
          </Accordian>
        </Panel>
      </Sidebar>
      <DynamicContents pagination={Pagination.top}>
        <ArticleList>
          {data?.map((article) => (
            <ArticleListItem key={article?.slug} article={article} />
          ))}
        </ArticleList>
      </DynamicContents>
    </Columns>
  );
};
