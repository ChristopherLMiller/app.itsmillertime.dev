import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
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
    default:
      console.log("shouldnt have got here");
      break;
  }

  res.end();
};
