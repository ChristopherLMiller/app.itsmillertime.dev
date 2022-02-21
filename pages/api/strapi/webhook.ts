import { ServerResponse } from "http";
import { NextApiRequest, NextApiResponse } from "next";

const webhook = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<ServerResponse> => {
  const authHeader = req.headers.authorization;

  if (authHeader != `${process.env.STRAPI_WEBHOOK_KEY}`) {
    console.log("Received invalid token");
    res.status(403).json({ message: `Unauthorized` });
    res.end();
    return;
  }

  const { event, model } = req.body;

  switch (event) {
    case `entry.create`:
      console.log(`created entry of type ${model}`);
      break;
    case `entry.edit`:
      console.log(`edited an entry`);
      try {
        await res.unstable_revalidate("/privacy-policy");
        res.json({ revalidated: true });
      } catch (error) {
        res.status(500).send("Error revalidating");
      }
    case `entry.delete`:
      console.log(`deleted entry`);
      break;
    case `trigger-test`:
      console.log(`Received a test trigger of the webhook`);
      break;
    default:
      console.log(`shouldnt have got here`);
      console.log(event);
      break;
  }

  res.end();
};

export default webhook;
