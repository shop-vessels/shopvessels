"use server";

import { VideoBucket, s3VideoClient } from "@/config/S3AssetsConfig";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export async function getDownloadLink(S3Key) {
  try {
    const command = new GetObjectCommand({
      Bucket: VideoBucket,
      Key: S3Key,
    });

    const signedUrl = await getSignedUrl(s3VideoClient, command, {
      expiresIn: 3600,
    });
    return signedUrl;
  } catch (error) {
    console.log(error);
    return "FAILURE";
  }
}
