import React from "react";

function RootLayout({ children }) {
  return <div className="p-5 lg:py-10 w-full max-w-5xl mx-auto">{children}</div>;
}

export default RootLayout;
