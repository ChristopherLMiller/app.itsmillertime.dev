import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface iCredentials {
  username: string;
  password: string;
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: `Credentials`,
      credentials: {
        username: { label: `Email`, type: `email`, placeholder: `jsmith` },
        password: { label: `Password`, type: `password` },
      },
      authorize: async (
        credentials: Record<"username" | "password", string> | undefined
      ) => {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local`,
            {
              method: `POST`,
              headers: {
                "Content-Type": `application/json`,
              },
              body: JSON.stringify({
                identifier: credentials?.username,
                password: credentials?.password,
              }),
            }
          );
          console.log(response);

          if (response.status === 200) {
            const user = await response.json();
            return user;
          } else {
            throw new Error(`Invalid credentials`);
          }
        } catch (error) {
          console.log(error);
          throw new Error("Unable to validate your login information");
        }
      },
    }),
  ],
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

export const config = {
  api: {
    externalResolver: true,
  },
};
