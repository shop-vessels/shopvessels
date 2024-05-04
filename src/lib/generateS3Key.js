import crypto from "crypto";
import path from "path";

export function generateS3Key({ dir = "course", title }) {
  const ext = path.extname(title);
  const fileHash = crypto
    .createHash("md5")
    .update(title + crypto.randomBytes(16).toString("hex"))
    .digest("hex");

  const S3Key = `${dir}/${fileHash}`;
  return S3Key + ext;
}
