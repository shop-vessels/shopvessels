"use server";

export async function getVideoIdsOfChapter(courseId, chapterId) {
  try {
    // Find the course by its ID
    const course = await CourseModel.findById(courseId);
    if (!course) {
      return [];
    }

    // Find the chapter by its ID
    const chapter = course.chapters.find(
      (chap) => chap._id.toString() === chapterId
    );
    if (!chapter) {
      return [];
    }

    const videoIds = [];

    // Iterate through each lesson day in the chapter
    chapter.days.forEach((lessonDay) => {
      // Iterate through each video in the lesson
      lessonDay.lesson.videos.forEach((video) => {
        // Push the ID of the video to the array
        videoIds.push(video._id);
      });
    });

    return videoIds;
  } catch (error) {
    console.log(error);
    return [];
  }
}
