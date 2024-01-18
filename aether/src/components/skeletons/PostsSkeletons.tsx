import React from "react";
import CardSkeleton from "./CardSkeletons";

const PostsSkeletons = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
};

export default PostsSkeletons;
