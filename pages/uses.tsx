import PageLayout from "src/layout/PageLayout";
import Card from "src/components/Card";

const UsesMarkdown = require("data/mdx/uses.mdx").default;

const PrivacyPolicyPage = () => (
  <PageLayout
    meta={{
      title: "Uses",
      description: "The tech and tools that I use",
      useSEO: true,
    }}
  >
    <Card align="left">
      <UsesMarkdown />
    </Card>
  </PageLayout>
);

export default PrivacyPolicyPage;
