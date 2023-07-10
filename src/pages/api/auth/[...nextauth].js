import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { login } from "/services/user";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await login(credentials);
        return user;
      },
    }),
  ],

  pages: {
    signIn: "/auth/signIn",
  },
});
