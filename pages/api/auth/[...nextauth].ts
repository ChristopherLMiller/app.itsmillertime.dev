import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { NextApiRequest, NextApiResponse } from "next";

interface iCredentials {
  username: string;
  password: string;
}
const options = {
  providers: [
    Providers.Credentials({
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
    jwt: true,
    secret: process.env.JWT_SECRET,
    signingKey: `{
      kty: 'oct',
      kid: process.env.JWT_SIGNING_KID,
      alg: 'HS512',
      k: process.env.JWT_SIGNING_PRIVATE_KEY,
    }`,
  },
  callbacks: {
    jwt: async (token, user) => {
      if (user) {
        token.jwt = user.jwt;
        token.user = user.user;
      }
      return Promise.resolve(token);
    },
    session: async (session, token) => {
      session.jwt = token.jwt;
      session.user = token.user;
      return Promise.resolve(session);
    },
  },
  pages: {
    signIn: `/login`,
    error: `/login`,
  },
};

const Auth = (
  req: NextApiRequest,
  res: NextApiResponse
): void | Promise<void> => NextAuth(req, res, options);

export default Auth;
