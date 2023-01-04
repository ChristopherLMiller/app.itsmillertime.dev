import { paginationSettings } from "config";
import { useRouter } from "next/router";
import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { useQuery } from "react-query";
import { DynamicContentContext } from "src/lib/context/dynamicContent";

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
}

export const DynamicContentWrapper: React.FC<DynamicContentProviderTypes> = ({
  children,
  initialProps,
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
      },
    ],
    queryFn: ({ queryKey }) => {
      const [_key] = queryKey;

      const url = `${
        process.env.NEXT_PUBLIC_API_ENDPOINT
      }/post?${createURLParams()}`;
      return fetch(url, {
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
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

    router.push(
      `${router.route}${
        params.toString().length > 0 ? "?" : ""
      }${params.toString()}`,
      undefined,
      {
        shallow: true,
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit, page, sort]); // we only want limit and page, screw eslint!

  const createURLParams = useCallback(() => {
    // create the params to pass
    const params = new URLSearchParams({
      limit: limit.toString(),
      sort,
      start: ((page - 1) * limit).toString(),
      page: page.toString(),
    });

    // check where clause, if its not empty append it
    if (Object.keys(where).length > 0) {
      params.append("where", JSON.stringify(where));
    }

    return params.toString();
  }, [limit, sort, page, where]);

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
