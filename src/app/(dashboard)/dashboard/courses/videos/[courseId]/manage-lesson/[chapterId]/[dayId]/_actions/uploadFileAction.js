"use server";

import { VideoBucket, s3VideoClient } from "@/config/S3AssetsConfig";
import CourseModel from "@/database/models/CourseModel";
import { DeleteObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import crypto from "crypto";

export async function uploadFileAction(formData, courseId, chapterId, dayId) {
  try {
    const file = formData.get("file");

    if ((!file, !courseId, !chapterId, !dayId)) return "FAILURE";

    const course = await CourseModel.findOne({
      _id: courseId,
      "chapters._id": chapterId,
      "chapters.days._id": dayId,
    }).select("chapters");

    // console.log(
    //   uploaded,
    //   course?.chapters
    //     ?.filter(({ _id }) => _id.toString() === chapterId)[0]
    //     ?.days?.filter(({ _id }) => _id.toString() === dayId)[0]?.lesson?.files
    // );

    const fileHash = crypto
      .createHash("md5")
      .update(file?.name + crypto.randomBytes(16).toString("hex"))
      .digest("hex");

    const S3Key = `files/${fileHash}`;

    const command = new PutObjectCommand({
      Bucket: VideoBucket,
      Key: S3Key,
      Body: new Uint8Array(await file.arrayBuffer()),
    });

    await s3VideoClient.send(command);

    const uploaded = course?.chapters
      ?.filter(({ _id }) => _id.toString() === chapterId)[0]
      ?.days?.filter(({ _id }) => _id.toString() === dayId)[0]
      ?.lesson?.files.push({ title: file?.name, S3Key });

    if (!uploaded) {
      s3VideoClient.send(
        new DeleteObjectCommand({
          Bucket: VideoBucket,
          Key: S3Key,
        })
      );

      return "FAILURE";
    }

    await course.save();

    return "SUCCESS";
  } catch (error) {
    console.log(error);
    return "FAILURE";
  }
}
