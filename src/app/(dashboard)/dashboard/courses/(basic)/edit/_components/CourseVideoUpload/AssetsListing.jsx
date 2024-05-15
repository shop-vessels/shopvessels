import React from "react";
import { getAssetsAction } from "../../_actions/getAssetsAction";
import DeleteAsset from "./DeleteAsset";

async function AssetsListing(props) {
  const { videoId, courseId } = props;
  try {
    const assets = await getAssetsAction(courseId, videoId);

    return (
      <div className=" max-w-md py-5 mx-auto border border-border rounded-md max-h-[300px] overflow-y-auto">
        <h1 className="font-bold text-lg px-5">All Assets</h1>
        <ul className="w-full">
          {(assets?.length > 0 &&
            assets.map((asset) => (
              <li
                className=" flex items-center gap-5 border-b justify-between py-2 hover:bg-foreground/5 px-5"
                key={asset.assetS3Key}
              >
                {asset?.title}

                <DeleteAsset
                  {...{ videoId, courseId, assetS3Key: asset.assetS3Key }}
                />
              </li>
            ))) || (
            <div className="flex justify-center rounded-md bg-foreground/5 py-10 px-10 mt-5">
              <p>Please upload the assets below</p>
            </div>
          )}
        </ul>
      </div>
    );
  } catch (error) {
    console.log(error);
    // Check error state
    return (
      <div className="w-full py-5 rounded-md bg-foreground/5 flex items-center justify-center flex-col gap-5">
        <p className="text-red-500/80 max-w-xs text-center">
          Something went wrong while loading assets
        </p>
      </div>
    );
  }
}

export default AssetsListing;
