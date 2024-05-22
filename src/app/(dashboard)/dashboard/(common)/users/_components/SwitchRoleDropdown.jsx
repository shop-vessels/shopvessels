"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";
import { changeUserRole } from "../_actions/changeUserRole";
import { toast } from "@/components/ui/use-toast";

const SwitchRoleDropdown = ({ defaultValue, userId }) => {
  const [role, setRole] = useState(defaultValue || "");

  async function handleChange(value) {
    const res = await changeUserRole(userId, value);

    if (res === "SUCCESS") {
      setRole(value);
      toast({
        title: "SUCCESS",
        description: "Role changed successfully",
      });
    } else {
      toast({
        title: "ERROR",
        description: "Failed to change role",
        variant: "destructive",
      });
    }
  }

  return (
    <Select value={role} onValueChange={handleChange} className="">
      <SelectTrigger className="md:w-28 lg:w-[180px] text-xs">
        <SelectValue placeholder="Role" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ADMIN"> ADMIN</SelectItem>
        <SelectItem value="USER"> USER</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SwitchRoleDropdown;
