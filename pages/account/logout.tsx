import { useAuth } from "src/lib/AuthProvider";
import PageLayout from "src/layout/PageLayout";
import Card from "src/components/Card";
import { useToasts } from "react-toast-notifications";
import { useEffect } from "react";

const LogoutPage = () => {
  const auth = useAuth();
  const { addToast } = useToasts();

  useEffect(() => {
    const result = auth.methods.logout();
    addToast(result.status, result.message);
  });
  return (
    <PageLayout
      meta={{
        title: "Logout",
        description: "Logout",
        useSEO: false,
      }}
    >
      <Card heading="Un-oh">
        <p>Technically you should never see this!</p>
      </Card>
    </PageLayout>
  );
};

export default LogoutPage;
