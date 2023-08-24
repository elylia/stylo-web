import React, { useEffect, useState } from "react";
import { scaleLinear } from "d3-scale";
import { extent } from "d3-array";
import { Tooltip } from "./tooltip";
//To-Do Farben richtig machen
function TsnePlot({ data }) {
  let width = 1000;
  let height = 500;

  const [hoveredGroup, setHoveredGroup] = useState();
  const [interactionData, setInteractionData] = useState(null);

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
    let prefix = d.names?.match(/.*?(?=[\_][A-Za-z0-9]+)/);
    if (prefix === undefined) {
    } else if (listPrefix.includes(prefix[0])) {
    } else {
      listPrefix.push(prefix[0]);
    }
  });
  function getFillColor(d) {
    for (var i = 0; i < listPrefix.length; i++) {
      let name = d.names?.match(/.*?(?=[\_][A-Za-z0-9]+)/);
      if (name === undefined) {
      } else if (listPrefix[i] === name[0]) {
        return colors[i];
      } else {
      }
    }
  }

  const dataPoints = data.map((d, i) => {
    const xScale = scaleLinear()
      .domain(extent(data, (d) => d.V1 * 1.2))
      .range([0, width]);

    const yScale = scaleLinear()
      .domain(extent(data, (d) => d.V2 * 1.2))
      .range([height, 0]);

    return (
      <text
        key={i}
        x={xScale(d.V1)} // position on the X axis
        y={yScale(d.V2)} // on the Y axis
        name={d.name}
        opacity={1}
        fontSize="10px"
        textAnchor="middle"
        fill={getFillColor(d)}
      >
        {d.name}
      </text>
    );
  });
}

export default TsnePlot;
