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
    frequencyTable: settings.frequencyTable == false ? "FALSE" : "TRUE",
    distanceTable: settings.distanceTable == false ? "FALSE" : "TRUE",
    featureList: settings.featureList == false ? "FALSE" : "TRUE",
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
  pcLabel1 <- list()
pcLabel2 <- list()
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
                write.pdf.file = "false",
                save.distance.tables = {{distanceTable}},
                save.analyzed.freqs = {{frequencyTable}},
                save.analyzed.features = {{featureList}})
  mds.results = cmdscale(data$distance.table, eig = TRUE)
  xy.coord = mds.results$points[,1:2]
  PC1_lab = paste("", sep="")
PC2_lab = paste("", sep="")

  xy.coord <- data.frame(xy.coord)
  xy.coord <- tibble::rownames_to_column(xy.coord, "name")
  mfw <- rbind(mfw, i)
  culling <- rbind(culling, j)
  dataset <- rbind(dataset, list(xy.coord))
  pcLabel1 <- rbind(pcLabel1, list(PC1_lab))
pcLabel2 <- rbind(pcLabel2, list(PC2_lab))

}}

jsonData <- data.frame(mfw = mfw, culling = culling, data= dataset)
jsonAxisLabel <- data.frame(mfw = mfw, culling = culling, label1=pcLabel1, label2=pcLabel2 )

  jsonLabel <- toJSON(jsonAxisLabel, pretty = TRUE)
  jsonTree <- toJSON(jsonData, pretty = TRUE)
  write(jsonTree, file="result.json")
  write(jsonLabel, file="label.json")`;

  const output = Mustache.render(template, values);

  return output;
};
export default MdsCode;
