import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

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
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local`,
            {
              identifier: credentials.username,
              password: credentials.password,
            }
          );
          console.log(response.data);
          if (response.data) {
            return response.data;
          } else {
            return null;
          }
        } catch (error) {
          const errorMessage =
            error.response.data.message[0].messages[0].message;
          throw new Error(errorMessage);
        }
      },
    }),
  ],
  database: process.env.NEXT_PUBLIC_DATABASE_URL,
  session: {
    jwt: true,
    signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
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
