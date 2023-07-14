import "../App.css";
import * as React from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

function Sampling({ samplingValue, setSamplingValue }) {
  return (
    <>
      {/*Choose Sampling Method*/}
      <FormControl>
        <RadioGroup
          row
          defaultValue="no.sampling"
          value={samplingValue}
          onChange={(event) => setSamplingValue(event.target.value)}
        >
          <FormControlLabel
            value="no.sampling"
            control={<Radio />}
            label="No Sampling"
          />
          <FormControlLabel
            value="normal.sampling"
            control={<Radio />}
            label="Normal Sampling"
          />
          <FormControlLabel
            value="random.sampling"
            control={<Radio />}
            label="Random Sampling"
          />
        </RadioGroup>
      </FormControl>
    </>
  );
}

export default Sampling;
