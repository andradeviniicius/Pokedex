import { useState } from "react";

import "./styles.scss";

export default function SubTitle({
  elem,
  blockModifier,
  elemModifier,
  textContent,
}) {
  return (
    <>
      <h1
        className={`
        subTitle
        ${blockModifier ? `subTitle--${blockModifier}` : ""}
        ${elem ? `subTitle__${elem}` : ""}
        ${elemModifier ? `subTitle__${elem}--${elemModifier}` : ""}
        `}
      >
        {textContent}
      </h1>
    </>
  );
}

// Ao chamar o subTitle deve-se indicar qual modificador deseja aplicar
// Que seja existente no arquivo scss components/atoms/index.scss

// Exemplo:
// <subTitle modifier={'bold'}>Titulo de Teste</subTitle>

// Result:
// <h1 className='subTitle subTitle__bold'>Titulo de Teste</h1>
