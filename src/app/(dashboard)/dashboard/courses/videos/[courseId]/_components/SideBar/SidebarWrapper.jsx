"use client";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const SidebarWrapper = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsVisible(false);
  }, [pathname]);

  return (
    <aside
      className={`flex bg-muted ${
        isVisible ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      } absolute lg:relative h-full flex-col w-full max-w-[400px] transition-all`}
    >
      <Button
        size={"icon"}
        onClick={() => setIsVisible((prev) => !prev)}
        className="absolute -right-10 lg:hidden rounded-none rounded-r top-2"
      >
        <Menu />
      </Button>
      {children}
    </aside>
  );
};

export default SidebarWrapper;
