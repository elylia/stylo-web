import { useState } from "react";

import "../App.css";
import * as React from "react";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

function SaveFrequencyTable() {
  return (
    <>
      <FormGroup>
        <FormControlLabel control={<Switch />} label="Save Frequency Table" />
      </FormGroup>
    </>
  );
}

export default SaveFrequencyTable;
