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
      authorize: async (credentials: iCredentials) => {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local`,
            {
              method: `POST`,
              headers: {
                "Content-Type": `application/json`,
              },
              body: JSON.stringify({
                identifier: credentials.username,
                password: credentials.password,
              }),
            }
          );

          if (response.status === 200) {
            return await response.json();
          } else {
            throw new Error(`Invalid credentials`);
          }
        } catch (error) {
          throw new Error(error.message);
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
      session.jwt = token.jwt;
      // TODO: fix this shameful hack to shut up TS
      // @ts-ignore
      session.user = token.user;
      return session;
    },
  },
});
