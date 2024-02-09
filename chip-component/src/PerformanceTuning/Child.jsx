import React, { memo } from "react";

const Child = ({ count, onClick }) => {
  console.log("child component");
  return (
    <>
      <div>Child Component</div>
      <button onClick={onClick}>Increment from Child</button>
    </>
  );
};

export default memo(Child);
