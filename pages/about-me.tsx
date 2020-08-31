import PageLayout from "src/layout/PageLayout";
import Card from "src/components/Card";

const AboutMeMarkdown = require("data/mdx/about-me.mdx").default;

const PrivacyPolicyPage = () => (
  <PageLayout
    meta={{
      title: "About Me",
      description: "Where I came from and where I am now",
      useSEO: true,
    }}
  >
    <Card align="left">
      <AboutMeMarkdown />
    </Card>
  </PageLayout>
);

export default PrivacyPolicyPage;
