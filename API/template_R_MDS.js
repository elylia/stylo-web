const Mustache = require("mustache");
var fs = require("fs");

const settings = {
  distanceMeasure: "delta",
  analysisType: "CA",
  analyzedFeatures: "w",
  nGramSize: 1,
  mfwMin: 100,
  mfwMax: 100,
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

const template = `library(stylo)
library(stats)
library(jsonlite)
library(stringr)
library(tibble)

data <- stylo(gui = FALSE, 
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
    mds.results = cmdscale(data$distance.table, eig = TRUE)
    xy.coord = mds.results$points[,1:2]
    
    xy.coord <- data.frame(xy.coord)
    xy.coord <- tibble::rownames_to_column(xy.coord, "name")
    
    
    jsonTree <- toJSON(xy.coord, pretty = TRUE)
    write(jsonTree, file="mds_JSON.json")
    `;

const output = Mustache.render(template, settings);

console.log(output);

fs.writeFile("R_Script/customized_MDS_code.R", output, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("The file was saved!");
});
