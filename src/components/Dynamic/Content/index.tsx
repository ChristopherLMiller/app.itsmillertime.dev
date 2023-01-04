import ArticleListItem from "@components/Article/ListItem";
import Card from "@components/Card";
import Paginator from "@components/Paginator";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";
import SyncLoader from "react-spinners/SyncLoader";
import { Article } from "src/graphql/types";
import useDynamicContent from "src/lib/context/dynamicContent";
import styled from "styled-components";
import { defaultTheme } from "styles/default";

const ArticleList = styled.ul`
  padding-inline-start: 0;
`;

export enum Pagination {
  top = "top",
  bottom = "bottom",
  both = "both",
}

export interface DynamicContentsTypes {
  pagination?: Pagination;
}
export const DynamicContents: FC<DynamicContentsTypes> = ({ pagination }) => {
  const { isSuccess, error, data, isLoading, tag } = useDynamicContent();

  return (
    <>
      {error !== null && (
        <Card heading="Uh Oh!">
          <p>
            We were unable to fetch the data requested for whatever reason.
            Check the console for error or try again later.
          </p>
        </Card>
      )}

      {isSuccess && data.data.length === 0 && (
        <Card heading="No posts Found">
          <p>
            Well this is awkward. We couldn&apos;t find any posts for the
            current tag{" "}
            <strong>
              <em>{tag}</em>
            </strong>
            . Please try again or expand to see all{" "}
            <Link href="/blog" shallow>
              here
            </Link>
            .
          </p>
        </Card>
      )}
      {(pagination === Pagination.top || pagination === Pagination.both) && (
        <Paginator />
      )}
      <AnimatePresence mode="wait">
        <motion.span exit={{ opacity: 0 }}>
          {isLoading && (
            <SyncLoader
              size={20}
              margin={10}
              loading={isLoading}
              color={defaultTheme.colors.primary}
            />
          )}
          {isSuccess && (
            <ArticleList>
              {data.data.map((article) => (
                <ArticleListItem
                  key={article?.id}
                  article={article as Article}
                />
              ))}
            </ArticleList>
          )}
        </motion.span>
      </AnimatePresence>

      {(pagination === Pagination.bottom || pagination === Pagination.both) && (
        <Paginator scrollTop={true} />
      )}
    </>
  );
};
