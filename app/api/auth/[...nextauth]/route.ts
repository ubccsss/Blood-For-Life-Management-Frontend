import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { JWT } from "next-auth/jwt"


export const authOptions = {
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID ?? "",
          clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        }),
    ],
    strategy: 'jwt',
    secret: process.env.SECRET,
    callbacks: {
      async jwt({ token }: {token: JWT, }): Promise<JWT> {
        token.role = "admin";
        return token;
  }
    },
}
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }