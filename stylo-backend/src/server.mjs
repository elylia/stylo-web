import express from "express";
import { exec } from "child_process";
import bodyParser from "body-parser";
import cors from "cors";
import CACode from "./createData/template_R_CA.mjs";
import BctCode from "./createData/template_R_BCT.mjs";
import MdsCode from "./createData/template_R_MDS.mjs";
import PcrCode from "./createData/template_R_PCR.mjs";
import PcvCode from "./createData/template_R_PCV.mjs";
import TsneCode from "./createData/template_R_TSNE.mjs";
import { cp, mkdtemp, writeFile } from "fs/promises";
import { join } from "path";
import { tmpdir } from "os";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { nanoid } from "nanoid";
import ParseNewick from "./createData/Parse_newick_json.mjs";
import uploadRouter from "./upload/upload.mjs";
import { download } from "./download/download.mjs";
const app = express();
app.use(bodyParser.json());
const port = 5000;
app.use(cors());

app.use(express.static('frontend'));

app.post("/execute-r", async (req, res) => {
  const settings = req.body.settings;
  const suffix = req.body.suffix;
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
      } else if (settings.analysisType === "tSNE") {
        return TsneCode(settings);
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
    const dataTarget = join(folder, "corpus");
    await cp(suffix, dataTarget, { recursive: true });

    exec(
      `cd ${folder} && RScript getData.R`,
      { maxBuffer: 1024 * 1024 * 10 },
      async (error) => {
        try {
          if (error) {
            console.error("Error executing R code:", error);

            const originalErrorMessage =
              error.message || "Failed to execute R code.";

            res.status(500).json({ error: { message: originalErrorMessage } });
            return;
          }
          if (settings.analysisType === "BCT") {
            const fileName = nanoid();
            await cp(folder + "/Newick.txt", "results/" + fileName + ".txt");
            await ParseNewick(fileName);
            await download(folder, fileName, settings);

            res.json({
              result: "results/" + fileName + ".json",
              rawData: "results/" + fileName + ".zip",
              folder,
            });
            await download(folder, fileName, settings);
          } else if (settings.analysisType === "PCR") {
            const fileName = nanoid();
            await cp(folder + "/result.json", "results/" + fileName + ".json");
            await cp(
              folder + "/label.json",
              "results/" + fileName + "_label" + ".json"
            );
            await download(folder, fileName, settings);
            res.json({
              result: "results/" + fileName + ".json",
              rawData: "results/" + fileName + ".zip",
              folder,
              labelUrl: "results/" + fileName + "_label" + ".json",
            });
          } else if (settings.analysisType === "PCV") {
            const fileName = nanoid();
            await cp(folder + "/result.json", "results/" + fileName + ".json");
            await cp(
              folder + "/label.json",
              "results/" + fileName + "_label" + ".json"
            );
            await download(folder, fileName, settings);
            res.json({
              result: "results/" + fileName + ".json",
              rawData: "results/" + fileName + ".zip",
              folder,
              labelUrl: "results/" + fileName + "_label" + ".json",
            });
          } else if (settings.analysisType === "MDS") {
            const fileName = nanoid();
            await cp(folder + "/result.json", "results/" + fileName + ".json");
            await cp(
              folder + "/label.json",
              "results/" + fileName + "_label" + ".json"
            );
            await download(folder, fileName, settings);

            res.json({
              result: "results/" + fileName + ".json",
              rawData: "results/" + fileName + ".zip",
              folder,
              labelUrl: "results/" + fileName + "_label" + ".json",
            });
          } else {
            const fileName = nanoid();
            await cp(folder + "/result.json", "results/" + fileName + ".json");
            await download(folder, fileName, settings);
            res.json({
              result: "results/" + fileName + ".json",
              rawData: "results/" + fileName + ".zip",
              folder,
            });
          }
        } catch (error) {
          console.error("Error processing response:", error);
          res.status(500).json({ error: "An error occurred." });
        }
      }
    );
  } catch (err) {
    console.error(err);
  }
});

app.use("/results", express.static("results"));

app.use("/upload", uploadRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
