import PageLayout from "src/layout/PageLayout";
import Card from "src/components/Card";

const IndexPage = () => {
  return (
    <PageLayout
      meta={{
        title: "Home",
        description: "Programmer. Amateur Designer. Model Enthusiast.",
        useSEO: true,
      }}
    >
      <Card heading="Welcome" align="left">
        <p>
          Please excuse the mess while I'm remodeling. Many great things are in
          progress and will appear here as they are built.
        </p>

        <p>
          If you want to enjoy what I have to offer so far though go ahead and
          have a look around as I've got many pieces in place, nothing compared
          to what I have to go yet though.
        </p>

        <p>
          If you find any errors or problems you can submit an issue on GitHub,
          or reach me at one of the other places in the sidebar on the left.
        </p>
      </Card>
    </PageLayout>
  );
};

export default IndexPage;
