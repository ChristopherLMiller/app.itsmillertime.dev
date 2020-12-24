import { EmailTemplate } from './generic';

export function ContactEmailTemplate({email, message, name}) {
    const markup = `<mj-section background-color="#ECECEC">
        <mj-column>
            <mj-text font-family="helvetica" font-size="30px" text-transform="uppercase" align="center">Contact Form Submission</mj-text>
            <mj-text font-size="20px">Name: ${name}</mj-text>
            <mj-text font-size="20px">Email: ${email}</mj-text>
            <mj-text font-size="20px">Message: ${message}</mj-text>
        </mj-column>
    </mj-section>
    `;

    return EmailTemplate(markup);
}