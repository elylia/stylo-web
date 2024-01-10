import React, { useEffect, useState } from "react";
import { scaleLinear } from "d3-scale";
import { extent } from "d3-array";
import useElementSize from "../scatter/svgSizer";
import * as d3 from "d3";
import TsneHighlightableText from "./TsneHighlightableText";

function TsnePlot({ data, searchQuery }) {
  const [svgRef, svgSize] = useElementSize();
  const [currentZoom, setCurrentZoom] = useState();
  const [interactionData, setInteractionData] = useState(null);

  let width = svgSize.width;
  let height = svgSize.height;
  let margin = {
    top: 40,
    bottom: 40,
    left: 40,
    right: 40,
  };
  function handleZoom(e) {
    setCurrentZoom(e);
  }
  let zoom = d3.zoom().on("zoom", handleZoom);
  useEffect(() => {
    d3.select(svgRef.current).call(zoom);
  });
  let listPrefix = [];
  data.forEach(function (d) {
    let prefix = d.name?.match(/.*?(?=[\_][A-Za-z0-9]+)/);
    if (prefix === undefined) {
    } else if (listPrefix.includes(prefix[0])) {
    } else {
      listPrefix.push(prefix[0]);
    }
  });

  const dataPoints = data.map((d, i) => {
    const xScale = scaleLinear()
      .domain(extent(data, (d) => d.V1 * 1.2))
      .range([0, width]);

    const yScale = scaleLinear()
      .domain(extent(data, (d) => d.V2 * 1.2))
      .range([height, 0]);

    return (
      <TsneHighlightableText
        d={d}
        searchQuery={searchQuery}
        currentZoom={currentZoom}
        listPrefix={listPrefix}
        x={xScale(d.V1)}
        y={yScale(d.V2)}
      />
    );
  });
  return (
    <React.Fragment>
      <svg ref={svgRef} id={"svg-chart-tsne"}>
        <g className="zoom_group" transform={currentZoom?.transform}>
          {dataPoints}
        </g>
      </svg>
    </React.Fragment>
  );
}

export default TsnePlot;
