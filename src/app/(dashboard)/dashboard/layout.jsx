export const dynamic = "force-dynamic";
export const revalidate = 0;
import React from "react";
import DashboardGlobalNavbar from "./_components/Navbar";

function RootLayout({ children }) {
  return (
    <div className="h-screen flex flex-col">
      <DashboardGlobalNavbar />

      {children}
    </div>
  );
}

export default RootLayout;
