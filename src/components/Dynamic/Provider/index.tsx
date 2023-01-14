import { APIEndpoint, paginationSettings } from "config";
import { useRouter } from "next/router";
import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { useQuery } from "react-query";
import { DynamicContentContext } from "src/lib/context/dynamicContent";
import { createURLParams } from "src/utils/createURLParams";

export enum Pagination {
  top = "top",
  bottom = "bottom",
  both = "both",
}
export interface DynamicContentProviderTypes {
  initialProps: {
    limit?: number;
    page?: number;
    sort?: string;
    tag?: string;
    category?: string;
    where?: any;
  };
  children: ReactNode;
  contentPath: string;
  tags?: [];
  categories?: [];
}

export const DynamicContentProvider: React.FC<DynamicContentProviderTypes> = ({
  children,
  initialProps,
  contentPath,
}) => {
  const router = useRouter();
  const [sort, setSort] = useState(
    initialProps.sort || paginationSettings.defaultSort
  );
  const [limit, setLimit] = useState<number>(
    initialProps.limit || (paginationSettings.perPage as number)
  );
  const [start, setStart] = useState<number>(0);
  const [where, setWhere] = useState(initialProps.where || {});
  const [page, setPage] = useState(initialProps.page || 1);
  const [tag, setTag] = useState(initialProps.tag || null);
  const [category, setCategory] = useState(initialProps.category || null);

  const { data, error, isLoading, isSuccess } = useQuery({
    queryKey: [
      "posts",
      {
        limit,
        sort,
        start: (page - 1) * limit,
        where: where,
        tag,
        category,
      },
    ],
    queryFn: ({ queryKey }) => {
      const [_key] = queryKey;
      const url = `${APIEndpoint.live}/${contentPath}?${createURLParams({
        limit,
        sort,
        page,
        where,
      })}`;
      return fetch(url, {
        headers: {
          "x-api-key": APIEndpoint.key,
        },
      }).then((res) => res.json());
    },
  });

  // This function is used to update the URL in the browser based on user input
  const updateURL = useCallback(() => {
    const params = new URLSearchParams();

    // add on the page, only if not the front page
    if (page > 1) {
      params.append("page", page.toString());
    }

    // only add the limit part if its othe than default
    if (limit !== paginationSettings.perPage) {
      params.append("limit", limit.toString());
    }

    if (sort !== paginationSettings.defaultSort) {
      params.append("sort", sort);
    }

    // update category
    if (category !== null && category !== "NULL") {
      params.append("category", category);
    }

    if (tag !== null && tag !== "NULL") {
      params.append("tag", tag);
    }

    router.push(
      `${router.route}${
        params.toString().length > 0 ? "?" : ""
      }${params.toString()}`,
      undefined,
      {
        shallow: true,
      }
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit, page, sort, tag, category]); // we only want limit and page, screw eslint!

  // Use effect to run when tag or category changes, updates the where clause
  // to the format needed for the backend to accept
  useEffect(() => {
    let newWhereClause = where;

    if (category !== null) {
      newWhereClause.category = {
        slug: category === "NULL" ? undefined : category,
      };
      setWhere(newWhereClause);
    }
    if (tag !== null) {
      if (tag === "NULL") {
        newWhereClause.tags = undefined;
      } else {
        newWhereClause.tags = {
          some: { slug: tag },
        };
      }
      setWhere(newWhereClause);
    }

    // after we have set filtering options we need to go back to page one as well
    setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, tag, where]);

  // Runs on initial setup as well as when the page or limit changes
  useEffect(() => {
    setStart((page - 1) * limit);
    updateURL();
  }, [page, limit, updateURL]);

  const memoedValue = useMemo(
    () => ({
      setSort,
      setLimit,
      setPage,
      setStart,
      setWhere,
      setCategory,
      setTag,
      data,
      error,
      isLoading,
      isSuccess,
      sort,
      page,
      limit,
      where,
      start,
      category,
      tag,
    }),
    [
      category,
      data,
      error,
      isLoading,
      isSuccess,
      limit,
      page,
      sort,
      start,
      tag,
      where,
    ]
  );

  return (
    <DynamicContentContext.Provider value={memoedValue}>
      {children}
    </DynamicContentContext.Provider>
  );
};
