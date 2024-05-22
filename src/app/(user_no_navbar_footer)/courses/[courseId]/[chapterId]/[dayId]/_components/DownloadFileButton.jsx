"use client";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { getDownloadLink } from "../_actions/getDownloadLink";
import { toast } from "@/components/ui/use-toast";
import Link from "next/link";
import { Download, Loader } from "lucide-react";

export function DownloadFileButton({ S3Key }) {
  const [url, setUrl] = useState(null);

  const generateLink = async () => {
    setUrl("loading");
    const url = await getDownloadLink(S3Key);
    if (url === "FAILURE") {
      toast({
        title: "Error Downloading",
        description: "Failed to generate download link try again.",
      });
      setUrl(null);
      return;
    }
    setUrl(url);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="ml-auto" onClick={generateLink}>
          <Download />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Do you want to download file?</AlertDialogTitle>
          <AlertDialogDescription></AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          {/* <form method="GET"> */}
          <AlertDialogAction
            asChild
            className={url === null || url === "loading" ? "aspect-square" : ""}
          >
            {url !== null && url !== "loading" ? (
              <Link href={url}>Download</Link>
            ) : (
              <Button disabled size="icon">
                <Loader className="animate-spin" />
              </Button>
            )}
          </AlertDialogAction>
          {/* </form> */}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
