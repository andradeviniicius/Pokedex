import { useState } from "react";

import "./styles.scss";

export default function MainTitle({
  elem,
  blockModifier,
  elemModifier,
  textContent,
  customStyle,
}) {
  return (
    <>
      <h1
        className={`
        mainTitle
        ${blockModifier ? `mainTitle--${blockModifier}` : ""}
        ${elem ? `mainTitle__${elem}` : ""}
        ${elemModifier ? `mainTitle__${elem}--${elemModifier}` : ""}
        ${customStyle ? `${customStyle}` : ""}
        `}
      >
        {textContent}
      </h1>
    </>
  );
}


