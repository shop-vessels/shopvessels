"use client";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { signOut } from "next-auth/react";
import React, { useState } from "react";

const LogoutButton = () => {
  const [isLogouting, setIsLogouting] = useState(false);
  async function handleLogout() {
    setIsLogouting(true);
    await signOut();
    setTimeout(() => {
      setIsLogouting(false);
    }, 100);
  }
  return (
    <Button
      variant="destructive"
      disabled={isLogouting}
      className={"flex gap-2 items-center"}
      onClick={handleLogout}
      size="sm"
    >
      {(isLogouting && <Loader className="animate-spin" />) || "Logout"}
    </Button>
  );
};

export default LogoutButton;
