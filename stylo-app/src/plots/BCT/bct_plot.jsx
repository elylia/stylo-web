import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import getColor from "./getColor";
import computePosition from "./computePosition";
import InfoPlots from "../../infoText/infoPlots";
import InfoNavigation from "../../infoText/infoNavigation";
import SavePng from "../../download/savePng";
import Search from "../../search/search";
import BCTHighlightableText from "./BCTHighlightableText";
import useElementSize from "../scatter/svgSizer";

const BctPlot = ({ url }) => {
  const ref = useRef();
  const [currentZoom, setCurrentZoom] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [svgRef, svgSize] = useElementSize(ref);
  const width = svgSize.width;
  const height = svgSize.height;
  const [data, setData] = useState({
    name: "dummy_dummy",
    branch_length: 0,
  });
  const [factorApplied, setFactorApplied] = useState(false);

  const handleSearchQuery = (event) => {
    const newValue = event.target.value;
    setSearchQuery(newValue);
  };
  const fetchJson = () => {
    fetch("api/" + url)
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

  function handleZoom(e) {
    setCurrentZoom(e);
  }
  let zoom = d3.zoom();
  zoom.on("zoom", handleZoom);
  useEffect(() => {
    d3.select(ref.current).call(zoom);
  });

  const link = d3
    .linkVertical()
    .x(function (d) {
      return x(d.y);
    })
    .y(function (d) {
      return y(d.x);
    });

  const treeRoot = d3.hierarchy(computePosition(data));
  const nodes = treeRoot.descendants();
  const links = treeRoot.links();

  let ymax = -Number.MAX_VALUE;
  let ymin = Number.MAX_VALUE;
  let xmax = -Number.MAX_VALUE;
  let xmin = Number.MAX_VALUE;

  let listPrefix = [];
  treeRoot.descendants().forEach(function (d) {
    if (d.data.name) {
      let prefix = d.data.name?.match(/.*?(?=[\_][A-Za-z0-9])/);
      if (prefix === undefined) {
      } else if (listPrefix.includes(prefix[0])) {
      } else if (prefix === "") {
      } else {
        listPrefix.push(prefix[0]);
      }
    } else {
    }
  });

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
  let zoomWidth = Math.abs(y(xmax) - y(xmin)) + 1500;
  let zoomHeight = Math.abs(x(ymax) - x(ymin)) + 1500;
  let factorWidth = svgSize.width / zoomWidth;
  let factorHeight = svgSize.height / zoomHeight;
  let factor = 0;
  if (xmin && xmax && ymin && ymax) {
    factor = factorWidth < factorHeight ? factorWidth : factorHeight;
  }

  useEffect(() => {
    if (!factorApplied && factor > 0) {
      d3.select(ref.current).call(
        zoom.transform,
        d3.zoomIdentity
          .scale(factor)
          .translate(zoomWidth * factor, zoomHeight * factor)
      );
      setFactorApplied(true);
    }
  }, [factor]);

  return (
    <div className="bctPlot">
      <h1>
        {settings.analysisTypeLabel}
        <div className="settingsDownload">
          <InfoPlots settings={settings} />
          <SavePng settings={settings} />
          <InfoNavigation />
          <Search onChange={handleSearchQuery} labels={data.name} />
        </div>
      </h1>
      <svg ref={ref} id={"svg-chart"}>
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
              <React.Fragment>
                <g
                  key={d.data.name || i}
                  className="node"
                  transform={"translate(" + x(d.y) + "," + y(d.x) + ")"}
                >
                  <circle r="4.5" />
                </g>
              </React.Fragment>
            );
          })}

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
              <React.Fragment>
                <g
                  key={d.data.name || i}
                  className="node"
                  transform={"translate(" + x(d.y) + "," + y(d.x) + ")"}
                >
                  <BCTHighlightableText
                    d={d}
                    searchQuery={searchQuery}
                    currentZoom={currentZoom}
                    listPrefix={listPrefix}
                    anchor={anchor}
                    xvalue={xvalue}
                    textrotation={textrotation}
                  />
                </g>
              </React.Fragment>
            );
          })}
        </g>
      </svg>
    </div>
  );
};

export default BctPlot;
