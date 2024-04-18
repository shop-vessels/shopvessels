import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const { s3VideoClient, VideoBucket } = require("@/config/S3AssetsConfig");

export async function getPresignedUrl(Key) {
  const command = new GetObjectCommand({
    Bucket: VideoBucket,
    Key,
  });

  const presignedUrl = await getSignedUrl(s3VideoClient, command, {
    expiresIn: 3600,
  });
  return presignedUrl;
}
