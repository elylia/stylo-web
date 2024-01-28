import * as React from "react";
import { Alert, LoadingButton } from "@mui/lab";
export default function UploadButton({ setUploadedSuffix, uploadedSuffix }) {
  const [loading, setLoading] = React.useState(false);
  const [messageUpload, setMessageUpload] = React.useState(false);

  const handleFileUpload = async (event) => {
    const files = event.target.files;
    const formData = new FormData();

    for (const file of files) {
      formData.append("file", file);
    }
    if (!files || files === undefined || files.length === 0) {
      setLoading(false);
    } else setLoading(true);

    try {
      const response = await fetch("api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const newSuffix = (await response.json()).suffix;
        setUploadedSuffix(newSuffix);
        setMessageUpload(true);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleButtonClick = async () => {
    document.getElementById("fileInput").click();
  };

  if (uploadedSuffix === undefined) {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
  return (
    messageUpload && (
      <Alert
        severity="info"
        onClose={() => setMessageUpload(null)}
        sx={{
          position: "absolute",
          top: "400px",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
          whiteSpace: "preserve",
          textAlign: "left",
        }}
      >
        Corpus uploaded succesfully
      </Alert>
    )
  );
}
