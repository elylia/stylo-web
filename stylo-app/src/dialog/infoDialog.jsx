import * as React from "react";
import InfoIcon from "@mui/icons-material/Info";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Tooltip,
  SvgIcon,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

function InfoDialog(title, content) {
  const contentRef = React.useRef(null);

  const [open, setOpen] = useState(false);
  React.useEffect(() => {
    if (contentRef.current) {
      contentRef.current.focus();
    }
  }, [open]);

  const handleKeyDownOpen = (event) => {
    if (event.key === "Enter") {
      setOpen(true);
    }
  };

  const handleKeyDownClose = (event) => {
    if (event.key === "Enter") {
      setOpen(false);
    }
  };

  return (
    <React.Fragment>
      <Tooltip title="Click for more information on the different options">
        <InfoIcon
          onClick={() => setOpen(true)}
          sx={{ cursor: "pointer" }}
          fontSize="x-small"
          tabIndex="0"
          onKeyDown={handleKeyDownOpen}
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
              cursor: "pointer",
            }}
            tabIndex="0"
            onKeyDown={handleKeyDownClose}
          />
        </DialogActions>
        <DialogContent tabIndex={0} ref={contentRef}>
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
