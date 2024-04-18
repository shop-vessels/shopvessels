import VideoPlayer from "@/components/VideoPlayer/index";

function VideoPopup({ url }) {
  return (
    <div className="fixed inset-0 bg-foreground/40 flex justify-center items-center h-screen">
      <VideoPlayer url={url} />
    </div>
  );
}

export default VideoPopup;
