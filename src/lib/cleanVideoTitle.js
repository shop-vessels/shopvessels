export function cleanVideoName(videoName) {
  let cleanName = videoName.replace(/\.[^.]+$/, "");

  cleanName = cleanName.replace(/[\(\)_]/g, "");

  cleanName = cleanName.trim();

  return cleanName;
}

export function getFileExtension(fileName) {
  // Find the last occurrence of '.' in the file name
  const lastDotIndex = fileName.lastIndexOf(".");

  // If '.' exists and it's not the first or last character in the file name
  if (
    lastDotIndex !== -1 &&
    lastDotIndex !== 0 &&
    lastDotIndex !== fileName.length - 1
  ) {
    // Return the substring after the last '.'
    return fileName.slice(lastDotIndex + 1);
  }

  // If no file extension found, return empty string
  return "";
}
