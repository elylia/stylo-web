import Mustache from "mustache";
const PcrCode = (settings) => {
  const values = {
    distanceMeasure: settings.distanceMeasure,
    consensusStrength: settings.consensusStrength,
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
  mfw <- c()
  culling <- c()
  dataset <- list()
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
  
  pca.results = prcomp(data$table.with.all.freqs[,1:i], scale=TRUE)
  expl.var = round(((pca.results$sdev^2) / sum(pca.results$sdev^2) * 100), 1)
  PC1_lab = paste("PC1 (", expl.var[1], "%)", sep="")
  PC2_lab = paste("PC2 (", expl.var[2], "%)", sep="")
  xy.coord = pca.results$x[,1:2]
  name <- rownames(data$table.with.all.freqs)
  xy.coord <- cbind(xy.coord, name)
  colnames(xy.coord) <- c("V1","V2","name")
  
  xy.coord <- transform(xy.coord, V1 = as.numeric(V1))
  xy.coord <- transform(xy.coord, V2 = as.numeric(V2))
  xy.coord <- data.frame(xy.coord)
  
  mfw <- rbind(mfw, i)
  culling <- rbind(culling, j)
  dataset <- rbind(dataset, list(xy.coord))
}}
    jsonData <- data.frame(mfw = mfw, culling = culling, data= dataset)

  jsonTree <- toJSON(jsonData, pretty = TRUE)
  write(jsonTree, file="result.json")`;

  const output = Mustache.render(template, values);

  return output;
};
export default PcrCode;
