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

  const { event, model, entry } = req.body;

  switch (event) {
    case `entry.create`:
      console.log(`created entry of type ${model}`);
      break;
    case `entry.edit`:
      console.log(`edited an entry`);
    case `entry.delete`:
      console.log(`deleted entry`);
      break;
    case `entry.update`:
      // When an entry is update there isn't much we need to handle, so we'll just log it to the console
      // for the sake of seeing those logs
      switch (model) {
        case "pages":
          // If a page is updated, lets relvalidate the cache for it
          try {
            await res.unstable_revalidate(`/${entry.slug}`);
            console.log(`revalidated cache for page ${entry.slug}`);
            res.json({ message: "Revalidated", revalidated: true });
          } catch (error) {
            res.status(500).send("Failed to revalidate");
          }
          break;
        default:
          res.status(400).json({ message: "Unknown model" });
          break;
      }

      // TODO: send message to discord webhook
      await fetch(
        "https://discord.com/api/webhooks/866325164748177418/Ft-zhx5l-NTVf9vl7bxzX6LMEB9npJydXUcAtHqxmfZhTjwg2U0cw-vdx3CC-ARQQAa4",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: "CLM.me",
            avatar_url: "",

            content: `Updated Strapi entry for ${model}: '${entry.title}'`,
          }),
        }
      );
      break;
    case `entry.publish`:
    case `entry.unpublish`:
    case `trigger-test`:
      console.log(`Received a test trigger of the webhook`);
      break;

    default:
      res.status(400).json({ message: `Unknown event` });
      break;
  }

  res.end();
};

export default webhook;
