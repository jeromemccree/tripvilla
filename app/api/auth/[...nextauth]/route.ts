// import { prisma } from "@/lib/prisma";
// import { PrismaAdapter } from "@auth/prisma-adapter";

import NextAuth, { type NextAuthOptions, type DefaultSession } from "next-auth";
import EmailProvider from "next-auth/providers/email";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      //* add other properties such as role, password, address, etc (all properties for user that are not defined)
      // role: UserRole;
    } & DefaultSession["user"];
  }
}

export const authOptions: NextAuthOptions = {
  callbacks: {
    //? i beleive since user is returned by oAuth provider, we are trying to make it equal to the session object
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
        // session.user.role = user.role; <-- put other properties on the session here
      }
      return session;
    },
  },

  pages: {
    signIn: "/",
    // signOut: "/auth/signout",
    // error: "/auth/error", // Error code passed in query string as ?error=
    // verifyRequest: "/auth/verify-request", // (used for check email message)
    // newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },

  // adapter: PrismaAdapter(prisma),
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    //   authorization: {
    //     params: {
    //       prompt: "consent",
    //       access_type: "offline",
    //       response_type: "code",
    //     },
    //   },
    // }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,

        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
      maxAge: 10 * 60, // Magic links are valid for 10 min only
    }),

    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],

  theme: {
    colorScheme: "light", // "auto" | "dark" | "light"
    brandColor: "#11999E", // Hex color code
    logo: "https://res.cloudinary.com/dwczi6gl7/image/upload/v1682693884/vidplay_logo1_iwagju.svg", // Absolute URL to image
    buttonText: "#FFFFFF", // Hex color code
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
