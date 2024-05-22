import React from "react";
import UpdatePassword from "./_components/UpdatePassword";
import jwt from "jsonwebtoken";

const page = async ({ searchParams }) => {
  try {
    const token = decodeURI(searchParams.token);
    if (!token) throw new Error("Token not found");

    const value = jwt.verify(token, process.env.JWT_SECRET);

    if (!value?.email) throw new Error("Invalid Token");

    return <UpdatePassword email={value?.email} />;
  } catch (error) {
    // Handle the error here
    console.error("Error occurred:", error);
    // You can display an error message or redirect the user to an error page
    return <div>Invalid URL</div>;
  }
};

export default page;
