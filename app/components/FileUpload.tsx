import React from "react";

const ImageSelector: React.FC = () => {
  return (
    <div>
      <input type="file" accept="image/*" />
    </div>
  );
};
export default ImageSelector;
