import React from "react";
import { memo } from "react";

function WelcomeChild() {
  console.log("child re-rendering");
  return (
    <>
      <div>WelcomeChild</div>
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(WelcomeChild);
