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
      <div>
        <h1>Welcome to stylo web!</h1>
        <br />
        <p>
          A web application where you can perform stylometric analysis online,
          get interactive results and save them for later use.{" "}
          <AboutDialogGetStarted /> if you want to know more.
        </p>
        <b>Get started by clicking on NEXT.</b>
      </div>
      <div className="buttonRight">
        <Button onClick={handleNext} variant="contained" color="primary">
          Next
        </Button>
      </div>
    </React.Fragment>
  );
}

export default Step0;
