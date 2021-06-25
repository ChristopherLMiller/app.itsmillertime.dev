import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'next-auth/jwt';

const secret = process.env.JWT_SECRET;

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { slug } = JSON.parse(req.body);
  const token = await jwt.getToken({ req, secret });

  const headers = {};

  if (token) {
    headers[`Authorization`] = `Bearer ${token}`;
  }

  // If the slug isn't supplied just return
  if (!slug) {
    res.status(400).send({ success: false, message: `Missing Slug` });
    res.end();
  }

  const response = await fetch(
    `${process.env.STRAPI_URL}/articles?slug_eq=${slug}`,
    {
      headers,
    }
  );
  const data = await response.json();

  if (data.length > 0) {
    res.send({ success: true, article: data[0] });
  } else {
    res.send({ success: false, message: `Article slug not found` });
  }
};
