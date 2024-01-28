import React, { useState } from "react";
import { Slider } from "@mui/material";
import Search from "../search/search";
import TsnePlot from "../plots/tsne/tsnePlot";

const ExportTsne = () => {
  const data = window.data;

  const [currentMfwSliderIndex, setCurrentMfwSliderIndex] = useState(0);
  const [currentCullSliderIndex, setCurrentCullSliderIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQuery = (event) => {
    const newValue = event.target.value;
    setSearchQuery(newValue);
  };

  const cullData = [...new Set(data.map((item) => item.culling))];
  const mfwData = [...new Set(data.map((item) => item.mfw))];

  const handleMfwSliderChange = (event) => {
    const index = parseInt(event.target.value, 10);
    setCurrentMfwSliderIndex(index);
  };

  const handleCullSliderChange = (event) => {
    const index = parseInt(event.target.value, 10);
    setCurrentCullSliderIndex(index);
  };

  const mfwMarks = mfwData.map((value, index) => ({
    value: index,
    label: value.toString(),
  }));

  const cullMarks = cullData.map((value, index) => ({
    value: index,
    label: value.toString(),
  }));

  return (
    <div className="plotSliderTsne">
      <div className="settingsDownload" style={{ marginTop: "10px" }}>
        <Search
          onChange={handleSearchQuery}
          labels={
            data.find(
              (element) =>
                element.mfw == mfwData[currentMfwSliderIndex] &&
                element.culling == cullData[currentCullSliderIndex]
            ).data.name
          }
        />
      </div>
      <TsnePlot
        data={
          data.find(
            (element) =>
              element.mfw == mfwData[currentMfwSliderIndex] &&
              element.culling == cullData[currentCullSliderIndex]
          ).data
        }
        searchQuery={searchQuery}
      />
      {mfwData.length > 1 && (
        <React.Fragment>
          <div className="slider">
            <h2>MFW Selection</h2>
            <Slider
              min={0}
              max={mfwData.length - 1}
              value={currentMfwSliderIndex}
              onChange={handleMfwSliderChange}
              valueLabelDisplay="auto"
              valueLabelFormat={(value) => mfwMarks[value].label}
              size="small"
              marks
            />
          </div>
        </React.Fragment>
      )}
      {cullData.length > 1 && (
        <React.Fragment>
          <div className="slider">
            <h2>Culling Selection</h2>

            <Slider
              min={0}
              max={cullData.length - 1}
              value={currentCullSliderIndex}
              onChange={handleCullSliderChange}
              valueLabelDisplay="auto"
              valueLabelFormat={(value) => cullMarks[value].label}
              size="small"
              marks
            />
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default ExportTsne;
