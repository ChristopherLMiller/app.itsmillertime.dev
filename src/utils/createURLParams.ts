export interface createURLParamsTypes {
  limit: number;
  sort: string;
  page: number;
  where: any;
}

export const createURLParams = ({ limit, sort, page, where }): string => {
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
};
