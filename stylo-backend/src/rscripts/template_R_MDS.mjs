import Mustache from "mustache";

const MdsCode = (settings) => {
  const values = {
    distanceMeasure: settings.distanceMeasure,
    analysisType: settings.analysisType,
    analyzedFeatures: settings.features,
    nGramSize: settings.nGram,
    mfwMin: settings.mfwMin,
    mfwMax: settings.mfwMax,
    mfwIncr: settings.mfwIncr,
    cullMin: settings.cullMin,
    cullMax: settings.cullMax,
    cullIncr: settings.cullIncr,
    deletePronouns: settings.pronouns,
    preserveCase: settings.case,
    sampling: settings.sampling,
    sampleSize: settings.sampleSize,
    randomSample: settings.randomSample,
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
    delete.pronouns = {{deletePronouns}},
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

  const output = Mustache.render(template, values);

  return output;
};
export default MdsCode;
