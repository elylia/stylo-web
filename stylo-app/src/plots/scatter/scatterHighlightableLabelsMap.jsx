import React, { useRef } from "react";
import ScatterGetHighlightingLabel from "./ScatterGetHighlightingLabel";
import getFillColor from "./getFillColor";

export default function ScatterHighlightableLabelsMap({
  listPrefix,
  searchQuery,
  d,
  xScale,
  yScale,
}) {
  const textRef = useRef();
  const textX = xScale(d.V1 || d.PC1 || d.X1);
  const textY = yScale(d.V2 || d.PC2 || d.X2);

  const getBBoxWidth = () => {
    if (textRef.current) {
      return textRef.current.getBBox().width;
    }
    return 0;
  };
  const getBBoxHeight = () => {
    if (textRef.current) {
      return textRef.current.getBBox().height;
    }
    return 0;
  };

  const rectWidth = getBBoxWidth();
  const rectHeight = getBBoxHeight();
  return (
    <React.Fragment>
      <rect
        x={textX}
        y={textY - rectHeight + 4}
        width={rectWidth}
        height={rectHeight}
        dx={d.children ? -8 : 8}
        dy={-11}
        fill={ScatterGetHighlightingLabel(d.name, searchQuery)}
        stroke={ScatterGetHighlightingLabel(d.name, searchQuery)}
      />
      <text
        ref={textRef}
        x={xScale(d.V1 || d.PC1 || d.X1)}
        y={yScale(d.V2 || d.PC2 || d.X2)}
        opacity={1}
        fontSize="12px"
        textAnchor="start"
        fill={getFillColor(d, listPrefix)}
        style={{
          backgroundColor: ScatterGetHighlightingLabel(d.name, searchQuery),
          borderRadius: "3px",
        }}
      >
        {d.name}
      </text>
    </React.Fragment>
  );
}
