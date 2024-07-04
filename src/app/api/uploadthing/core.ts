import { useCurrentUser } from "@/hooks/useCurrentUser";
import { currentUser } from "@/lib/currentUser";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const handleAuth = () => {};

export const ourFileRouter = {
  productImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(async () => {
      const user = await currentUser();
      console.log({ user });

      if (!user) {
        throw new Error("Unauthorized access");
      }
      return { userId: user.id };
    })
    .onUploadComplete(() => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
