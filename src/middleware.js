import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const { token } = req?.nextauth;

    const base_url = process.env?.BASE_URL;
    if (token?.role === "UNVERIFIED") {
      return NextResponse.redirect(`${base_url}/verify`);
    }
    if (token?.role === "USER") {
      return NextResponse.redirect(`${base_url}/`);
    }
    if (token?.role === "ADMIN") {
      return NextResponse.next();
    }

    return NextResponse.redirect(`${base_url}/login`);
  },
  {
    callbacks: {
      authorized: ({ token }) =>
        token?.role === "ADMIN" ||
        token?.role === "UNVERIFIED" ||
        token?.role === "USER",
    },

    pages: {
      signIn: "/login",
      // signOut: "/logout",
      // error: "/auth-error",
    },
  }
);

export const config = { matcher: ["/dashboard", "/dashboard/:path*"] };
