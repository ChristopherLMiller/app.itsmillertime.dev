import { APIEndpoint } from "config";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch(`${APIEndpoint.live}/post-tag`, {
    headers: { "x-api-key": APIEndpoint.key },
  });

  res.status(200).json(await response.json);
}
