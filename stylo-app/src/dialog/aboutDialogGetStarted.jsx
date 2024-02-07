import * as React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Divider,
  Link,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

function AboutDialogGetStarted() {
  const [open, setOpen] = useState(false);
  const contentRef = React.useRef(null);

  React.useEffect(() => {
    if (contentRef.current) {
      contentRef.current.focus();
    }
  }, [open]);

  return (
    <React.Fragment>
      <Link
        onClick={() => setOpen(true)}
        sx={{ cursor: "pointer" }}
        tabIndex={0}
        aria-label="Click here for more information"
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            setOpen(true);
          }
        }}
      >
        Click here
      </Link>
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
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                setOpen(false);
              }
            }}
          />
        </DialogActions>
        <DialogContent tabIndex={0} ref={contentRef}>
          <DialogTitle>About Stylo Web</DialogTitle>
          <DialogContentText sx={{ fontSize: 12, color: "black" }}>
            <p>
              <b>Stylo Web</b> is a React and D3 based web application developed
              in JavaScript. It allows the use of the analyses implemented in
              the stylo() function of the stylo R package via a user-friendly
              web interface. It offers improved visualisation for easier
              evaluation and interpretation of the results. The results can be
              downloaded and easily integrated into your own website.
              Downloading as an image file is available as well.
            </p>
            <Divider textAlign="left">
              <b>Four steps to your stylometric analysis:</b>
            </Divider>
            <ol type="1">
              <li>Choose the analysis type</li>
              <li>Upload your corpus</li>
              <li>Define your parameters</li>
              <li>Analyse your plots (and optionally your raw data)</li>
            </ol>
            <Divider textAlign="left">
              <b>Need a corpus to play around with?</b>
            </Divider>
            <p>
              Check out this corpus by the Computational Stylistics Group:{" "}
              <Link
                href="https://github.com/computationalstylistics/A_Small_Collection_of_British_Fiction"
                sx={{ cursor: "pointer" }}
                target="_blank"
                aria-label="Link to Test Corpus (Github): A Short Collection of British Fiction
                "
              >
                A Short Collection of British Fiction
              </Link>
              .{" "}
            </p>
            <p>
              Or download it right away{" "}
              <Link
                href="https://codeload.github.com/computationalstylistics/A_Small_Collection_of_British_Fiction/zip/refs/heads/master"
                sx={{ cursor: "pointer" }}
                aria-label="Download Test Corpus: A Short Collection of British Fiction"
              >
                by clicking here.
              </Link>
            </p>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
export default AboutDialogGetStarted;
