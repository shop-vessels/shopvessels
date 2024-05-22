import CredentialsProvider from "next-auth/providers/credentials";
import UserModel from "@/database/models/UserModel";
import bcrypt from "bcryptjs";
import connectDB from "@/database/connectDatabase";

// const secret = process.env.NEXT_AUTH_SECRET;

export const AuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;

        try {
          if (!email || !password) {
            throw new Error("Email and password are required for login");
          }
          await connectDB();

          const user = await UserModel.findOne({ email });
          if (!user) {
            throw new Error("User not found");
          }

          const isValidPassword = await bcrypt.compare(password, user.password);

          if (!isValidPassword) {
            throw new Error("Invalid password");
          }
          user.password = undefined;

          return {
            name: user.fullname,
            email: user.email,
            role: user.role,
            _id: user._id,
          };
        } catch (error) {
          throw error;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 3,
  },
  pages: {
    signIn: "/login",
    error: "/auth/error",
  },
  jwt: {
    maxAge: 60 * 60,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token._id = user._id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role;
        session.user._id = token._id;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
