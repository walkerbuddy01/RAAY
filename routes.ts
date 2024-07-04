// TODO : add all routes including protected, public, auth etc with JSdoc
/***
 *
 *public routes access by unauthorize users
 *
 * @type {String[]}
 */
export const publicRoutes: string[] = ["/", "/api/uploadthing"];

/**
 * Auth routes for performing authentication
 * After authentication its redirect to "/d"
 * @type {String[]}
 */

export const authRoutes: string[] = [
  "/auth/sign-in",
  "/auth/sign-up",
  "/auth/verify-yourself",
];

/**
 * Protected Routes are that which are access after authentication
 *
 * @type {String[]}
 */

export const protectedRoutes: string[] = [
  "/d/feeder",
  "/d/setting",
  "/create-feeder",
];

/**
 * Redirect After Auth routes
 * redirect after authentication
 *
 * @type {String}
 */

export const redirectAfterAuthRoute: string = "/d/feeder";

/**
 * The prefix for authentication routes
 * Routes thats starts with this prefix are used for authentication purposes
 * @type {string}
 * */

export const apiAuthPrefix: string = "/api/auth";
