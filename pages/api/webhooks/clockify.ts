import { ServerResponse } from "http";
import { NextApiRequest, NextApiResponse } from "next";

const clockify = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<ServerResponse> => {
  const authHeader = req.headers["clockify-signature"];

  if (authHeader != process.env.CLOCKIFY_WEBHOOK_KEY) {
    console.log("Received invalid token");
    res.status(403).json({ message: `Unauthorized` });
    res.end();
    return;
  }
  t;

  res.end();
  return;
};

export default clockify;
