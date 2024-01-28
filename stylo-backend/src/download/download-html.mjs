import { writeFile } from "fs/promises";
import JSZip from "jszip";
import { readFile } from "fs/promises";

export async function downloadHtml(resultFolder, outputFilename, settings) {
  const zip = new JSZip();

  const fileContentType = "window.type = " + '"' + settings.analysisType + '"';
  const data = await readFile(resultFolder + "/result.json");
  const fileContentData = "window.data = " + data;
  let fileContentLabel = "";
  try {
    const label = await readFile(resultFolder + "/label.json");
    fileContentLabel = "window.label = " + label;
  } catch {
    fileContentLabel = 'window.label = ""';
  }
  const fileContentHtml = await readFile("./src/download/htmlExport.html");
  function createData(parameter, value) {
    return { parameter, value };
  }
  const rows = [
    createData("Parameter", "Value"),
    createData("Analysis Type", settings.analysisTypeLabel),
    createData(
      "Consensus Strength",
      settings.analysisType == "BCT"
        ? settings.consensusStrength
        : "Not applicable"
    ),
    createData("Distance Measure", settings.distanceMeasureLabel),
    createData("Upload Format", settings.formatLabel),
    createData("Language", settings.languageLabel),
    createData("Native Encoding", settings.encoding ? "On" : "Off"),
    createData("Features", settings.featuresLabel),
    createData("n-Gram Size", settings.nGram),
    createData("MFW Minimum", settings.mfwMin),
    createData("MFW Maximum", settings.mfwMax),
    createData("MFW Increment", settings.mfwIncr),
    createData("Start at freq. rank", settings.startAt),
    createData("Culling Minimum", settings.cullMin),
    createData("Culling Maximum", settings.cullMax),
    createData("Culling Increment", settings.cullIncr),
    createData("Delete Pronouns", settings.pronouns ? "On" : "Off"),
    createData("Preserve Case", settings.case ? "On" : "Off"),
    createData("Sampling", settings.samplingLabel),
    createData(
      "Random Sampling: Sample Number",
      settings.sampling == "random.sampling"
        ? settings.randomSample
        : "Not applicable"
    ),
    createData(
      "Normal Sampling: Sample Size",
      settings.sampling == "normal.sampling"
        ? settings.sampleSize
        : "Not applicable"
    ),
  ];

  let csvString = "";
  for (let i = 0; i < rows.length; i++) {
    csvString += rows[i].parameter + "," + rows[i].value + "\n";
  }

  zip
    .folder(settings.analysisType + "_html")
    .file("data.js", fileContentData)
    .file("label.js", fileContentLabel)
    .file("type.js", fileContentType)
    .file("settings.csv", csvString)
    .file(settings.analysisType + ".html", fileContentHtml);

  const zipBlob = await zip.generateAsync({ type: "blob" });
  const arrayBuffer = await zipBlob.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  await writeFile("results/" + outputFilename + "_html" + ".zip", buffer);
}
