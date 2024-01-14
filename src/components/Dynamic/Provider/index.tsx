import { useSession } from "@supabase/auth-helpers-react";
import { paginationSettings } from "config";
import { useRouter } from "next/router";
import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { useQuery } from "react-query";
import { DynamicContentContext } from "src/lib/context/dynamicContent";
import { fetchFromAPI } from "src/lib/fetch";
import { createURLParams } from "src/utils/createURLParams";

export enum Pagination {
  top = "top",
  bottom = "bottom",
  both = "both",
}
export interface DynamicContentProviderTypes {
  initialProps: {
    take?: number;
    page?: number;
    order?: string;
    tag?: string;
    category?: string;
    where?: any;
    select?: string;
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
  const session = useSession();

  const [queryEnabled, setQueryEnabled] = useState(false);
  const [order, setOrder] = useState(
    initialProps.order || paginationSettings.orderDefault,
  );
  const [take, setTake] = useState<number>(
    initialProps.take || (paginationSettings.perPage as number),
  );
  const [skip, setSkip] = useState<number>(0);
  const [where, setWhere] = useState(initialProps.where || {});
  const [page, setPage] = useState(initialProps.page || 1);
  const [tag, setTag] = useState(initialProps.tag || null);
  const [category, setCategory] = useState(initialProps.category || null);
  const { data, error, isLoading, isSuccess } = useQuery({
    queryKey: [
      "posts",
      {
        take,
        order,
        skip: (page - 1) * take,
        where: where,
        tag,
        category,
      },
    ],
    queryFn: async ({ queryKey }) => {
      const [_key] = queryKey;
      const url = `${contentPath}?${createURLParams({
        take,
        order,
        page,
        where,
        select: initialProps.select,
      })}`;

      // setup the headers
      const requestHeaders = {};
      // @ts-ignore
      const access_token = session?.access_token || null;

      if (access_token) {
        requestHeaders["Authorization"] = `Bearer ${access_token}`;
      }

      // TODO this is a hack to get around the caching issue i'm having
      const finalUrl =
        session?.user?.id !== undefined
          ? `${url}&user-id=${session?.user?.id}`
          : url;

      const { data } = await fetchFromAPI(finalUrl, requestHeaders);
      return data;
    },
    enabled: queryEnabled,
  });

  // This function is used to update the URL in the browser based on user input
  const updateURL = useCallback(() => {
    const params = new URLSearchParams();

    // add on the page, only if not the front page
    if (page > 1) {
      params.append("page", page.toString());
    }

    // only add the take part if its othe than default
    if (take !== paginationSettings.perPage) {
      params.append("take", take.toString());
    }

    if (order !== paginationSettings.orderDefault) {
      // @ts-ignore
      params.append("order", order);
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
      },
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [take, page, order, tag, category]); // we only want take and page, screw eslint!

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

  // Runs on initial setup as well as when the page or take changes
  useEffect(() => {
    setSkip((page - 1) * take);
    updateURL();
  }, [page, take, updateURL]);

  // Runs and waits for the user session to be populated, then enables the query
  useEffect(() => {
    //if (session.status !== "loading") {
    setQueryEnabled(true);
    //}
  }, []);

  const memoedValue = useMemo(
    () => ({
      setOrder,
      setTake,
      setPage,
      setSkip,
      setWhere,
      setCategory,
      setTag,
      data,
      error,
      isLoading,
      isSuccess,
      order,
      page,
      take,
      where,
      skip,
      category,
      tag,
    }),
    [
      category,
      data,
      error,
      isLoading,
      isSuccess,
      take,
      page,
      order,
      skip,
      tag,
      where,
    ],
  );

  return (
    // @ts-ignore
    <DynamicContentContext.Provider value={memoedValue}>
      {children}
    </DynamicContentContext.Provider>
  );
};
