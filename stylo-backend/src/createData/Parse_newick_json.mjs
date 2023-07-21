import parser from "biojs-io-newick";
import fs from "fs/promises";

const ParseNewick = async (fileName) => {
  const data = await fs.readFile("results/" + fileName + ".txt", "utf-8");
  const pat = /(?<=\))[0-9\.]{1,3}/g;
  const out = data.replace(pat, ":$&");
  const x = parser.parse_newick(out);
  const dataNew = JSON.stringify(x);

  await fs.writeFile("results/" + fileName + ".json", dataNew);
};
export default ParseNewick;
