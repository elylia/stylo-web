import { useState } from "react";

import "../App.css";
import * as React from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
{
  /*To-DO: Wert übergeben*/
}
function Features() {
  return (
    <>
      {/*Choose MFW or nGram*/}
      <FormControl>
        <RadioGroup row defaultValue="w">
          <FormControlLabel value="w" control={<Radio />} label="Words" />
          <FormControlLabel value="c" control={<Radio />} label="Characters" />
        </RadioGroup>
      </FormControl>
    </>
  );
}

export default Features;
