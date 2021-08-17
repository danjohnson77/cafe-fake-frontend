import React, { Fragment } from "react";

const FixedImgBg = ({ imageUrl, children }) => {
  const fullUrl = `${imageUrl}`;
  return (
    <Fragment>
      <div
        className="fixed-img-bg"
        style={{ backgroundImage: `url(${fullUrl})` }}
      ></div>
      {children}
    </Fragment>
  );
};

export default FixedImgBg;
