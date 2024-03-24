import React from "react";
import DashboardSidebar from "./_components/DashboardSidebar";

const DashboardLayout = ({ children }) => {
  return (
    <section className="flex-grow h-full relative flex">
      <DashboardSidebar />
      <main className="w-full  p-5 lg:py-10">
        {children}
      </main>
    </section>
  );
};

export default DashboardLayout;
