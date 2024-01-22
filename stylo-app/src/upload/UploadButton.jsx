import * as React from "react";
import { LoadingButton } from "@mui/lab";

export default function UploadButton({ setUploadedSuffix }) {
  const [loading, setLoading] = React.useState(false);

  const handleFileUpload = async (event) => {
    const files = event.target.files;

    // Check if any files were selected
    if (files.length === 0) {
      setLoading(false);
      return;
    }
    const formData = new FormData();

    for (const file of files) {
      formData.append("file", file);
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
    } finally {
      setLoading(false);
    }
  };

  const handleButtonClick = () => {
    // Reset loading state
    setLoading(true);

    // Trigger click on the file input
    document.getElementById("fileInput").click();
  };

  return (
    <div>
      <LoadingButton
        variant="contained"
        color="primary"
        onClick={handleButtonClick}
        loading={loading}
      >
        <b>Upload Corpus</b>
      </LoadingButton>
      <input
        id="fileInput"
        type="file"
        multiple
        hidden
        onInput={handleFileUpload}
      />
    </div>
  );
}
