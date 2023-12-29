import { access, constants, readdir, stat, writeFile } from "fs/promises";
import fs, { read } from "fs";
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

  zip
    .folder(settings.analysisType + "_html")
    .file("data.js", fileContentData)
    .file("label.js", fileContentLabel)
    .file("type.js", fileContentType)
    .file(settings.analysisType + ".html", fileContentHtml);

  const zipBlob = await zip.generateAsync({ type: "blob" });
  const arrayBuffer = await zipBlob.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  await writeFile("results/" + outputFilename + "_html" + ".zip", buffer);
}
