import React, { useEffect, useRef } from "react";
import getColor from "./getColor";
import BCTGetHighlighting from "./BCTGetHighlighting";

export default function BCTHighlightableText({
  d,
  listPrefix,
  searchQuery,
  currentZoom,
  anchor,
  xvalue,
  textrotation,
}) {
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
                0.1,
                Math.min(1, 0.5 / currentZoom.transform.k)
              )})` +
              `
                    rotate(${textrotation})`
            : "" + `rotate(${textrotation})`
        }
        x={anchor === "end" ? -getBBoxWidth() - 8 : 8}
        y={anchor === "end" ? -getBBoxHeight() + 35 : -35}
        textAnchor={anchor}
        width={getBBoxWidth()}
        height={getBBoxHeight()}
        fill={BCTGetHighlighting(d.data.name, searchQuery)}
        stroke={BCTGetHighlighting(d.data.name, searchQuery)}
      />
      <text
        ref={textRef}
        transform={
          currentZoom
            ? `scale(${Math.max(
                0.1,
                Math.min(1, 0.5 / currentZoom.transform.k)
              )})` +
              `
                    rotate(${textrotation})`
            : "" + `rotate(${textrotation})`
        }
        dx={xvalue}
        dy={15}
        textAnchor={anchor}
        fill={getColor(d, listPrefix)}
        style={{
          backgroundColor: BCTGetHighlighting(d.data.name, searchQuery),
          padding: "2px",
          borderRadius: "3px",
          fontSize: "4em",
        }}
      >
        {d.data.name}
      </text>
    </React.Fragment>
  );
}
