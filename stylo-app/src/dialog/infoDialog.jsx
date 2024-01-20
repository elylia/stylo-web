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
  const [open, setOpen] = useState(false);

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
        <SvgIcon
          onClick={() => setOpen(true)}
          sx={{ cursor: "pointer" }}
          fontSize="x-small"
          tabIndex="0"
          onKeyDown={handleKeyDownOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="12px"
            viewBox="0 0 900 899.99999"
            width="12px"
            fill="#383838"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              fill="#383838"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z"
              fill-opacity="1"
              fill-rule="nonzero"
            />
          </svg>
        </SvgIcon>
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
