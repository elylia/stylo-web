import React, { useState } from "react";
import { FormControlLabel, FormGroup, Slider, Switch } from "@mui/material";
import ScatterPlot from "../plots/scatter/scatterPlot";
import Search from "../search/search";

const ExportScatter = ({}) => {
  const data = window.data;
  const label = window.label;
  const [currentMfwSliderIndex, setCurrentMfwSliderIndex] = useState(0);
  const [currentCullSliderIndex, setCurrentCullSliderIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [labelOnOff, setLabelOnOff] = useState(false);
  const cullData = [...new Set(data.map((item) => item.culling))];
  const mfwData = [...new Set(data.map((item) => item.mfw))];

  const handleSearchQuery = (event) => {
    const newValue = event.target.value;
    setSearchQuery(newValue);
  };

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
    <div className="plotSlider">
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
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                role="toggle switch"
                onChange={(event) => setLabelOnOff(event.target.checked)}
              />
            }
            label="Show Labels"
          />
        </FormGroup>
      </div>
      <ScatterPlot
        data={
          data.find(
            (element) =>
              element.mfw == mfwData[currentMfwSliderIndex] &&
              element.culling == cullData[currentCullSliderIndex]
          ).data
        }
        label1={
          label.find(
            (element) =>
              element.mfw == mfwData[currentMfwSliderIndex] &&
              element.culling == cullData[currentCullSliderIndex]
          ).label1
        }
        label2={
          label.find(
            (element) =>
              element.mfw == mfwData[currentMfwSliderIndex] &&
              element.culling == cullData[currentCullSliderIndex]
          ).label2
        }
        searchQuery={searchQuery}
        labelOnOff={labelOnOff}
      />
      {mfwData.length > 1 && (
        <React.Fragment>
          <div className="slider">
            <h2>Select MFW</h2>
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
            <h2>Select Culling</h2>

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

export default ExportScatter;
