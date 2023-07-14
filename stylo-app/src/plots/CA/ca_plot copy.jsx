import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import getColor from "./getColor";
import getXYfromJSONTree from "./getXY";

const CaPlotCopy = () => {
  let width = 1000;
  let height = 500;
  const [data, setData] = useState({
    name: ["dummy_dummy"],
    height: [0],
    order: [0],
  });
  const ref = useRef();
  const fetchJson = () => {
    fetch("tree_JSON.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  };
  useEffect(() => {
    fetchJson();
  }, []);

  let ymax = -Number.MAX_VALUE;
  let ymin = Number.MAX_VALUE;
  let xmax = -Number.MAX_VALUE;
  let xmin = Number.MAX_VALUE;

  getXYfromJSONTree(data);
  const treeRoot = d3.hierarchy(data);
  const nodes = treeRoot.descendants();
  const links = treeRoot.links();

  nodes.forEach(function (d) {
    d.y = d.data.height[0];
    if (d.y > ymax) ymax = d.y;
    if (d.y < ymin) ymin = d.y;
    if (d.x > xmax) xmax = d.x;
    if (d.x < xmin) xmin = d.x;
  });
  let list_prefix = [];
  let i = 0;
  treeRoot.descendants().forEach(function (d) {
    let prefix = d.data.name?.[0].match(/.*?(?=[\_][A-Za-z0-9])/);
    if (prefix === undefined) {
    } else if (list_prefix.includes(prefix[0])) {
    } else {
      list_prefix.push(prefix[0]);
    }
  });
  ymin = ymin - 0.2;
  const x = d3
    .scaleLinear()
    .domain([ymax, ymin])
    .range([0, width - 250]);
  const y = d3
    .scaleLinear()
    .domain([xmin, xmax])
    .range([100, height - 20]);

  const handleZoom = (event) => {
    const zoomTransform = event.transform;

    // Apply the zoom transform to the appropriate elements
    const zoomGroup = d3.select(ref.current).select(".zoom_group");
    zoomGroup.attr("transform", zoomTransform);

    // Adjust the transform of the axis group based on the zoom transform
    const axisGroup = d3.select(ref.current).select(".axis_group");
    axisGroup.attr(
      "transform",
      `translate(${100 + zoomTransform.x}, ${40 * zoomTransform.k}) scale(${
        zoomTransform.k
      })`
    );

    // Update the x and y scales based on the zoom transform
    const newXScale = zoomTransform.rescaleX(x);
    const newYScale = zoomTransform.rescaleY(y);

    // Update the link generator with the new scales
    link.x((d) => newXScale(d.y));
    link.y((d) => newYScale(d.x));

    // Update the positions of nodes and links based on the zoom transform
    const nodesGroup = d3.select(ref.current).selectAll(".node");
    nodesGroup.attr(
      "transform",
      (d) => `translate(${newXScale(d.y)}, ${newYScale(d.x)})`
    );

    const linksGroup = d3.select(ref.current).selectAll(".lines");
    linksGroup.attr("d", (d) => link(d));
  };

  let zoom = d3.zoom().on("zoom", handleZoom);

  useEffect(() => {
    d3.select(ref.current).call(zoom);
  }, []);

  const link = d3
    .linkVertical()
    .x(function (d) {
      return x(d.y);
    })
    .y(function (d) {
      return y(d.x);
    });

  return (
    <svg width={width} height={height} ref={ref}>
      <g transform="translate(100,0)"></g>
      <g className="zoom_group">
        {links.map((d, i) => (
          <path
            key={
              i +
              "M" +
              x(d.source.y) +
              "," +
              y(d.source.x) +
              "v" +
              (y(d.target.x) - y(d.source.x)) +
              "h" +
              (x(d.target.y) - x(d.source.y))
            }
            d={
              "M" +
              x(d.source.y) +
              "," +
              y(d.source.x) +
              "v" +
              (y(d.target.x) - y(d.source.x)) +
              "h" +
              (x(d.target.y) - x(d.source.y))
            }
            className="lines"
          />
        ))}
        {nodes.map((d, i) => (
          <g
            key={d.data.name ?? i}
            className="node"
            transform={"translate(" + x(d.y) + "," + y(d.x) + ")"}
          >
            <circle r="4.5" />
            <text
              dx={d.children ? -8 : 8}
              dy={3}
              textAnchor={d.children ? "end" : "start"}
              fill={getColor(d, list_prefix)}
            >
              {d.data.name}
            </text>
          </g>
        ))}
      </g>
      <g className="axis_group" transform={`translate(100, 40)`}>
        <rect
          className="axis_rect"
          x={10}
          y={-60}
          width={x(ymin) - x(ymax)}
          height={100}
          stroke="white"
          fill="white"
        />
        <line x1={x(ymin)} y1={0} x2={x(ymax)} y2={0} />
        {x.ticks(10).map((d) => (
          <line key={d} className="ticks" x1={x(d)} y1={-3} x2={x(d)} y2={5} />
        ))}
        {x.ticks(10).map((d) => (
          <text key={d} className="label" x={x(d)} y={-6} textAnchor="middle">
            {d}
          </text>
        ))}
      </g>
    </svg>
  );
};

export default CaPlotCopy;
