import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      blocked: boolean;
      confirmed: boolean;
      createdAt: string;
      email: string;
      id: string;
      provider: string;
      role: {
        description: string;
        id: string;
        name: string;
        type: string;
      };
      updatedAt: string;
      username: string;
    };
  }
}
