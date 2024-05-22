import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <main className="w-full max-w-5xl text-left mx-auto relative p-5 lg:py-10">
      {children}
    </main>
  );
};

export default DashboardLayout;
