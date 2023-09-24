export interface createURLParamsTypes {
  take: number;
  order: string;
  page: number;
  where: any;
  published?: string;
}

export const createURLParams = ({
  take,
  order,
  page,
  where,
  select,
}): string => {
  // create the params to pass
  const params = new URLSearchParams({
    take: take.toString(),
    orderBy: JSON.stringify(order),
    skip: ((page - 1) * take).toString(),
    page: page.toString(),
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
