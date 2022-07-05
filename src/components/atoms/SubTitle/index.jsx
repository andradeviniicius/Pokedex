import "./subTitle.scss";

export default function SubTitle({
  elem,
  blockModifier,
  elemModifier,
  textContent,
  customStyle,
}) {
  return (
    <>
      <h2
        className={`
        subTitle
        ${blockModifier ? `subTitle--${blockModifier}` : ""}
        ${elem ? `subTitle__${elem}` : ""}
        ${elemModifier ? `subTitle__${elem}--${elemModifier}` : ""}
        ${customStyle ? `${customStyle}` : ""}
        `}
      >
        {textContent}
      </h2>
    </>
  );
}
