import React, { useEffect } from "react";
import useElementSize from "./svgSizer";
import { scaleLinear } from "d3-scale";
import { extent } from "d3-array";

import AxisLeft from "./axisLeft";
import AxisBottom from "./axisBottom";
import ScatterHighlightableLabelsMap from "./scatterHighlightableLabelsMap";
export default function ScatterHighlightableLabels({
  data,
  listPrefix,
  searchQuery,
  label1,
  label2,
}) {
  const [svgRef, svgSize] = useElementSize();

  useEffect(() => {});

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

  const datapoints = data.map((d) => (
    <ScatterHighlightableLabelsMap
      d={d}
      listPrefix={listPrefix}
      searchQuery={searchQuery}
      key={d.name}
      xScale={xScale}
      yScale={yScale}
    />
  ));

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
            {datapoints}
          </g>
        </svg>
      </div>
    </React.Fragment>
  );
}
