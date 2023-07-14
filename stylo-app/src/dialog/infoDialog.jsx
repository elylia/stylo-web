import * as React from "react";
import InfoIcon from "@mui/icons-material/Info";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Tooltip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
function InfoDialog(title, content) {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <Tooltip title="Click for more information on the different options">
        <InfoIcon
          color="action"
          sx={{ fontSize: 17 }}
          onClick={() => setOpen(true)}
        />
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
export default InfoDialog;
