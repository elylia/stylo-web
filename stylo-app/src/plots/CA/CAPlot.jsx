import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import getColor from "./getColor";
import getXYfromJSONTree from "./getXY";
import HighlightableText from "./highlightableText";

const CaPlot = ({ data, searchQuery }) => {
  let width = 1000;
  const [height, setHeight] = useState(500);
  const [currentZoom, setCurrentZoom] = useState();
  const svgRef = useRef();

  function handleZoom(e) {
    setCurrentZoom(e);
  }
  let zoom = d3.zoom().on("zoom", handleZoom);
  useEffect(() => {
    d3.select(svgRef.current).call(zoom);
  });

  //set up links between nodes
  const link = d3
    .linkVertical()
    .x(function (d) {
      return x(d.y);
    })
    .y(function (d) {
      return y(d.x);
    });

  let ymax = -Number.MAX_VALUE;
  let ymin = Number.MAX_VALUE;
  let xmax = -Number.MAX_VALUE;
  let xmin = Number.MAX_VALUE;

  //get x & y values from JSON file

  getXYfromJSONTree(data);
  //get hierarchy from JSON file
  const treeRoot = d3.hierarchy(data);
  //define nodes (descendants of root node)
  const nodes = treeRoot.descendants();

  //define links between nodes
  const calculateHeight = () => {
    const leafNodes = nodes.filter((node) => !node.children);
    const labelHeight = 25;
    return leafNodes.length * labelHeight;
  };

  const updateHeight = () => {
    const requiredHeight = calculateHeight();
    if (requiredHeight > height) {
      setHeight(requiredHeight);
    }
  };

  useEffect(() => {
    updateHeight();
  }, [nodes]);

  const links = treeRoot.links();
  //reverse the dendrogram  (so it goes from left to right)
  nodes.forEach(function (d, i) {
    d.y = d.data.height;
  });
  //get list of prefixes from text names for color coding
  let listPrefix = [];
  let i = 0;
  treeRoot.descendants().forEach(function (d) {
    let prefix = d.data.name?.match(/.*?(?=[\_][A-Za-z0-9])/);
    if (prefix === undefined) {
    } else if (listPrefix.includes(prefix[0])) {
    } else {
      listPrefix.push(prefix[0]);
    }
  });

  let counter = 0;
  treeRoot.eachAfter(function (d) {
    if (d.children) {
      d.x = (d.children[0].x + d.children[1].x) / 2;
    } else {
      d.x = 100 * counter++;
    }
  });

  nodes.forEach(function (d) {
    if (d.y > ymax) ymax = d.y * 1.01;
    if (d.y < ymin) ymin = d.y * 1.01;
    if (d.x > xmax) xmax = d.x * 1.01;
    if (d.x < xmin) xmin = d.x * 1.01;
  });
  ymin = ymin - 0.2;
  const x = d3
    .scaleLinear()
    .domain([ymax, ymin])
    .range([0, width - 250]);
  const xinv = d3
    .scaleLinear()
    .domain([ymax, ymin])
    .range([0, width - 250]);
  const y = d3
    .scaleLinear()
    .domain([xmin, xmax])
    .range([100, height - 20]);

  return (
    <svg width={width} ref={svgRef} id={"svg-chart"} className={"caChart"}>
      <g transform="translate(100,0)"></g>
      <g className="zoom_group" transform={currentZoom?.transform}>
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
            <circle
              r="4.5"
              transform={
                currentZoom
                  ? `scale(${Math.max(
                      0.4,
                      Math.min(1, 1 / currentZoom.transform.k)
                    )})`
                  : ""
              }
            />
            <HighlightableText
              d={d}
              searchQuery={searchQuery}
              currentZoom={currentZoom}
              listPrefix={listPrefix}
            ></HighlightableText>
          </g>
        ))}
      </g>
      <g
        className="axis_group"
        transform={
          currentZoom
            ? `translate(${currentZoom.transform.x},40) scale(${currentZoom.transform.k})` //vor dem ersten current Zoom wurde "100 +" entfernt
            : "translate(100,40)"
        }
      >
        <rect
          className="axis_rect"
          x={10}
          y={-60}
          width={x(ymin) - x(ymax)}
          height={65}
          stroke="white"
          fill="white"
        />
        <line x1={x(ymin)} y1={0} x2={x(ymax)} y2={0} />
        {x.ticks(10).map((d) => (
          <line key={d} className="ticks" x1={x(d)} y1={-3} x2={x(d)} y2={5} />
        ))}
        {x.ticks(10).map((d) => (
          <text
            transform={
              currentZoom
                ? `scale(${Math.max(
                    0.7,
                    Math.min(2, 1 / currentZoom.transform.k)
                  )})`
                : ""
            }
            key={d}
            className="label"
            x={x(d)}
            y={-6}
            textAnchor="middle"
          >
            {d}
          </text>
        ))}
      </g>
    </svg>
  );
};

export default CaPlot;
