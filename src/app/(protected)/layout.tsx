
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import { NavigationSideBar } from "@/components/dashboard/NavigationSideBar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="h-full w-full absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] overflow-hidden">
      <DashboardNavbar />

      <div className=" h-[87%] w-full px-4 ">
        <div className="h-full w-full flex border border-white/30  rounded-lg">
          <NavigationSideBar />
          {children}
        </div>
      </div>
    </div>
  );
}
