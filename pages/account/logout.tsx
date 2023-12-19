import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const LogoutPage: NextPage = () => {
  const supabase = useSupabaseClient();
  const router = useRouter();

  useEffect(() => {
    supabase.auth.signOut();
    router.push("/");
  });

  return null;
};

export default LogoutPage;
