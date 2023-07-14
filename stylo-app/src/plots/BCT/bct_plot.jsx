import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import getColor from "./getColor";
import computePosition from "./computePosition";
//To-Do: Auf neue Daten anpassen.
const BctPlot = () => {
  let width = 2000;
  let height = 1500;
  const ref = useRef();
  const [currentZoom, setCurrentZoom] = useState();

  const [data, setData] = useState({
    name: "dummy_dummy",
    branch_length: 0,
  });

  const fetchJson = () => {
    fetch("bct_JSON.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
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

  const treeRoot = d3.hierarchy(computePosition(data));
  //define nodes (descendants of root node)
  const nodes = treeRoot.descendants();
  //define links between nodes
  const links = treeRoot.links();
  //Function: Color text according to prefix

  let ymax = -Number.MAX_VALUE;
  let ymin = Number.MAX_VALUE;
  let xmax = -Number.MAX_VALUE;
  let xmin = Number.MAX_VALUE;
  //get list of prefixes from text names for color coding
  let list_prefix = [];
  let i = 0;
  treeRoot.descendants().forEach(function (d) {
    if (d.data.name) {
      let prefix = d.data.name?.match(/.*?(?=[\_][A-Za-z0-9])/);
      if (prefix === undefined) {
      } else if (list_prefix.includes(prefix[0])) {
      } else if (prefix === "") {
      } else {
        list_prefix.push(prefix[0]);
      }
    } else {
    }
  });

  let counter = 0;
  treeRoot.eachAfter(function (d) {
    d.x = d.data.x;
    d.y = d.data.y;
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
              "L" +
              x(d.target.y) +
              "," +
              y(d.target.x)
            }
            className="lines"
            strokeWidth="8"
          />
        ))}
        {nodes.map((d, i) => {
          let textrotation = 180 - d.data.angle * 180;
          let anchor = "start";
          let xvalue = 8;
          if (Math.abs(textrotation) > 90) {
            textrotation = -d.data.angle * 180;
            anchor = "end";
            xvalue = -8;
          }

          return (
            <g
              key={d.data.name || i}
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
                      )})` +
                      `
                    rotate(${textrotation})`
                    : "" + `rotate(${textrotation})`
                }
                dx={xvalue}
                dy={15}
                textAnchor={anchor}
                fill={getColor(d, list_prefix)}
                fontSize="3em"
              >
                {d.data.name}
              </text>
            </g>
          );
        })}
      </g>
    </svg>
  );
};

export default BctPlot;
