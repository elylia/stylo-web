import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import getColor from "./getColor";
import getXYfromJSONTree from "./getXY";

const CaPlot = ({ url }) => {
  let width = 1000;
  let height = 500;
  const [data, setData] = useState({
    name: "dummy_dummy",
    height: 0,
    order: 0,
  });
  const [currentZoom, setCurrentZoom] = useState();
  const ref = useRef();
  const fetchJson = () => {
    fetch("http://localhost:5000/" + url)
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

  //set zoom function
  function handleZoom(e) {
    setCurrentZoom(e);
  }
  let zoom = d3.zoom().on("zoom", handleZoom);
  useEffect(() => {
    d3.select(ref.current).call(zoom);
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
  const links = treeRoot.links();
  //reverse the dendrogram  (so it goes from left to right)
  nodes.forEach(function (d, i) {
    /*debugger;
         if (typeof xs[i] != "undefined") {
           d.x = xs[i];
         }
         if (typeof ys[i] != "undefined") {
           d.y = ys[i];
         }*/
    d.y = d.data.height;
  });
  //get list of prefixes from text names for color coding
  let list_prefix = [];
  let i = 0;
  treeRoot.descendants().forEach(function (d) {
    let prefix = d.data.name?.match(/.*?(?=[\_][A-Za-z0-9])/);
    if (prefix === undefined) {
    } else if (list_prefix.includes(prefix[0])) {
    } else {
      list_prefix.push(prefix[0]);
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
    if (d.y > ymax) ymax = d.y;
    if (d.y < ymin) ymin = d.y;
    if (d.x > xmax) xmax = d.x;
    if (d.x < xmin) xmin = d.x;
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
    <svg width={width} height={height} ref={ref}>
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
            <circle r="4.5" />
            <text
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
              fill={getColor(d, list_prefix)}
            >
              {d.data.name}
            </text>
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
        {" "}
        <rect
          className="axis_rect"
          x={10}
          y={-60}
          width={x(ymin) - x(ymax)}
          height={65}
          stroke="white"
          fill="white"
        />{" "}
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
