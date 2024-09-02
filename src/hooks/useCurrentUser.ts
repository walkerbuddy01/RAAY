import { useSession } from "next-auth/react";

export const useCurrentUser = () => {
  const session = useSession();
  console.log({ userSession: session.data?.user });
  return session.data?.user;
};
