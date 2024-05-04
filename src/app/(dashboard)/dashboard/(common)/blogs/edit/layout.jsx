import React from 'react'
import EditBlogProvider from './_context/editBlogContext'

function layout({children}) {
  return (
    <EditBlogProvider>{children}</EditBlogProvider>
  )
}

export default layout