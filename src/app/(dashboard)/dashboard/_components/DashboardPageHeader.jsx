import React from "react";

const DashboardPageHeader = ({ title, description, children }) => {
  return (
    <header className="flex justify-between items-center">
      <div>
        <h1 className="text-4xl font-bold text-foreground/80">
          {title}
        </h1>
        <p className="mt-2 text-lg">{description} </p>
      </div>

      {children}
    </header>
  );
};

export default DashboardPageHeader;
