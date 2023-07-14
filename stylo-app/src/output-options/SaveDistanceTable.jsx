import { useState } from "react";

import "../App.css";
import * as React from "react";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

function SaveDistanceTable() {
  return (
    <>
      <FormGroup>
        <FormControlLabel control={<Switch />} label="Save Distance Table" />
      </FormGroup>
    </>
  );
}

export default SaveDistanceTable;
