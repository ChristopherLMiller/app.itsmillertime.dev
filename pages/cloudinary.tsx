import Panel from "@components/Panel";
import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";
import { NextPage } from "next";
import PageLayout from "src/layout/PageLayout";
import { fetchFromAPI } from "src/lib/fetch";

const CloudinaryPage: NextPage = () => {
  return (
    <PageLayout title="Upload Asset" description="Cloudinary Asset">
      <Panel>Test</Panel>
    </PageLayout>
  );
};

export const getServerSideProps = async (ctx) => {
  // Create authenticated Supabase Client
  const supabase = createPagesServerClient(ctx);
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };

  // Retrieve provider_token & logged in user's third-party id from metadata
  const { user } = session;
  const userId = user.id;

  const { data, statusCode } = await fetchFromAPI(
    `/auth/permissions/user/${userId}`,
  );

  if (statusCode === 200) {
    if (!data.nodes.includes("CLOUDINARY.UPLOAD_FILE")) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  }

  return { props: {} };
};
export default CloudinaryPage;
