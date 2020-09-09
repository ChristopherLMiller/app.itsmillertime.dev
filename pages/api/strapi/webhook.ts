import { NextApiRequest, NextApiResponse } from "next";
import logger from "src/utils/functions/logger";

require("dotenv").config();

export default (req: NextApiRequest, res: NextApiResponse) => {
  const authHeader = req.headers.authorization;

  if (authHeader != `${process.env.STRAPI_WEBHOOK_KEY}`) {
    res.status(403);
    res.end();
  }

  const { event, model } = req.body;

  switch (event) {
    case "entry.create":
      console.log(`created entry of type ${model}`);
      break;
    case "entry.edit":
      console.log("edited an entry");
      break;
    case "entry.delete":
      console.log("deleted entry");
      break;
    case "trigger-test":
      console.log("Received a test trigger of the webhook");
      break;
    default:
      console.log("shouldnt have got here");
      console.log(event);
      break;
  }

  res.end();
};
