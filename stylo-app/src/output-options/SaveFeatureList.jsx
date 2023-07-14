import { useState } from "react";

import "../App.css";
import * as React from "react";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

function SaveFeatureList() {
  return (
    <>
      <FormGroup>
        <FormControlLabel control={<Switch />} label="Save Feature List" />
      </FormGroup>
    </>
  );
}

export default SaveFeatureList;
