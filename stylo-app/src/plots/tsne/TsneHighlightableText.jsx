import React, { useEffect, useRef } from "react";
import getColor from "./getColor";
import TsneGetHighlighting from "./TsneGetHighlighting";

export default function TsneHighlightableText({
  d,
  listPrefix,
  searchQuery,
  currentZoom,
  x,
  y,
}) {
  useEffect(() => {});

  const textRef = useRef();

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

  return (
    <React.Fragment>
      <g
        transform={
          `translate(${x},${y}) ` +
          (currentZoom
            ? `scale(${Math.max(
                0.7,
                Math.min(2, 1 / currentZoom.transform.k)
              )})`
            : "")
        }
      >
        <rect
          dx={d.children ? -8 : 8}
          dy={-11}
          x={0}
          y={0}
          width={getBBoxWidth()}
          height={getBBoxHeight()}
          fill={TsneGetHighlighting(d.name, searchQuery)}
          stroke={TsneGetHighlighting(d.name, searchQuery)}
        />
        <text
          ref={textRef}
          dx={d.children ? -8 : 8}
          dy={3}
          x={-8}
          y={7}
          opacity={1}
          fontSize="12px"
          textAnchor="start"
          fill={getColor(d, listPrefix)}
          style={{
            backgroundColor: TsneGetHighlighting(d.name, searchQuery),
            padding: "2px",
            borderRadius: "3px",
          }}
        >
          {d.name}
        </text>
      </g>
    </React.Fragment>
  );
}
