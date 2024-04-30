import { DashboardNav } from "@/components/dashboard-nav";
import { ServicesMenu } from "@/components/service-menu-navig";
import { dashboardLinks } from "@/config/links";
import { BsArrow90DegDown } from "react-icons/bs";

interface ProjectDashboardLayoutProps {
  children: React.ReactNode;
}

export default async function ProjectDashboardLayout({
  children,
}: ProjectDashboardLayoutProps) {
  return (
    <div className="w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-cols min-h-full">
      {" "}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className=" bg-clip-text grid flex-1 gap-12 md:grid-cols-[200px_1fr] z-10">
        <aside className="hidden bg-clip-text w-[200px] flex-col mt-2 text-white  md:flex z-0 overflow-hidden">
          <DashboardNav items={dashboardLinks.data} />
        </aside>
        <main className="flex bg-clip-text w-full flex-1 flex-col z-10">
          {" "}
          <div className="flex md:hidden item-center justify-center mt-5">
            <ServicesMenu />
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}
