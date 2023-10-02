import React, { useEffect, useState } from "react";
import { scaleLinear } from "d3-scale";
import { extent } from "d3-array";
import AxisLeft from "./axisLeft";
import AxisBottom from "./axisBottom";
import { Tooltip } from "./Tooltip";
import getFillColor from "./getFillColor";
import useResizeObserver from "@react-hook/resize-observer";
import useElementSize from "./svgSizer";

function ScatterPlot({ data, label1, label2 }) {
  const [hoveredGroup, setHoveredGroup] = useState(null);
  const [interactionData, setInteractionData] = useState(null);
  const [opacity, setOpacity] = useState(1);
  const [svgRef, svgSize] = useElementSize();

  let listPrefix = [];
  data.forEach(function (d) {
    let prefix = d.name?.match(/.*?(?=[\_][A-Za-z0-9]+)/);
    if (prefix === undefined) {
    } else if (listPrefix.includes(prefix[0])) {
    } else {
      listPrefix.push(prefix[0]);
    }
  });

  const w = svgSize.width,
    h = svgSize.height,
    margin = {
      top: 40,
      bottom: 40,
      left: 100,
      right: 90,
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
    }, 500);

    return () => clearTimeout(timer);
  }, [hoveredGroup]);

  const dataPoints = data.map((d, i) => {
    return (
      <circle
        key={i}
        r={7} // radius
        cx={xScale(d.V1 || d.PC1 || d.X1)}
        cy={yScale(d.V2 || d.PC2 || d.X2)}
        names={d.name || d._row}
        opacity={
          d.name?.match(/.*?(?=[\_][A-Za-z0-9]+)/)[0] === hoveredGroup ||
          !hoveredGroup
            ? 1
            : opacity
        }
        stroke={getFillColor(d, listPrefix)}
        fill={getFillColor(d, listPrefix)}
        fillOpacity={0.2}
        strokeWidth={1}
        onMouseOver={() =>
          setHoveredGroup(d.name?.match(/.*?(?=[\_][A-Za-z0-9]+)/)[0])
        }
        onMouseEnter={() =>
          setInteractionData({
            xPos: xScale(d.V1 || d.PC1 || d.X1),
            yPos: yScale(d.V2 || d.PC2 || d.X2),
            name: d.name || d._row,
            w: w,
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
      <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>
        <svg id={"svg-chart"} className={"scatterChart"} ref={svgRef}>
          <g transform={`translate(${margin.left},${margin.top})`}>
            <AxisLeft yScale={yScale} width={width} label={label2} />
            <AxisBottom
              xScale={xScale}
              height={height}
              label={label1}
              width={width}
            />
            {dataPoints}
          </g>
        </svg>
        <div
          style={{
            width: w,
            position: "absolute",
            top: 0,
            left: `calc((100% - ${w}px) / 2)`,
            pointerEvents: "none",
          }}
        >
          <Tooltip interactionData={interactionData} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default ScatterPlot;
