
export function EmailTemplate({message}) {
    return `
        <mjml>
            <mj-body>
            <!-- Header -->
                <mj-hero background-color="#ECECEC">
                <mj-image src="https://www.christopherleemiller.me/logo_144.png" width="144px"></mj-image>
                </mj-hero>
                <!-- Content -->
                ${message}
                <!-- Footer -->
            </mj-body>
        </mjml>
    `;
}