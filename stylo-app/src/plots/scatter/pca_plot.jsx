import { width } from "@mui/system";
import React, { useEffect, useState } from "react";
import { scaleLinear } from "d3-scale";
import { extent } from "d3-array";
import AxisLeft from "./axisLeft";
import AxisBottom from "./axisBottom";
import * as d3 from "d3";
import { Tooltip } from "./Tooltip";
import getFillColor from "./getFillColor";
//To-Do: Skala verschiebt sich bei PCV
//To-Do: Beim ersten Hovern ändert sich die Opacity sofort
function PcaPlot() {
  const [data, setData] = useState([]);
  const [hoveredGroup, setHoveredGroup] = useState(null);
  const [interactionData, setInteractionData] = useState(null);
  const [opacity, setOpacity] = useState(1);

  // Read JSON Data
  const fetchJson = () => {
    fetch("pca_JSON.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    fetchJson();
  }, []);

  const colors = [
    "#006400",
    "#00008b",
    "#b03060",
    "#ff0000",
    "#ffff00",
    "#00ff00",
    "#00ffff",
    "#ff00ff",
    "#6495ed",
    "#ffdead",
  ];

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
    .domain(extent(data, (d) => d.V1 || d.PC1 * 1.2))
    .range([0, width]);

  const yScale = scaleLinear()
    .domain(extent(data, (d) => d.V2 || d.PC2 * 1.2))
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
        cx={xScale(d.V1 || d.PC1)} // position on the X axis
        cy={yScale(d.V2 || d.PC2)} // on the Y axis
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
            xPos: xScale(d.V1 || d.PC1),
            yPos: yScale(d.V2 || d.PC2),
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
    </React.Fragment>
  );
}

export default PcaPlot;
