import React from "react";

function AxisBottom({ xScale, height, label, width }) {
  const textPadding = 10;

  const axis = xScale.ticks(10).map((d, i) => (
    <React.Fragment>
      <g className="x-tick" key={i}>
        <line
          style={{ stroke: "#e4e5eb" }}
          y1={0}
          y2={height}
          x1={xScale(d)}
          x2={xScale(d)}
        />

        <text
          style={{ textAnchor: "middle", fontSize: 12 }}
          dy=".71em"
          x={xScale(d)}
          y={height + textPadding}
        >
          {d}
        </text>
        <text
          style={{ textAnchor: "middle", fontSize: 12 }}
          dy=".71em"
          y={height + textPadding}
          x={width + 50}
        >
          {label}
        </text>
      </g>
    </React.Fragment>
  ));
  return <>{axis}</>;
}

export default AxisBottom;
