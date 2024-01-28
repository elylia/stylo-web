import * as React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  SvgIcon,
  Tooltip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
function CitationDialog() {
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
      <Tooltip title="Credits & References">
        <SvgIcon
          onClick={() => setOpen(true)}
          sx={{ cursor: "pointer" }}
          fontSize="x-small"
          tabIndex="0"
          onKeyDown={handleKeyDownOpen}
        >
          <svg
            width="16"
            zoomAndPan="magnify"
            viewBox="0 0 900 899.99999"
            height="16"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
          >
            <path
              fill="#383838"
              d="M 450 0 C 201.644531 0 0 201.621094 0 450 C 0 698.351562 201.644531 900 450 900 C 698.378906 900 900 698.351562 900 450 C 900 201.621094 698.378906 0 450 0 Z M 587.84375 524.222656 C 585.929688 521.457031 582.75 519.828125 579.386719 519.828125 C 579.386719 519.828125 542.691406 519.828125 512.558594 519.828125 C 505.007812 519.828125 497.765625 516.828125 492.441406 511.5 C 487.085938 506.144531 484.113281 498.90625 484.113281 491.378906 L 484.113281 318.878906 C 484.113281 311.328125 487.085938 304.085938 492.441406 298.757812 C 497.765625 293.429688 505.007812 290.429688 512.558594 290.429688 L 643.964844 290.429688 C 651.515625 290.429688 658.757812 293.429688 664.085938 298.757812 C 669.414062 304.085938 672.414062 311.328125 672.414062 318.878906 L 672.414062 510.644531 C 672.414062 521.742188 669.671875 532.679688 664.421875 542.457031 C 650.328125 568.679688 623.535156 618.542969 608.535156 646.472656 C 603.648438 655.601562 594.101562 661.292969 583.757812 661.292969 L 583.734375 661.292969 C 574.320312 661.292969 565.5 656.691406 560.09375 648.984375 C 554.691406 641.25 553.394531 631.371094 556.628906 622.527344 C 571.34375 582.308594 589.085938 533.714844 589.085938 533.714844 C 590.25 530.535156 589.785156 526.992188 587.84375 524.222656 Z M 331.34375 524.222656 C 329.40625 521.457031 326.25 519.828125 322.863281 519.828125 C 322.863281 519.828125 286.164062 519.828125 256.035156 519.828125 C 248.484375 519.828125 241.265625 516.828125 235.914062 511.5 C 230.585938 506.144531 227.585938 498.90625 227.585938 491.378906 L 227.585938 318.878906 C 227.585938 311.328125 230.585938 304.085938 235.914062 298.757812 C 241.265625 293.429688 248.484375 290.429688 256.035156 290.429688 L 387.464844 290.429688 C 395.015625 290.429688 402.234375 293.429688 407.585938 298.757812 C 412.914062 304.085938 415.914062 311.328125 415.914062 318.878906 L 415.914062 510.644531 C 415.914062 521.742188 413.148438 532.679688 407.894531 542.457031 C 393.828125 568.679688 367.035156 618.542969 352.035156 646.472656 C 347.121094 655.601562 337.601562 661.292969 327.234375 661.292969 C 317.820312 661.292969 308.972656 656.691406 303.59375 648.984375 C 298.1875 641.25 296.894531 631.371094 300.128906 622.527344 C 314.820312 582.308594 332.585938 533.714844 332.585938 533.714844 C 333.75 530.535156 333.285156 526.992188 331.34375 524.222656 Z M 331.34375 524.222656 "
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
            }}
            tabIndex="0"
            onKeyDown={handleKeyDownClose}
          />
        </DialogActions>
        <DialogContent>
          <DialogTitle>Credits & References</DialogTitle>
          <DialogContentText sx={{ fontSize: 12, color: "black" }}>
            Developed and maintained by Lilly Osburg (
            <a href="mailto:lilly.osburg@live.de" target="_blank">
              lilly.osburg@live.de
            </a>
            ) <br />
            Based on the stylo R package (Eder, M., Rybicki, J. and Kestemont,
            M. (2016). Stylometry with R: a package for computational text
            analysis. R Journal, 8(1): 107-21.
            <a
              href="https://journal.r-project.org/archive/2016/RJ-2016-007/index.html"
              target="_blank"
            >
              https://journal.r-project.org/archive/2016/RJ-2016-007/index.html
            </a>
            )
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
export default CitationDialog;
