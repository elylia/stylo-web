import React from "react";

function AxisLeft({ yScale, width, label }) {
  const textPadding = -20;

  const axis = yScale.ticks(10).map((d, i) => (
    <React.Fragment>
      <g key={i} className="y-tick">
        <line
          style={{ stroke: "#e4e5eb" }}
          y1={yScale(d)}
          y2={yScale(d)}
          x1={0}
          x2={width}
        />
        <text style={{ fontSize: 12 }} x={textPadding} dy=".32em" y={yScale(d)}>
          {d}
        </text>
        <text style={{ fontSize: 12 }} x="-98" dy=".32em">
          {label}
        </text>
      </g>
    </React.Fragment>
  ));
  return <>{axis}</>;
}

export default AxisLeft;
