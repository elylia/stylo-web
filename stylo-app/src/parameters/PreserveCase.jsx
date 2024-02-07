import * as React from "react";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

function PreserveCase({ settings, setSettings }) {
  const handleChangeCase = (event) => {
    const newValue = event.target.checked;
    setSettings({ ...settings, case: newValue });
  };
  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              role="toggle switch"
              checked={settings.case}
              onChange={handleChangeCase}
            />
          }
          label="Preserve Case"
        />
      </FormGroup>
    </>
  );
}

export default PreserveCase;
