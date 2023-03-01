import React from "react";

function NumberWithLabel({
  mainText,
  labelText,
  mainTextStyle,
  labelTextStyle,
  style,
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", ...style }}>
      <h3 style={{ fontWeight: "normal", ...labelTextStyle }}>{labelText}</h3>
      <h1 style={{ fontWeight: "900", color: "gray", ...mainTextStyle }}>
        {mainText}
      </h1>
    </div>
  );
}

export default NumberWithLabel;
