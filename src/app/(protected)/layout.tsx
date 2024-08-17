import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import { NavigationSideBar } from "@/components/dashboard/NavigationSideBar";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { BadgePlus } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const mockTitle = "Hello everyone how are You";
  const mockContent =
    "Hello everyone this is only mock data for testing ui   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quas ad asperiores sequi aliquid tempore voluptatem quae fuga maiores ex animi placeat debitis, impedit corporis quasi at consequuntur, perspiciatis exercitationem? ";

  const mockFeeder = [
    {
      id: "1",
      label: "Hello test",
      context: "this is mock testing data",
      userId: "1234355556",
      takingFeedback: false,
      inviteCode: "antibanti-babal-bol",
    },{
      id: "1",
      label: "Hello test",
      context: "this is mock testing data",
      userId: "1234355556",
      takingFeedback: false,
      inviteCode: "antibanti-babal-bol",
    },{
      id: "1",
      label: "Hello test",
      context: "this is mock testing data",
      userId: "1234355556",
      takingFeedback: false,
      inviteCode: "antibanti-babal-bol",
    },{
      id: "1",
      label: "Hello test",
      context: "this is mock testing data",
      userId: "1234355556",
      takingFeedback: false,
      inviteCode: "antibanti-babal-bol",
    },
    {
      id: "1",
      label: "Hello test",
      context: "this is mock testing data",
      userId: "1234355556",
      takingFeedback: false,
      inviteCode: "antibanti-babal-bol",
    },{
      id: "1",
      label: "Hello test",
      context: "this is mock testing data",
      userId: "1234355556",
      takingFeedback: false,
      inviteCode: "antibanti-babal-bol",
    },{
      id: "1",
      label: "Hello test",
      context: "this is mock testing data",
      userId: "1234355556",
      takingFeedback: false,
      inviteCode: "antibanti-babal-bol",
    },{
      id: "1",
      label: "Hello test",
      context: "this is mock testing data",
      userId: "1234355556",
      takingFeedback: false,
      inviteCode: "antibanti-babal-bol",
    },{
      id: "1",
      label: "Hello test",
      context: "this is mock testing data",
      userId: "1234355556",
      takingFeedback: false,
      inviteCode: "antibanti-babal-bol",
    },{
      id: "1",
      label: "Hello test",
      context: "this is mock testing data",
      userId: "1234355556",
      takingFeedback: false,
      inviteCode: "antibanti-babal-bol",
    },{
      id: "1",
      label: "Hello test",
      context: "this is mock testing data",
      userId: "1234355556",
      takingFeedback: false,
      inviteCode: "antibanti-babal-bol",
    },
  ];
  return (
    <section className="flex flex-col sm:gap-4 gap-2 sm:p-4 p-2 absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-[#FFB8E9] to-[#FFE7C4] overflow-hidden">
      <DashboardNavbar />

      <MaxWidthWrapper className="max-w-screen-2xl h-full max-h-[1050px] py-2">
        <div className="h-full w-full grid sm:grid-cols-2 md:grid-cols-3 gap-2  sm:gap-4 flex-1 flex-grow ">
          <div className="h-full w-full flex flex-col gap-4 col-span-1 rounded-2xl overflow-hidden  ">
            <div>
              <Card className="bg-[#17191B]">
                <CardHeader>
                  <CardTitle>Your Feeder</CardTitle>
                  <CardDescription>
                    Work as Context for feedback givers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="font-bold ">Title</p>
                    <p className="mb-2 text-sm">{mockTitle}</p>
                    <p className="font-bold">Content</p>
                    <p className="text-sm">{mockContent.slice(0, 120)}</p>
                    <Dialog>
                      <DialogTrigger>
                        <p className="text-sm text-orange-500">see more</p>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Content</DialogTitle>
                          <DialogDescription>{mockContent}</DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className=" rounded-xl flex-grow flex-1 flex flex-col bg-[#17191B] overflow-hidden">
              <div className="flex py-3 px-4 border-b ">
                <p className="text-left font-bold  flex-grow ">Feeder</p>
                <BadgePlus className="h-6 w-6" />
              </div>
              <div className=" h-96 p-2 space-y-3 overflow-auto bg-[#17191B] rounded-b-xl">
                {mockFeeder.map((feed) => (
                  <div className="h-12 bg-gray-400/20 border-y flex items-center px-2 gap-3 rounded-lg">
                    <Avatar className="bg-gray-700 flex items-center justify-center h-8 w-8 text-sm">
                      F
                    </Avatar>
                    <p className="flex-1 flex-grow">{feed.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="h-full w-full col-span-1 bg-blue-500 rounded-2xl overflow-hidden sm:block hidden">
            {/* {children} */}
          </div>
          <div className="h-full w-full col-span-1 bg-blue-500 rounded-2xl hidden md:block"></div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
