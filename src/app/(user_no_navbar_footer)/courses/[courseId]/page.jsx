import React from 'react'

const page = ({params}) => {
  const {courseId} = params;
  console.log(courseId);
  return (
    <div>page</div>
  )
}

export default page