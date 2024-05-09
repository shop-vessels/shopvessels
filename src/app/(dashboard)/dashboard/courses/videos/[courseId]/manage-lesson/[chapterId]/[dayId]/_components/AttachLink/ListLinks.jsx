import React from "react";
import DeleteLinkButton from "./DeleteLinkButton";

const ListLinks = ({ courseId, chapterId, dayId, links }) => {
  return (
    <div className="py-5  bg-background rounded-md mt-5">
      <h3 className="font-bold  px-5 border-b pb-3">Links</h3>
      <ul className="flex flex-col gap-2 max-h-[250px] overflow-y-auto">
        {(links?.length &&
          links?.map(({ _id, title }) => (
            <li
              key={_id}
              className="bg-background border-b px-5 py-3 rounded-md flex justify-between"
            >
              {title}{" "}
              <DeleteLinkButton
                {...{
                  courseId,
                  chapterId,
                  dayId,
                  _id: _id.toString(),
                }}
              />
            </li>
          ))) || <p className="px-4 text-muted-foreground mt-4">Please add the link below</p>}
      </ul>
    </div>
  );
};

export default ListLinks;
