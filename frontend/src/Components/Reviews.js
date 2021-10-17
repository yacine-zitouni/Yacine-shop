import React from "react";
import { StarIcon } from "@heroicons/react/outline";
const Reviews = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars[i] = (
      <StarIcon
        key={i}
        className={
          rating > i + 1
            ? `h-4 w-4  fill-current text-yellow-300`
            : `h-4 w-4   text-yellow-300 `
        }
      />
    );
  }
  return <span className="flex">{stars}</span>;
};

export default Reviews;

// <StarIcon className=" h-12 w-12 fill-current text-yellow-500" />
