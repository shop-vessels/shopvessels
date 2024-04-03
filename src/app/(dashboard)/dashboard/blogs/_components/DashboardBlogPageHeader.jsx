import React from 'react'
import DashboardPageHeader from '../../_components/DashboardPageHeader'
import CreateBlogPopup from './CreateBlogPopup'

function DashboardBlogPageHeader() {
  return (
    <DashboardPageHeader
    title={"Manage Blogs"}
    description={"Here you can create, update, delete blogs"}
    >
        <CreateBlogPopup />
    </DashboardPageHeader>
  )
}

export default DashboardBlogPageHeader;