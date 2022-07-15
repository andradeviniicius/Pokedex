import React from "react";

import "./loadingSpinner.scss";

const LoadingSpinner = React.forwardRef((props, ref) => {
  return <div className={`spinner ${props.extraClasses}`} ref={ref}></div>;
});

export default LoadingSpinner;
