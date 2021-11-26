import { NextApiRequest, NextApiResponse } from "next";
import { sendEmail } from "src/utils";

const emailer = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === `POST`) {
    await sendEmail(req.body);
    return res.status(200).end();
  }
  return res.status(404).json({
    error: {
      code: `not_found`,
      message: `The requested endpoint was not found or doesn't support this method.`,
    },
  });
};

export default emailer;
