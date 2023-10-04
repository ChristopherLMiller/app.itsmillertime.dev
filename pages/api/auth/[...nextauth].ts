import { createClient } from "@supabase/supabase-js";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

console.log(process.env.NEXT_PUBLIC_SUPABASE_URL);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
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
