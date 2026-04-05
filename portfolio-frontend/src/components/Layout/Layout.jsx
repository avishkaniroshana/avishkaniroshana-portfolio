import { Outlet } from "react-router-dom";
import LeftNavbar from "./LeftNavbar";
import TopNavbar from "./TopNavbar";
import { SidebarProvider, useSidebar } from "@/context/SidebarContext";

const SIDEBAR_W = 224; // px — matches w-56

const LayoutInner = () => {
  const { sidebarOpen } = useSidebar();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Fixed sidebar — out of normal flow */}
      <LeftNavbar />

      {/* Content column — shifts right exactly by sidebar width */}
      <div
        style={{
          marginLeft: sidebarOpen ? `${SIDEBAR_W}px` : "0px",
          transition: "margin-left 300ms ease-in-out",
        }}
        className="flex flex-col min-h-screen"
      >
        {/* Top navbar fills the full remaining width */}
        <TopNavbar />

        {/* Page content — no max-width cap, fills the column */}
        <main className="flex-1 w-full px-6 md:px-10 py-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

const Layout = () => (
  <SidebarProvider>
    <LayoutInner />
  </SidebarProvider>
);

export default Layout;
