import { createClient } from "@supabase/supabase-js";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const supabase = createClient(
  "https://jvhdgskxlevrvqfzanen.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2aGRnc2t4bGV2cnZxZnphbmVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMwOTM2MzYsImV4cCI6MTk5ODY2OTYzNn0.ZpO3PI7u3O2DiXkyveF8dD9FGp1aBvl89qA5nLNXgNg"
);

export default async function auth(req: any, res: any) {
  const providers = [
    CredentialsProvider({
      name: `Credentials`,
      credentials: {
        username: { label: `Email`, type: `email`, placeholder: `jsmith` },
        password: { label: `Password`, type: `password` },
      },
      // @ts-expect-error
      async authorize(credentials) {
        const response = await supabase.auth.signInWithPassword({
          email: credentials?.username as string,
          password: credentials?.password as string,
        });

        // check for an authentication error
        if (response.error !== null) {
          throw new Error(response.error.message);
        } else {
          // if we got back data lets return the user data
          if (response.data !== null) {
            return {
              user: {
                user: response.data.user,
                session: response.data.session,
              },
            };
          } else {
            throw new Error("Unable to log in user");
          }
        }
      },
    }),
  ];

  return await NextAuth(req, res, {
    providers,
    secret: process.env.SECRET,
    session: {
      strategy: "jwt",
    },
    pages: {
      signIn: `/login`,
      error: `/login`,
    },
    callbacks: {
      async session({ session, token }) {
        // @ts-ignore
        session.user = token.user;
        // @ts-ignore
        session.token = token.jwt;
        return Promise.resolve(session);
      },
      async jwt({ token, user }) {
        if (user) {
          // @ts-ignore
          token.jwt = user.jwt;
          // @ts-ignore
          token.user = user.user;
        }
        return token;
      },
    },
  });
}

export const config = {
  api: {
    externalResolver: true,
  },
};
