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
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/upload", {
        method: "POST",
        body: formData,
      });

      // Handle the response from the server here
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <Button variant="contained" component="label">
      Upload Corpus
      <input type="file" hidden onChange={handleFileUpload} />
    </Button>
  );
}
