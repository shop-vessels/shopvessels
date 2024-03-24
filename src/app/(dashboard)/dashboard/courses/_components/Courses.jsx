import React from 'react'
import DashboardCourseCard from './DashboardCourseCard'

const Courses = () => {
  return (
    <div className="mt-10">
        <h2 className='font-bold text-foreground/70 text-2xl'>All Courses</h2>
        <div className=' mt-5 grid grid-cols-3 gap-5'>
            <DashboardCourseCard />
            <DashboardCourseCard />
            <DashboardCourseCard />
            <DashboardCourseCard />
            <DashboardCourseCard />

        </div>
    </div>
  )
}

export default Courses