import * as React from "react";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

function DeletePronouns({ settings, setSettings }) {
  const handleChangePronouns = (event) => {
    const newValue = event.target.checked;
    setSettings({ ...settings, pronouns: newValue });
  };
  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={settings.pronouns}
              onChange={handleChangePronouns}
            />
          }
          label="Delete Pronouns"
        />
      </FormGroup>
    </>
  );
}

export default DeletePronouns;
