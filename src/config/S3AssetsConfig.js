import { S3Client } from "@aws-sdk/client-s3";

export const s3Client = new S3Client({
  region: process.env.AWS_ASSETS_S3_BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ASSETS_S3_PUBLIC_ACCESS_KEY,
    secretAccessKey: process.env.AWS_ASSETS_S3_SECRET_KEY,
  },
});

export const s3VideoClient = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY,
  },
});

export const VideoBucket = process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME;
