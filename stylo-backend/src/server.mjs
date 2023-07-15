import express from "express";
import { exec } from "child_process";
import bodyParser from "body-parser";
import cors from "cors";
import CACode from "./rscripts/template_R_CA.mjs";
import BctCode from "./rscripts/template_R_BCT.mjs";
import MdsCode from "./rscripts/template_R_MDS.mjs";
import PcrCode from "./rscripts/template_R_PCR.mjs";
import PcvCode from "./rscripts/template_R_PCV.mjs";
import TsneCode from "./rscripts/template_R_TSNE.mjs";

const app = express();
app.use(bodyParser.json());
const port = 5000;
app.use(cors());

app.post("/upload", upload.single("file"), (req, res) => {
  // Access the uploaded file via req.file
  // Process the file and store it on the server as needed

  // Send a response back to the client
  res.send("File uploaded successfully");
});

app.post("/execute-r", (req, res) => {
  const settings = req.body;
  const getCode = () => {
    try {
      if (settings.analysisType === "CA") {
        return CACode(settings);
      } else if (settings.analysisType === "BCT") {
        return BctCode(settings);
      } else if (settings.analysisType === "MDS") {
        return MdsCode(settings);
      } else if (settings.analysisType === "PCR") {
        return PcrCode(settings);
      } else if (settings.analysisType === "PCV") {
        return PcvCode(settings);
      } else {
        TsneCode(settings);
      }
    } catch (error) {
      console.error("Error executing R code:", error);
    }
  };

  const code = getCode();

  console.log(code);

  // Execute the R code using the child_process module
  exec(code, (error, stdout, stderr) => {
    if (error) {
      console.error("Error executing R code:", error);
      res.status(500).json({ error: "Failed to execute R code." });
      return;
    }

    // Send the response with the result
    res.json({ result: stdout });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
