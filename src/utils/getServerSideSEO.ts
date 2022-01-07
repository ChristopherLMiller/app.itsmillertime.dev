import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import { ParsedUrlQuery } from "querystring";

export async function getServerSideSEO(
  url: string,
  context: GetServerSidePropsContext<ParsedUrlQuery>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> {
  const session = await getSession(context);
  const requestHeaders = new Headers({
    Authorization: `Bearer ${session?.jwt}`,
  });

  const response = await fetch(url, {
    headers: session ? requestHeaders : null,
  });

  return response;
}
