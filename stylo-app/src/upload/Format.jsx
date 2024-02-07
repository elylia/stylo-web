import * as React from "react";
import TextField from "@mui/material/TextField";
import { Autocomplete } from "@mui/material";

const formats = [
  { label: "HTML", value: "html" },
  { label: "Plain / Txt", value: "plain" },
  { label: "XML", value: "xml" },
  { label: "XML (Drama)", value: "xml.drama" },
  { label: "XML (No Titles)", value: "xml.notitles" },
];
export default function Format({ settings, setSettings }) {
  const handleChangeFormat = (event, newValue) => {
    setSettings({
      ...settings,
      format: newValue.value,
      formatLabel: newValue.label,
    });
  };
  return (
    <Autocomplete
      disablePortal
      id="ComboBoxType"
      options={formats}
      sx={{ width: 300 }}
      size="small"
      value={settings.formatLabel}
      onChange={handleChangeFormat}
      ListboxProps={{
        style: {
          maxHeight: 200,
          maxWidth: 300,
          overflow: "scroll",
          tabindex: "0",
        },
      }}
      renderInput={(params) => (
        <TextField role="dropdown" {...params} label="Format" />
      )}
    />
  );
}
