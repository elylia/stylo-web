import React from "react";
import ScatterHighlightableCircles from "./scatterHighlightableCircles";
import ScatterHighlightableLabels from "./scatterHighlightableLabels";

function ScatterPlot({ data, label1, label2, searchQuery, labelOnOff }) {
  let listPrefix = [];
  data.forEach(function (d) {
    let prefix = d.name?.match(/.*?(?=[\_][A-Za-z0-9]+)/);
    if (prefix === undefined) {
    } else if (listPrefix.includes(prefix[0])) {
    } else {
      listPrefix.push(prefix[0]);
    }
  });

  if (labelOnOff) {
    return (
      <ScatterHighlightableLabels
        data={data}
        listPrefix={listPrefix}
        searchQuery={searchQuery}
        label1={label1}
        label2={label2}
      />
    );
  } else {
    return (
      <ScatterHighlightableCircles
        data={data}
        listPrefix={listPrefix}
        searchQuery={searchQuery}
        label1={label1}
        label2={label2}
      />
    );
  }
}

export default ScatterPlot;
