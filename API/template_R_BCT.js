const Mustache = require("mustache");
var fs = require("fs");

const settings = {
  distanceMeasure: "delta",
  consensusStrength: 0.5,
  analysisType: "CA",
  analyzedFeatures: "w",
  nGramSize: 1,
  mfwMin: 100,
  mfwMax: 500,
  mfwIncr: 100,
  cullMin: 0,
  cullMax: 0,
  cullIncr: 20,
  deletePronouns: "FALSE",
  preserveCase: "FALSE",
  sampling: "no.sampling",
  sampleSize: 10000,
  randomSample: 1,
};

const template = `library("stylo")
library("ape")
library("treeio")

bootstrap.list = list()
counter = 1
for (i in seq(mfw_min, mfw_max, by=mfw_incr)){
  data_bct <- stylo(gui = FALSE, 
  distance.measure = "{{distanceMeasure}}",
  analysis.type  = "{{analysisType}}", 
  analyzed.features = "{{analyzedFeatures}}",
  ngram.size = "{{nGramSize}}",
    mfw.min= {{mfwMin}}, 
    mfw.max = {{mfwMax}}, 
    mfw.incr = {{mfwIncr}},
    culling.min = {{cullMin}},
    culling.max = {{cullMax}},
    culling.incr = {{cullIncr}},
    delete.pronouncs = {{deletePronouns}},
    preserve.case = {{preserveCase}},
    sampling = "{{sampling}}",
    sample.size = {{sampleSize}},
    number.of.samples = {{randomSample}},
    corpus.dir = "corpus",
    write.pdf.file = "false")
  mfw_min = mfw_min + mfw_incr
  current.bootstrap.result = as.phylo(hclust(as.dist(data_bct$distance.table),
                                             method = "ward.D"))
  bootstrap.list[[counter]] = current.bootstrap.result
  counter = counter+1
}
consensus.data <- consensus(bootstrap.list, p=consensus_strength)
write.tree(consensus.data, file = "Newick.txt", append = FALSE,digits = 10, tree.names = TRUE)


table <- as.table(data$distance.table)

edges_JSON <- toJSON(data$list.of.edges, pretty = TRUE)

distance_JSON <- toJSON(setNames(as.data.frame(table),c("var1","var2","freq")), pretty = TRUE)


write(distance_JSON, file="distance_JSON")
write(edges_JSON, file="edges_JSON")

clustered.data = hclust(as.dist(data$distance.table), method = "ward.D")
plot(clustered.data)
halfway <- hclustToTree(clustered.data)
jsonTree <- toJSON(halfway, pretty = TRUE, auto_unbox = TRUE)

write(jsonTree, file="result.json")`;

const output = Mustache.render(template, settings);

console.log(output);

fs.writeFile("R_Script/customized_BCT_code.R", output, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("The file was saved!");
});
