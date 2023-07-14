import { useState } from "react";

import "../App.css";
import * as React from "react";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

function NativeEncoding() {
  return (
    <>
      <FormGroup>
        <FormControlLabel control={<Switch />} label="Native Encoding" />
      </FormGroup>
    </>
  );
}

export default NativeEncoding;
