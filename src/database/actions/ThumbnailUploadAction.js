import { s3Client } from "@/config/S3AssetsConfig";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import crypto from "crypto";

export async function uploadAssetsFileToS3(
  file,
  folder = "blogs",
  contentType
) {
  try {
    const fileContents = await file.arrayBuffer();
    const fileContentsArray = new Uint8Array(fileContents);

    const fileHash = crypto.createHash("sha256");
    fileHash.update(file.name);
    const fileKey = fileHash.digest("hex").slice(0, 10);

    const params = {
      Bucket: process.env.AWS_ASSETS_S3_BUCKET_NAME,
      Key: `${folder}/${fileKey}`,
      Body: fileContentsArray,
      ContentType: contentType || file.type,
    };
    const putObjectCommand = new PutObjectCommand(params);

    await s3Client.send(putObjectCommand);
    const publicUrl = `https://${process.env.AWS_ASSETS_S3_BUCKET_NAME}.s3.${process.env.AWS_ASSETS_S3_BUCKET_REGION}.amazonaws.com/${params.Key}`;

    return { success: true, publicUrl, S3Key: params.Key };
  } catch (error) {
    console.error("Error uploading file to S3:", error);
    throw error;
  }
}

// const { publicUrl, S3Key } = await uploadFileToS3(file, "blogs");
