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
function Features({ settings, setSettings }) {
  const handleChangeFeatures = (event) => {
    const newValue = event.target.value;
    setSettings({
      ...settings,
      features: newValue,
      featuresLabel: newValue == "w" ? "Words" : "Character",
    });
  };
  return (
    <>
      {/*Choose MFW or nGram*/}
      <FormControl>
        <RadioGroup
          row
          defaultValue="w"
          value={settings.features}
          label={settings.featuresLabel}
          onChange={handleChangeFeatures}
        >
          <FormControlLabel control={<Radio value="w" />} label="Words" />
          <FormControlLabel control={<Radio value="c" />} label="Characters" />
        </RadioGroup>
      </FormControl>
    </>
  );
}

export default Features;
