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
import { cp, mkdtemp, writeFile } from "fs/promises";
import { join } from "path";
import { tmpdir } from "os";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
app.use(bodyParser.json());
const port = 5000;
app.use(cors());

app.post("/execute-r", async (req, res) => {
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
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const folder = await mkdtemp(join(tmpdir(), "stylo-web-app-"));
    await writeFile(folder + "/getData.R", code);
    const dataSource = join(__dirname, "../data/corpus");
    const dataTarget = join(folder, "corpus");
    cp(dataSource, dataTarget, { recursive: true });
    // Send the response with the result and folder path
    exec(`cd ${folder} && RScript getData.R`, (error, stdout, stderr) => {
      try {
        if (error) {
          console.error("Error executing R code:", error);
          res.status(500).json({ error: "Failed to execute R code." });
          return;
        }

        // Send the response with the result and folder path
        res.json({ result: stdout.toString(), folder });
      } catch (error) {
        console.error("Error processing response:", error);
        res.status(500).json({ error: "An error occurred." });
      }
    });
  } catch (err) {
    console.error(err);
  }
  // Execute the R code using the child_process module
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
