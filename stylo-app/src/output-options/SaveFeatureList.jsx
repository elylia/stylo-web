import * as React from "react";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

function SaveFeatureList({ settings, setSettings }) {
  const handleChangeCase = (event) => {
    const newValue = event.target.checked;
    setSettings({ ...settings, featureList: newValue });
  };

  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={settings.featureList}
              onChange={handleChangeCase}
            />
          }
          label="Save Feature List(s)"
        />
      </FormGroup>
    </>
  );
}

export default SaveFeatureList;
