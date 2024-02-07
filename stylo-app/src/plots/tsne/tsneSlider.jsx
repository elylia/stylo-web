import React, { useEffect, useState } from "react";
import { Slider } from "@mui/material";
import InfoPlots from "../../infoText/infoPlots";
import SavePng from "../../download/savePng";
import TsnePlot from "./tsnePlot";
import InfoNavigation from "../../infoText/infoNavigation";
import Search from "../../search/search";
import SaveHTML from "../../download/downloadHtml";

const TsneSlider = ({ url, settings, result }) => {
  const [data, setData] = useState([
    {
      mfw: 100,
      culling: 0,
      data: [{ name: "dummy_dummy", X1: 0, X2: 0 }],
    },
  ]);
  const [currentMfwSliderIndex, setCurrentMfwSliderIndex] = useState(0);
  const [currentCullSliderIndex, setCurrentCullSliderIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

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
        setData(data);
      });
  };

  useEffect(() => {
    fetchJson();
  }, []);

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
      <h1>
        {settings.analysisTypeLabel}
        <div className="settingsDownload">
          <InfoNavigation />

          <InfoPlots settings={settings} />
          <SavePng
            settings={settings}
            mfw={mfwData[currentMfwSliderIndex]}
            cull={cullData[currentCullSliderIndex]}
          />
          <SaveHTML
            settings={settings}
            result={result}
            mfw={mfwData[currentMfwSliderIndex]}
            cull={cullData[currentCullSliderIndex]}
          />

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
      </h1>
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

export default TsneSlider;
