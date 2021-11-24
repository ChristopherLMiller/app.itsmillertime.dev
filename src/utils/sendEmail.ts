//import mjml2html from 'mjml';

import { sendgrid } from "config";

type sendEmailTypes = {
  toEmail: string;
  fromEmail: string;
  fromName: string;
  subject: string;
  mjmlString: string;
};
const sendEmail = async ({
  toEmail,
  fromEmail,
  fromName,
  subject,
  mjmlString,
}: sendEmailTypes): Promise<unknown> => {
  const htmlOutput = `<h1>Test</h1>`; //mjml2html(mjmlString).html;

  return fetch(sendgrid.endpoint, {
    method: `POST`,
    headers: {
      "Content-Type": `application/json`,
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email: toEmail,
            },
          ],
          subject: subject,
        },
      ],
      from: {
        email: fromEmail,
        name: fromName,
      },
      content: [
        {
          type: `text/html`,
          value: htmlOutput,
        },
      ],
    }),
  });
};

export { sendEmail };
