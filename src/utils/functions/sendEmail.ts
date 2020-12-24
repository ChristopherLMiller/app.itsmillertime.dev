import mjml2html from 'mjml';

const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send'

const sendEmail = async ({ toEmail, fromEmail, fromName, subject, mjmlString }) => {
    const htmlOutput = mjml2html(mjmlString).html;

    fetch(SENDGRID_API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`
        },
        body: JSON.stringify({
            personalizations: [
            {
                to: [
                {
                    email: toEmail
                }
                ],
                subject: subject
            }
        ],
        from: {
            email: fromEmail,
            name: fromName
        },
        content: [
            {
            type: 'text/html',
            value: htmlOutput
            }
        ]
        })
    });
}

export { sendEmail };