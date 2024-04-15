export function checkFileIsImage(fileObj) {
  const file = fileObj[0];
  if (file?.name) {
    const fileType = file.name.split(".").pop()?.toLowerCase();

    if (fileType === "jpeg" || fileType === "jpg" || fileType === "png") {
      return true;
    }
  }
  return false;
}

export function checkFileIsVideo(fileObj) {
  const file = fileObj[0];
  if (file?.name) {
    const fileType = file.name.split(".").pop()?.toLowerCase();

    if (fileType === "mp4" || fileType === "avi" || fileType === "webm") {
      return true;
    }
  }
  return false;
}
