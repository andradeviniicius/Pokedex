import React from "react";

import "./loadingSpinner.scss";

const LoadingSpinner = React.forwardRef((props, ref) => {
  return <div className="spinner" ref={ref}></div>;
});

export default LoadingSpinner;
