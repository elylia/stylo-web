import * as React from "react";
import { Button } from "@mui/material";

export default function DeleteButton({ setUploadedSuffix, uploadedSuffix }) {
  const handleDelete = async (suffix) => {
    try {
      const response = await fetch(`api/upload/${suffix}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setUploadedSuffix(undefined);
      }
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  };

  if (uploadedSuffix) {
    return (
      <Button
        variant="contained"
        component="label"
        onClick={() => handleDelete(uploadedSuffix)}
      >
        <b>Delete Corpus</b>
      </Button>
    );
  }
}
