import * as React from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

function Sampling({ settings, setSettings }) {
  const handleChangeSampling = (event) => {
    const newValue = event.target.value;
    let label;
    if (newValue == "no.sampling") {
      label = "No Sampling";
    } else if (newValue == "normal.sampling") {
      label = "Normal Sampling";
    } else {
      label = "Random Sampling";
    }
    setSettings({
      ...settings,
      sampling: newValue,
      samplingLabel: label,
    });
  };
  return (
    <>
      <FormControl>
        <RadioGroup
          role="radio buttons"
          row
          defaultValue="no.sampling"
          value={settings.sampling}
          label={settings.samplingLabel}
          onChange={handleChangeSampling}
        >
          <FormControlLabel
            control={<Radio value="no.sampling" />}
            label="No Sampling"
          />
          <FormControlLabel
            control={<Radio value="normal.sampling" />}
            label="Normal Sampling"
          />
          <FormControlLabel
            control={<Radio value="random.sampling" />}
            label="Random Sampling"
          />
        </RadioGroup>
      </FormControl>
    </>
  );
}

export default Sampling;
