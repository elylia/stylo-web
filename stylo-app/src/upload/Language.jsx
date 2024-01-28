import * as React from "react";
import TextField from "@mui/material/TextField";
import { Autocomplete } from "@mui/material";

const languages = [
  { value: "cjk", label: "CJK" },
  { value: "dutch", label: "Dutch" },
  { value: "english", label: "English" },
  { value: "english.all", label: "English (all)" },
  { value: "english.contr", label: "English (contr.)" },
  { value: "french", label: "French" },
  { value: "german", label: "German" },
  { value: "hungarian", label: "Hungarian" },
  { value: "italian", label: "Italian" },
  { value: "latin", label: "Latin" },
  { value: "latin.corr", label: "Latin (corr.)" },
  { value: "polish", label: "Polish" },
  { value: "spanish", label: "Spanish" },
  { value: "other", label: "Other" },
];
export default function Language({ settings, setSettings }) {
  const handleChangeLanguage = (event, newValue) => {
    setSettings({
      ...settings,
      language: newValue.value,
      languageLabel: newValue.label,
    });
  };
  return (
    <Autocomplete
      disablePortal
      id="ComboBoxType"
      options={languages}
      size="small"
      value={settings.languageLabel}
      onChange={handleChangeLanguage}
      sx={{ width: 300 }}
      ListboxProps={{
        style: {
          maxHeight: 200,
          maxWidth: 300,
          overflow: "scroll",
          tabindex: "0",
        },
      }}
      renderInput={(params) => <TextField {...params} label="Language" />}
    />
  );
}
