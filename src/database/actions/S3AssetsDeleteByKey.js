import { s3Client } from "@/config/S3AssetsConfig";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";

export async function deleteAssetFromS3({  S3Key }) {
  try {
    const params = {
      Bucket: process.env.AWS_ASSETS_S3_BUCKET_NAME,
      Key: S3Key,
    };
    const deleteObjectCommand = new DeleteObjectCommand(params);

    await s3Client.send(deleteObjectCommand);

    return { success: true };
  } catch (error) {
    console.error("Error deleting asset from S3:", error);
    throw error;
  }
}
