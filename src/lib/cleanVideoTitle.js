export function cleanVideoName(videoName) {
  let cleanName = videoName.replace(/\.[^.]+$/, "");

  cleanName = cleanName.replace(/[\(\)_]/g, "");

  cleanName = cleanName.trim();

  return cleanName;
}
