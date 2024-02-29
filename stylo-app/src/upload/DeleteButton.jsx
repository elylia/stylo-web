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
        setMessageDelete({
          type: "success",
          text: "Corpus deleted successfully. You can now upload a new corpus.",
        });
      } else {
        const errorMessage = `Error deleting file: ${response.status} - ${response.statusText}`;
        setMessageDelete({ type: "error", text: errorMessage });
      }
    } catch (error) {
      console.error("Error deleting file:", error);
      setMessageDelete({
        type: "error",
        text: `Error deleting file: ${error.message}`,
      });
    }
  };

  if (uploadedSuffix) {
    return (
      <React.Fragment>
        <Button
          role="button"
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
        severity={messageDelete.type}
        onClose={() => setMessageDelete(null)}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
          whiteSpace: "preserve",
          textAlign: "left",
        }}
      >
        {messageDelete.text}
      </Alert>
    )
  );
}
