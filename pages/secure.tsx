import { useAuth } from "src/lib/AuthProvider";
import { useRouter } from "next/router";

const SecurePage = () => {
  const auth = useAuth();
  const router = useRouter();

  if (!auth.isAuthenticated && process.browser) {
    router.push("/");
  }

  return (
    <div>
      <h1>Secure Page</h1>
      <p>You are here because you are logged in!</p>
      <p>This will not be visible to all!</p>
    </div>
  );
};

export default SecurePage;
