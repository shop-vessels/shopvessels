import React from "react";

function ErrorBox({ title, description }) {
  return (
    <div className="flex justify-center items-center h-full flex-col">
      <h1 className="text-2xl font-bold text-foreground/80">
        {title || "Something wen't wrong!"}
      </h1>
      <p className="text-foreground/60">{description || "Please check the url, this is invalid"}</p>
    </div>
  );
}

export default ErrorBox;
