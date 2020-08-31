import PageLayout from "src/layout/PageLayout";
import Card from "src/components/Card";

const PrivacyPolicyMarkdown = require("data/mdx/privacy-policy.mdx").default;

const PrivacyPolicyPage = () => (
  <PageLayout
    meta={{
      title: "Privacy Policy",
      description: "My policies regarding your privacy and safety",
      useSEO: true,
    }}
  >
    <Card align="left">
      <PrivacyPolicyMarkdown />
    </Card>
  </PageLayout>
);

export default PrivacyPolicyPage;
