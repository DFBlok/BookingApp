import React from "react";
import CategoryList from "./_component/CategoryList";

const layout = ({ children }: any) => {
  return (
    <div className="grid grid-cols-4">
      <div>
        {/* Category */}
        <CategoryList />
      </div>
      <div className="col-span-3">{children}</div>
    </div>
  );
};

export default layout;
