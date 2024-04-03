"use client";
import { useContext, createContext, useState } from "react";

const EditBlogContext = createContext();

const EditBlogProvider = ({ children, content }) => {
  const [htmlValue, setHtmlValue] = useState( null);

  const values = { htmlValue, setHtmlValue };

  return (
    <EditBlogContext.Provider value={values}>
      {children}
    </EditBlogContext.Provider>
  );
};

export const useEditBlog = () => useContext(EditBlogContext);

export default EditBlogProvider;
