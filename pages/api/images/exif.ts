import { CloudinaryBaseUrl } from "config";
import { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";
const ExifImage = require("exif").ExifImage;

const exif = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { public_id } = JSON.parse(req.body);
  const imageResponse = await fetch(`${CloudinaryBaseUrl}${public_id}.jpg`);
  const imageArrayBuffer = await imageResponse.arrayBuffer();
  const buffer = Buffer.from(imageArrayBuffer);

  const response = new Promise((res, rej) => {
    new ExifImage({ image: buffer }, (error, exifData) => {
      if (error) {
        rej(error);
      }

      res(exifData);
    });
  });

  const data = await response;
  res.json({ status: "success", data });
};

export default exif;
