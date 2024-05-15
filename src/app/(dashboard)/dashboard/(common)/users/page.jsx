import React from "react";
import UserTable from "./_components/Table";
import { headers } from "next/headers";

function page({ searchParams }) {
  return <UserTable searchParams={searchParams} />;
}

export default page;
