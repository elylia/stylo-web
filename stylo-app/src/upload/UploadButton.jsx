import { useState } from "react";
import "../App.css";
import * as React from "react";
import TextField from "@mui/material/TextField";
import {
  Autocomplete,
  Button,
  Fab,
  FormControl,
  MenuItem,
} from "@mui/material";

export default function UploadButton() {
  return (
    <Button variant="contained" component="label">
      Upload Corpus
      <input type="file" hidden />
    </Button>
  );
}
