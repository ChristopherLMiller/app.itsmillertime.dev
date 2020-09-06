import { useAuth } from "src/lib/AuthProvider";
import PageLayout from "src/layout/PageLayout";

const LogoutPage = () => {
  const auth = useAuth();

  auth.methods.logout();

  return (
    <PageLayout
      meta={{
        title: "Logout",
        description: "Logout",
        useSEO: false,
      }}
    />
  );
};
