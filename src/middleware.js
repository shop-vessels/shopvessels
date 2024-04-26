import { withAuth } from "next-auth/middleware";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log(req.nextauth);
  },
  {
    callbacks: {
      authorized: ({ token }) => true || token?.role === "admin",
    },
  }
);

export const config = { matcher: ["/dashboard", "/dashboard/:path*"] };
