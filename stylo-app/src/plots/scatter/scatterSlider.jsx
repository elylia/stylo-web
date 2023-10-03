import React, { useEffect, useState } from "react";
import { Box, Slider } from "@mui/material";
import ScatterPlot from "./scatterPlot";
import InfoPlots from "../../infoText/infoPlots";
import SavePng from "../../download/savePng";

const ScatterSlider = ({ url, settings, labelUrl }) => {
  const [data, setData] = useState([
    {
      mfw: 100,
      culling: 0,
      data: [{ name: "dummy_dummy", X1: 0, X2: 0 }],
    },
  ]);
  const [label, setLabel] = useState([
    {
      mfw: 100,
      culling: 0,
      label1: [""],
      label2: [""],
    },
  ]);
  const [currentMfwSliderIndex, setCurrentMfwSliderIndex] = useState(0);
  const [currentCullSliderIndex, setCurrentCullSliderIndex] = useState(0);

  const fetchJson = () => {
    fetch("api/" + url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  };

  const fetchLabel = () => {
    fetch("api/" + labelUrl)
      .then((response) => {
        return response.json();
      })
      .then((label) => {
        setLabel(label);
      });
  };
  useEffect(() => {
    fetchJson();
  }, [url]);
  useEffect(() => {
    fetchLabel();
  }, [labelUrl]);
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
    <div className="plotSlider">
      <h1>{settings.analysisTypeLabel} </h1>
      <div className="settingsDownload">
        <InfoPlots settings={settings} />
        <SavePng
          settings={settings}
          mfw={mfwData[currentMfwSliderIndex]}
          cull={cullData[currentCullSliderIndex]}
        />
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
      />
      {mfwData.length > 1 && (
        <React.Fragment>
          <div className="slider">
            <h2>MFW</h2>
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
            <h2>Culling</h2>

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

export default ScatterSlider;
