import { AuthOptions } from "@/lib/auth/authOptions";
import NextAuth from "next-auth/next";

const handler = NextAuth(AuthOptions);

export { handler as GET, handler as POST };
