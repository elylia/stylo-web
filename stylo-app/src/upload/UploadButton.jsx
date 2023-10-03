import * as React from "react";
import { Button } from "@mui/material";

export default function UploadButton({ setUploadedSuffix }) {
  const handleFileUpload = async (event) => {
    const file = event.target.files;
    const formData = new FormData();
    for (const f of file) {
      formData.append("file", f);
    }

    try {
      const response = await fetch("api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const newSuffix = (await response.json()).suffix;
        setUploadedSuffix(newSuffix);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <Button variant="contained" component="label">
        Upload Corpus
        <input type="file" multiple hidden onChange={handleFileUpload} />
      </Button>
    </div>
  );
}
