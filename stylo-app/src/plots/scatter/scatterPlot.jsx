import React, { useEffect, useState } from "react";
import { scaleLinear } from "d3-scale";
import { extent } from "d3-array";
import AxisLeft from "./axisLeft";
import AxisBottom from "./axisBottom";
import * as d3 from "d3";
import { Tooltip } from "./Tooltip";
import getFillColor from "./getFillColor";
import styles from "./tooltip.module.css";

//To-Do: Skala verschiebt sich bei PCV
//To-Do: Beim ersten Hovern ändert sich die Opacity sofort

function ScatterPlot({ data }) {
  const [hoveredGroup, setHoveredGroup] = useState(null);
  const [interactionData, setInteractionData] = useState(null);
  const [opacity, setOpacity] = useState(1);

  // Read JSON Data

  let listPrefix = [];
  data.forEach(function (d) {
    let prefix = d.name || d._row?.match(/.*?(?=[\_][A-Za-z0-9])/);
    if (prefix === undefined) {
    } else if (listPrefix.includes(prefix[0])) {
    } else {
      listPrefix.push(prefix[0]);
    }
  });

  const w = 600,
    h = 600,
    margin = {
      top: 40,
      bottom: 40,
      left: 40,
      right: 40,
    };

  const width = w - margin.right - margin.left,
    height = h - margin.top - margin.bottom;

  const xScale = scaleLinear()
    .domain(extent(data, (d) => d.V1 || d.PC1 || d.X1 * 1.2))
    .range([0, width]);

  const yScale = scaleLinear()
    .domain(extent(data, (d) => d.V2 || d.PC2 || d.X2 * 1.2))
    .range([height, 0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(0.2);
    }, 1000);

    return () => clearTimeout(timer);
  }, [hoveredGroup]);

  const dataPoints = data.map((d, i) => {
    return (
      <circle
        key={i}
        r={7} // radius
        cx={xScale(d.V1 || d.PC1 || d.X1)} // position on the X axis
        cy={yScale(d.V2 || d.PC2 || d.X2)} // on the Y axis
        names={d.name || d._row}
        opacity={
          d.name ||
          d._row?.match(/.*?(?=[\_][A-Za-z0-9])/)[0] === hoveredGroup ||
          !hoveredGroup
            ? 1
            : opacity
        }
        stroke={getFillColor(d, listPrefix)}
        fill={getFillColor(d, listPrefix)}
        fillOpacity={0.2}
        strokeWidth={1}
        onMouseOver={() =>
          setHoveredGroup(d.name || d._row?.match(/.*?(?=[\_][A-Za-z0-9])/)[0])
        }
        onMouseEnter={() =>
          setInteractionData({
            xPos: xScale(d.V1 || d.PC1 || d.X1),
            yPos: yScale(d.V2 || d.PC2 || d.X2),
            name: d.name || d._row,
          })
        }
        onMouseLeave={() => {
          setInteractionData(null);
          setHoveredGroup(null);
          setOpacity(1);
        }}
      />
    );
  });

  return (
    <React.Fragment>
      <div style={{ position: "relative" }}>
        <svg width={w} height={h}>
          <g transform={`translate(${margin.left},${margin.top})`}>
            <AxisLeft yScale={yScale} width={width} />
            <AxisBottom xScale={xScale} height={height} />
            {dataPoints}
          </g>
        </svg>
        <div
          style={{
            width: w,
            height: h,
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
            marginLeft: margin.left,
            marginTop: margin.top,
          }}
        >
          <Tooltip interactionData={interactionData} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default ScatterPlot;