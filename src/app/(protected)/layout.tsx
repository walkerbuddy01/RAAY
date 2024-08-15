import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import { NavigationSideBar } from "@/components/dashboard/NavigationSideBar";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const mockTitle = "Hello everyone how are You";
  const mockContent =
    "Hello everyone this is only mock data for testing ui   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quas ad asperiores sequi aliquid tempore voluptatem quae fuga maiores ex animi placeat debitis, impedit corporis quasi at consequuntur, perspiciatis exercitationem? ";
  return (
    <section className="flex flex-col gap-4 px-4 py-4 absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-[#FFB8E9] to-[#FFE7C4] overflow-hidden">
      <DashboardNavbar />

      <MaxWidthWrapper className="max-w-screen-2xl h-full max-h-[1050px] py-2">
        <div className="h-full w-full grid grid-cols-3 gap-4 flex-1 flex-grow ">
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
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-violet-600  flex-grow flex-1 h-full">helo</div>
          </div>
          <div className="h-full w-full col-span-1 bg-blue-500 rounded-2xl overflow-hidden">
            {/* {children} */}
          </div>
          <div className="h-full w-full col-span-1 bg-blue-500 rounded-2xl"></div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
