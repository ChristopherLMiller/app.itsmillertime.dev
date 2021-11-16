import { NextApiRequest, NextApiResponse } from "next";

const preview = (req: NextApiRequest, res: NextApiResponse): void => {
  res.setPreviewData({});
  res.end(`Preview mode enabled`);
};

export default preview;
