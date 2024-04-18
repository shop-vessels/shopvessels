import { getPresignedUrl } from "./getPresignedUrl";

export async function getLinksOfVideos(videos) {
  const presignedUrls = [];

  try {
    await Promise.all(
      videos.map(async ({ S3Key, title }) => {
        const presignedUrl = await getPresignedUrl(S3Key);
        presignedUrls.push({ link: presignedUrl, title });
      })
    );

    return presignedUrls;
  } catch (error) {
    console.error("Error generating presigned URLs:", error);
    throw error;
  }
}
