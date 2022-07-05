import { useState } from "react";

import "./styles.scss";

export default function MainTitle({
  elem,
  blockModifier,
  elemModifier,
  textContent,
}) {
  return (
    <>
      <h1
        className={`
        mainTitle
        ${blockModifier ? `mainTitle--${blockModifier}` : ""}
        ${elem ? `mainTitle__${elem}` : ""}
        ${elemModifier ? `mainTitle__${elem}--${elemModifier}` : ""}
        `}
      >
        {textContent}
      </h1>
    </>
  );
}

// Ao chamar o MainTitle deve-se indicar qual modificador deseja aplicar
// Que seja existente no arquivo scss components/atoms/index.scss

// Exemplo:
// <MainTitle modifier={'bold'}>Titulo de Teste</MainTitle>

// Result:
// <h1 className='mainTitle mainTitle__bold'>Titulo de Teste</h1>
