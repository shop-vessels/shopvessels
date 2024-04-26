import { Button } from "@/components/ui/button";
import { CloudDownload } from "lucide-react";
import React from "react";
import { getPresignedUrl } from "@/app/(user_side)/all-courses/[slug]/_actions/getPresignedUrl";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { VideoBucket, s3VideoClient } from "@/config/S3AssetsConfig";
import { getFileExtension } from "@/lib/cleanVideoTitle";

async function generateDownloadLink(assetS3Key, title) {
  "use server";

  const command = new GetObjectCommand({
    Bucket: VideoBucket,
    Key: assetS3Key,
    ResponseContentType: `application/${getFileExtension(title)}`,
    ResponseContentDisposition: `attachment; filename="${
      assetS3Key + "." + getFileExtension(title)
    }"`,
  });

  return await getSignedUrl(s3VideoClient, command, { expiresIn: 3600 });
}

const DownloadAsset = async ({ assetS3Key, title }) => {
  const link = await generateDownloadLink(assetS3Key, title);

  return (
    <Button type="submit" size={"icon"} asChild>
      <a href={link} target="_blank" download={true}>
        <CloudDownload />
      </a>
    </Button>
  );
};

export default DownloadAsset;
