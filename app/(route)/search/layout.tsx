import React from "react";

const layout = ({ children }: any) => {
  return (
    <div className="grid grid-cols-4">
      <div>{/* Category */}</div>
      <div className="col-span-3">{children}</div>
    </div>
  );
};

export default layout;
