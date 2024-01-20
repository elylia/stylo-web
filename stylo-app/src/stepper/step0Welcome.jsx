import * as React from "react";
import AnalysisType from "../analysis-type/AnalysisType";
import DistanceMeasure from "../analysis-type/DistanceMeasure";
import InfoAnalysis from "../infoText/infoAnalysis";
import ConsensusStrength from "../analysis-type/ConsensusStrength";
import { Button } from "@mui/material";
import AboutDialogGetStarted from "../dialog/aboutDialogGetStarted";

function Step0({ handleNext }) {
  return (
    <React.Fragment>
      <div className="welcomeDiv">
        <h1>Welcome to stylo web!</h1>
        <br />
        <p>
          ➤ Perform stylometric analysis online.
          <br /> ➤ Get interactive results. <br />
          ➤ Save them for later use.
          <br />
          ➤ <AboutDialogGetStarted /> if you want to know more.
        </p>
        <b>Get started by clicking on NEXT.</b>
      </div>
      <div className="buttonRight">
        <Button onClick={handleNext} variant="contained" color="primary">
          <b>Next</b>
        </Button>
      </div>
    </React.Fragment>
  );
}

export default Step0;
