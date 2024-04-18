"use server";

import { getPresignedUrl } from "./getPresignedUrl";

export async function getSignedUrl(S3Key) {
  try {
    const url = await getPresignedUrl(S3Key);

    return url;
  } catch (error) {
    console.log(error);
    return "ERROR";
  }
}
