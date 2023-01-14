import Card from "@components/Card";
import Paginator from "@components/Paginator";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { FC, ReactNode } from "react";
import SyncLoader from "react-spinners/SyncLoader";
import useDynamicContent from "src/lib/context/dynamicContent";
import { defaultTheme } from "styles/default";
import { Pagination } from "../Provider";

export interface DynamicContentsTypes {
  pagination?: Pagination;
  children: ReactNode;
}
export const DynamicContents: FC<DynamicContentsTypes> = ({
  pagination,
  children,
}) => {
  const { isSuccess, error, data, isLoading, tag } = useDynamicContent();

  return (
    <div>
      {error !== null && (
        <Card heading="Uh Oh!">
          <p>
            We were unable to fetch the data requested for whatever reason.
            Check the console for error or try again later.
          </p>
        </Card>
      )}

      {isSuccess && data?.data?.length === 0 && (
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
      {!error &&
        data?.data?.length > 0 &&
        (pagination === Pagination.top || pagination === Pagination.both) && (
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
          {isSuccess && children}
        </motion.span>
      </AnimatePresence>

      {!error &&
        data?.data?.length > 0 &&
        (pagination === Pagination.bottom ||
          pagination === Pagination.both) && <Paginator />}
    </div>
  );
};
