import * as React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Tooltip,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import InfoIcon from "@mui/icons-material/Info";

function InfoDialogButton(title, content) {
  const [open, setOpen] = useState(false);

  const handleKeyDownClose = (event) => {
    if (event.key === "Enter") {
      setOpen(false);
    }
  };

  return (
    <React.Fragment>
      <Tooltip title="Click to see the applied settings">
        <Button
          onClick={() => setOpen(true)}
          variant="contained"
          size="small"
          sx={{ gap: "4px" }}
        >
          <InfoIcon
            sx={{ fontSize: 15, verticalAlign: "sub" }}
            color="#ffffff"
          />
          Applied Settings
        </Button>
      </Tooltip>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        sx={{ height: "500px" }}
      >
        <DialogActions>
          <CloseIcon
            color="#9e9e9e"
            onClick={() => setOpen(false)}
            sx={{
              ":hover": {
                bgcolor: "#9e9e9e",
                color: "white",
              },
            }}
            tabIndex="0"
            onKeyDown={handleKeyDownClose}
          />
        </DialogActions>
        <DialogContent>
          <DialogTitle>{title}</DialogTitle>
          <DialogContentText sx={{ fontSize: 12, color: "black" }}>
            {content}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
export default InfoDialogButton;
