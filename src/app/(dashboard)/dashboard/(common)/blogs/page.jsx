export const dynamic = "force-dynamic"
import React from 'react'
import DashboardBlogPageHeader from './_components/DashboardBlogPageHeader'
import BlogListing from './_components/BlogListing'
import { Separator } from '@/components/ui/separator'

function page() {
  return (
    <div>
        <DashboardBlogPageHeader />
        <Separator className="my-10" />
        <BlogListing/>
    </div>
  )
}

export default page