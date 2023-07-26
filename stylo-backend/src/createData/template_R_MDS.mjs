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
    deletePronouns: settings.pronouns == false ? "FALSE" : "TRUE",
    preserveCase: settings.case == false ? "FALSE" : "TRUE",
    sampling: settings.sampling,
    sampleSize: settings.sampleSize,
    randomSample: settings.randomSample,
  };

  const template = `library(stylo)
  library(stats)
  library(jsonlite)
  library(stringr)
  library(tibble)
  library(tidyr)
  mfw <- c()
  culling <- c()
  dataset <- c()
  for (i in seq({{mfwMin}}, {{mfwMax}}, by={{mfwIncr}})){
    for(j in seq({{cullMin}}, {{cullMax}}, by={{cullIncr}})){
  data <- stylo(gui = FALSE, 
                distance.measure = "{{distanceMeasure}}",
                analysis.type  = "{{analysisType}}", 
                analyzed.features = "{{analyzedFeatures}}",
                ngram.size = "{{nGramSize}}",
                mfw.min= i, 
                mfw.max = i, 
                mfw.incr = {{mfwIncr}},
                culling.min = j,
                culling.max = j,
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
  mfw <- rbind(mfw, i)
  culling <- rbind(culling, j)
  dataset <- rbind(dataset, list(xy.coord))
}}
  
jsonData <- data.frame(mfw = mfw, culling = culling, data= dataset)
  
  jsonTree <- toJSON(jsonData, pretty = TRUE, auto_unbox = TRUE)
  
  write(jsonTree, file="result.json")
    `;

  const output = Mustache.render(template, values);

  return output;
};
export default MdsCode;
