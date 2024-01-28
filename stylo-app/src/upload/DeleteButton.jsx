import * as React from "react";
import { Alert, Button } from "@mui/material";

export default function DeleteButton({ setUploadedSuffix, uploadedSuffix }) {
  const [messageDelete, setMessageDelete] = React.useState(false);

  const handleDelete = async (suffix) => {
    try {
      const response = await fetch(`api/upload/${suffix}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setUploadedSuffix(undefined);
        setMessageDelete(true);
      }
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  };

  if (uploadedSuffix) {
    return (
      <React.Fragment>
        <Button
          variant="contained"
          component="label"
          onClick={() => handleDelete(uploadedSuffix)}
        >
          <b>Delete existing Corpus</b>
        </Button>
      </React.Fragment>
    );
  }
  return (
    messageDelete && (
      <Alert
        severity="info"
        onClose={() => setMessageDelete(null)}
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
        Corpus deleted succesfully. You can now upload a new corpus.
      </Alert>
    )
  );
}
