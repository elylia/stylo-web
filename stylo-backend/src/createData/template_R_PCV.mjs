import Mustache from "mustache";
const PcvCode = (settings) => {
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
    for(i in seq({{mfwMin}},{{mfwMax}},round({{mfwIncr}})) ) {
      mfw = i
      if(mfw > length(colnames(data$table.with.all.freqs)) ) {
        mfw = length(colnames(data$table.with.all.freqs))
      }}
    pca.results = prcomp(data$table.with.all.freqs[,1:mfw])
    expl.var = round(((pca.results$sdev^2) / sum(pca.results$sdev^2) * 100), 1)
    PC1_lab = paste("PC1 (", expl.var[1], "%)", sep="")
    PC2_lab = paste("PC2 (", expl.var[2], "%)", sep="")
    xy.coord = pca.results$x[,1:2]
    name <- rownames(data$table.with.all.freqs)
    xy.coord <- cbind(xy.coord, name)
    colnames(xy.coord) <- c("V1","V2","name")
    
    xy.coord <- transform(xy.coord, V1 = as.numeric(V1))
    xy.coord <- transform(xy.coord, V2 = as.numeric(V2))
    
    jsonTree <- toJSON(xy.coord, pretty = TRUE)
    
    write(jsonTree, file="result.json")`;

  const output = Mustache.render(template, values);

  return output;
};
export default PcvCode;
