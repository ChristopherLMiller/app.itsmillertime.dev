import { useAuth } from "src/lib/AuthProvider";
import PageLayout from "src/components/layout/PageLayout";
import { NextPage } from "next";
import cookies from "next-cookies";

const MyAccount: NextPage = () => {
  const auth = useAuth();

  return (
    <PageLayout
      meta={{
        title: "My Account",
        description: "Manage your account",
        useSEO: false,
      }}
    >
      <div>
        <p>Username: {auth.methods.getUsername()}</p>
        <p>Email: {auth.methods.getEmail()}</p>
        <p>Account Confirmed: {auth.methods.isAccountConfirmed()}</p>
        <p>Account Status: {auth.methods.isAccountBlocked() ? "Yes" : "No"}</p>
        <hr />
        <p>Role: {auth.methods.getRole()}</p>
        <hr />
        <p>
          <button onClick={() => auth.methods.logout()}>Logout</button>
        </p>
      </div>
    </PageLayout>
  );
};

export default MyAccount;
