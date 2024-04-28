import { Loader } from "lucide-react";
import React from "react";

const GlobalLoader = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Loader className="animate-spin" />
    </div>
  );
};

export default GlobalLoader;
