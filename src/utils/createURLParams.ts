export interface createURLParamsTypes {
  take: number;
  order: string;
  page: number;
  where: any;
  published?: string;
}

export const createURLParams = ({
  take,
  orderField,
  orderDirection,
  page,
  where,
  select,
}): string => {
  // create the params to pass
  const params = new URLSearchParams({
    take: take.toString(),
    orderBy: orderField,
    orderDirection: orderDirection,
    skip: ((page - 1) * take).toString(),
    page: page.toString(),
    include: "tags,category",
  });

  // check where clause, if its not empty append it
  if (Object.keys(where).length > 0) {
    params.append("where", JSON.stringify(where));
  }

  // append on the select clause if there is one
  if (select) {
    params.append("select", select);
  }

  return params.toString();
};
