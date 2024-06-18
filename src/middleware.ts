import authConfig from "./auth.config";
import NextAuth from "next-auth";

export const { auth: middleware } = NextAuth(authConfig);
export default middleware((req) => {
  //TODO: add logic for the routes including protected, auth & public

});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
