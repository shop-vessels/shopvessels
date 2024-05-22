import React from 'react'
import LinkForm from './LinkForm'
import { Separator } from '@/components/ui/separator';
import connectDB from '@/database/connectDatabase';
import CourseModel from '@/database/models/CourseModel';
import ListLinks from './ListLinks';

async function AttachLink(props) {
    const { courseId, chapterId, dayId } = props;

    await connectDB();
    const course = await CourseModel.findOne({
        _id: courseId,
        "chapters._id": chapterId,
        "chapters.days._id": dayId,
    })
        .select("chapters");

    let filesLinks = course?.chapters
        ?.filter(({ _id }) => _id.toString() === chapterId)[0]
        ?.days?.filter(({ _id }) => _id.toString() === dayId)[0]?.lesson?.externalLink;


    return (
        <div className='bg-foreground/5 rounded-md p-5 w-full'>
            <h2 className='text-xl font-bold'>Upload File Assets of day</h2>

            <ListLinks {...props} links={filesLinks} />

            <Separator className="mt-5" />

            <LinkForm {...props} />
        </div>
    )
}

export default AttachLink