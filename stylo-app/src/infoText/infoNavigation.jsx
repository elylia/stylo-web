import React, { useState } from "react";
import NavigationIcon from "@mui/icons-material/Navigation";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Tooltip,
} from "@mui/material";

function InfoNavigation() {
  const [open, setOpen] = useState(false);
  const handleKeyDownClose = (event) => {
    if (event.key === "Enter") {
      setOpen(false);
    }
  };
  const title = "How to navigate";
  const info = (
    <p>
      Zoom in: Scroll in
      <br />
      Zoom out: Scroll out
      <br />
      Pan: Click, hold and move <br />
      Search: Use the search bar. Your entries will be highlighted. <br />
      <InfoIcon
        sx={{ fontSize: 14, marginRight: 1, marginTop: 0 }}
        color="primary"
      />
      Zoom out to see all your search entries.
    </p>
  );
  return (
    <React.Fragment>
      <Tooltip title="Click to learn how to navigate in the plot">
        <Button
          onClick={() => setOpen(true)}
          variant="contained"
          size="small"
          sx={{ gap: "4px" }}
        >
          <NavigationIcon
            sx={{ fontSize: 15, verticalAlign: "sub" }}
            color="#ffffff"
          />
          How to navigate
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
            {info}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

export default InfoNavigation;
