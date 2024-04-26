import { Separator } from "@/components/ui/separator";
import CourseModel from "@/database/models/CourseModel";
import { cleanVideoName } from "@/lib/cleanVideoTitle";
import { CloudDownload } from "lucide-react";
import DownloadAsset from "./DownloadAsset";

async function VideoAssets({ courseId, videoId }) {
  const course = await CourseModel.findById(courseId)
    .select("videos")
    .lean()
    .exec();

  const assets = course?.videos.filter(
    ({ _id }) => _id.toString() === videoId.toString()
  )?.[0].assets;

  if (!assets || assets.length === 0) {
    return (
      <div className="max-w-md text-center mx-auto flex flex-col justify-center py-10 px-16 bg-foreground/5 rounded-md">
        <h2 className="text-2xl font-bold">Video Assets</h2>
        <p className="">No assets are associated with this video.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg mx-auto py-5  lg:py-10 border rounded-md">
      <h2 className="text-2xl font-bold px-5">Video Assets</h2>
      <Separator className="mt-5" />
      <ul>
        {assets.map(({ title, assetS3Key }) => (
          <li
            key={assetS3Key}
            className="px-5 py-5 border-b flex justify-between items-center hover:bg-foreground/5"
          >
            {cleanVideoName(title)}

            <DownloadAsset {...{ assetS3Key, title }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VideoAssets;
