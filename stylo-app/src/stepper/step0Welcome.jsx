import * as React from "react";
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
        <b>Let's go! Just click on Get started.</b>
      </div>
      <div className="buttonRight">
        <Button onClick={handleNext} variant="contained" color="primary">
          <b>Get Started</b>
        </Button>
      </div>
    </React.Fragment>
  );
}

export default Step0;
