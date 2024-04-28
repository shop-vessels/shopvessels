import React from "react";

const DashboardPageHeader = ({ title, description, children }) => {
  return (
    <header className="flex flex-col md:flex-row justify-between gap-10 md:gap-0 md:items-center w-full">
      <div>
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-foreground/80">
          {title}
        </h1>
        <p className="text-xs sm:text-sm mt-2 md:text-lg">{description} </p>
      </div>

      {children}
    </header>
  );
};

export default DashboardPageHeader;
