import Mustache from "mustache";
const TsneCode = (settings) => {
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
    frequencyTable: settings.frequencyTable == false ? "FALSE" : "TRUE",
    distanceTable: settings.distanceTable == false ? "FALSE" : "TRUE",
    featureList: settings.featureList == false ? "FALSE" : "TRUE",
    sampling: settings.sampling,
    sampleSize: settings.sampleSize,
    randomSample: settings.randomSample,
    language: settings.language,
    encoding: settings.encoding == false ? "UTF-8" : "native.enc",
  };

  const template = `library(stylo)
  library(stats)
  library(jsonlite)
  library(stringr)
  library(tsne)
  
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
    write.pdf.file = "false",
    save.distance.tables = {{distanceTable}},
    save.analyzed.freqs = {{frequencyTable}},
    save.analyzed.features = {{featureList}},
    corpus.lang = "{{language}}",
    encoding = "{{encoding}}")
    
    ecb = function(x,y){
      text(x, rownames(data$table.with.all.freqs[,1:i]), cex = 0.3)
      
    }
    
    tsneData <- tsne(X = data$table.with.all.freqs[,1:i], initial_dims = 50, epoch_callback = ecb, perplexity = 50, max_iter = 2000)
    tsneData <- data.frame(tsneData)
    name <- rownames(data$table.with.all.freqs)
    tsneData <- cbind(tsneData, name)
    colnames(tsneData) <- c("V1","V2","name")
    mfw <- rbind(mfw, i)
    culling <- rbind(culling, j)
    dataset <- rbind(dataset, list(tsneData))
  } }
jsonData <- data.frame(mfw = mfw, culling = culling, data= dataset)

jsonTree <- toJSON(jsonData, pretty = TRUE, auto_unbox = TRUE)
write(jsonTree, file="result.json")`;

  const output = Mustache.render(template, values);
  return output;
};
export default TsneCode;
