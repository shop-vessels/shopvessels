export const dynamic = "force-dynamic"
import {
  S3Client,
  GetObjectCommand,
  HeadObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const videoKey = searchParams.get("key");

    const s3Client = new S3Client({
      region: process.env.NEXT_AWS_S3_REGION,
      credentials: {
        accessKeyId: process.env.NEXT_AWS_S3_ACCESS_KEY_ID,
        secretAccessKey: process.env.NEXT_AWS_S3_SECRET_ACCESS_KEY,
      },
    });

    const params = {
      Bucket: process.env.NEXT_AWS_S3_BUCKET_NAME,
      Key: videoKey,
    };

    const getCommand = new GetObjectCommand(params);
    const url = await getSignedUrl(s3Client, getCommand, {
      expiresIn: 30,
    });

    return NextResponse.json({ url });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to generate pre-signed URL" },
      { status: 500 }
    );
  }
}
