import React, { memo } from "react";

const ChildAdd = ({ learning, count }) => {
  console.log("child rendering");
  return (
    <>
      <h1>{count}</h1>
    </>
  );
};

export default memo(ChildAdd);
