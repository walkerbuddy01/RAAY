import { NextResponse } from "next/server";
import authConfig from "./auth.config";
import NextAuth from "next-auth";
import {
  apiAuthPrefix,
  authRoutes,
  protectedRoutes,
  publicRoutes,
  redirectAfterAuthRoute,
} from "../routes";

export const { auth } = NextAuth(authConfig);
export default auth((req) => {
  //TODO: add logic for the routes including protected, auth & public
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isPublicRoutes = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoutes = authRoutes.includes(nextUrl.pathname);
  const isApiPrefix = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isProtectedRoute = protectedRoutes.includes(nextUrl.pathname);

  if (isApiPrefix) {
    return NextResponse.next();
  }

  if (!isLoggedIn && isProtectedRoute) {
    return NextResponse.redirect(new URL("/auth/sign-in", nextUrl));
  }

  if (isLoggedIn && isAuthRoutes) {
    return NextResponse.redirect(new URL(redirectAfterAuthRoute, nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
