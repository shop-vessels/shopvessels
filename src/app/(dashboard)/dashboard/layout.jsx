import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <section className="h-full flex">
      <aside className="max-w-sm">Sidebar</aside>
      <main className="flex-grow">{children}</main>
    </section>
  );
};

export default DashboardLayout;
