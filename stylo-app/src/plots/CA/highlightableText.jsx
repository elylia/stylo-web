import React, { useEffect, useRef } from "react";
import getHighlighting from "./getHighlighting";
import getColor from "./getColor";

export default function HighlightableText({
  d,
  listPrefix,
  searchQuery,
  currentZoom,
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
      <rect
        transform={
          currentZoom
            ? `scale(${Math.max(
                0.7,
                Math.min(2, 1 / currentZoom.transform.k)
              )})`
            : ""
        }
        x={d.children ? -8 : 8}
        y={-11}
        width={getBBoxWidth()}
        height={getBBoxHeight()}
        fill={getHighlighting(d.data.name, searchQuery)}
        stroke={getHighlighting(d.data.name, searchQuery)}
      />
      <text
        ref={textRef}
        transform={
          currentZoom
            ? `scale(${Math.max(
                0.7,
                Math.min(2, 1 / currentZoom.transform.k)
              )})`
            : ""
        }
        dx={d.children ? -8 : 8}
        dy={3}
        textAnchor={d.children ? "end" : "start"}
        fill={getColor(d, listPrefix)}
        style={{
          backgroundColor: getHighlighting(d.data.name, searchQuery),
          padding: "2px",
          borderRadius: "3px",
        }}
      >
        {d.data.name}
      </text>
    </React.Fragment>
  );
}
