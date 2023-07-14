import { useState } from "react";

import "../App.css";
import * as React from "react";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

function DeletePronouns({ settings, setSettings }) {
  const handleChangePronouns = (event) => {
    const newValue = event.target.value;
    setSettings({ ...settings, pronouns: newValue });
    onValueChange(newValue);
  };
  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={<Switch />}
          label="Delete Pronouns"
          value={settings.pronouns}
          onChange={handleChangePronouns}
        />
      </FormGroup>
    </>
  );
}

export default DeletePronouns;
