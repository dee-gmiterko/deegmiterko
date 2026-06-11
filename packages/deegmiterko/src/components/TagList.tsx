import React, { FunctionComponent } from "react";
import { stringToUniqueIndex } from "../helpers/utils";
import clsx from "clsx";

const tagColors = [
  "#f94144",
  "#f3722c",
  "#f8961e",
  "#f9844a",
  "#f9c74f",
  "#90be6d",
  "#43aa8b",
  "#4d908e",
  "#577590",
  "#277da1",
];

const TagList: FunctionComponent<{
  tags: Array<string>;
  className?: string;
}> = ({ tags, className }) => {
  const tagColor = (tag: string) => {
    return tagColors[stringToUniqueIndex(tag, tagColors.length)];
  };

  return (
    <div className={clsx("tag-list", className)}>
      {tags.map((tag) => (
        <span
          key={tag}
          className="tag"
          style={{ backgroundColor: tagColor(tag) }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TagList;
