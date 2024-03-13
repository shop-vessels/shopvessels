import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <main className="p-10 border mx-auto w-max mt-10 rounded-lg">
      <h2 className="text-lg font-bold">Account Created!</h2>
      <p>Verification link has been sent to your gmail </p>
      <p>Please check your gmail.</p>
      <Link href={"https://mail.google.com"} target="_blank" className="mt-5 inline-block">
        <Button>Gmail</Button>
      </Link>
    </main>
  );
}

export default page;
