import React from "react";
import NumberWithLabel from "./NumberWithLabel";

function NumberWithLabelBox({ data, style }) {
  return (
    <div style={style}>
      {data.map((d, i) => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            padding: "20px",
          }}
          key={i}
        >
          <div
            style={{ marginRight: "23px", height: "100%", alignSelf: "center" }}
          >
            <NumberWithLabel
              labelText={d.heading}
              mainText={d.value}
              mainTextStyle={{
                color: d.color,
              }}
            />
          </div>
          <div>
            {d.subValues.map((s, i) => (
              <h1 style={{ color: d.color }} key={i}>
                {s}
              </h1>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default NumberWithLabelBox;
