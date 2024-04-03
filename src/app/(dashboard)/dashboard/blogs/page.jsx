import React from 'react'
import DashboardBlogPageHeader from './_components/DashboardBlogPageHeader'
import BlogListing from './_components/BlogListing'

function page() {
  return (
    <div>
        <DashboardBlogPageHeader />
        <BlogListing/>
    </div>
  )
}

export default page