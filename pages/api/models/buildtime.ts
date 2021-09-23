import { NextApiRequest, NextApiResponse } from "next";

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { project_id } = JSON.parse(req.body);

  // if the project ID isn't supplied just return
  if (!project_id) {
    res.status(400).send({ success: false, message: `Missing Project ID` });
    res.end();
  }

  // Setup headers to fetch from clockify
  const headers = {
    Accept: `application/json`,
    "Content-Type": `application/json`,
    "X-Api-Key": process.env.CLOCKIFY_API_KEY,
  };

  // now fetch the data
  const response = await fetch(
    `https://api.clockify.me/api/workspaces/${process.env.CLOCKIFY_WORKSPACE_ID}/projects/${project_id}`,
    {
      headers,
    }
  );
  const data = await response.json();

  // If we got data base then the duration is in that
  if (data) {
    res.send({ success: true, duration: data.duration });
  }
};
