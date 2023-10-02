import { readdir, writeFile } from "fs/promises";
import fs from "fs";
import JSZip from "jszip";

export async function download(resultFolder, outputFilename, settings) {
  const zip = new JSZip();

  if (settings.distanceTable) {
    for (const file of await readdir(resultFolder)) {
      if (file.includes("distance_table_")) {
        const fileContent = fs.createReadStream(`${resultFolder}/${file}`);
        zip.folder("distances").file(file, fileContent);
      }
    }
  }

  if (settings.frequencyTable) {
    for (const file of await readdir(resultFolder)) {
      if (file.includes("frequencies_analyzed")) {
        const fileContent = fs.createReadStream(`${resultFolder}/${file}`);
        zip.folder("frequencies").file(file, fileContent);
      }
    }
  }

  if (settings.featureList) {
    for (const file of await readdir(resultFolder)) {
      if (file.includes("features_analyzed")) {
        const fileContent = fs.createReadStream(`${resultFolder}/${file}`);
        zip.folder("features").file(file, fileContent);
      }
    }
  }

  const zipBlob = await zip.generateAsync({ type: "blob" });
  const arrayBuffer = await zipBlob.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  await writeFile("results/" + outputFilename + ".zip", buffer);
}
