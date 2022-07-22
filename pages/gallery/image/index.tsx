import { useFilesQuery } from "src/graphql/schema/files/files.query.generated";

const ImageLandingPage = () => {
  const { data, isSuccess } = useFilesQuery();

  console.log(data);
  return <div>Notning to see here</div>;
};

export default ImageLandingPage;
