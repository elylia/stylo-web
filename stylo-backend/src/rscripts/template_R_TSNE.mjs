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
library(tsne)

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
    for(i in seq(100,100,round(100)) ) {
      mfw = i
      
      
      if(mfw > length(colnames(data$table.with.all.freqs)) ) {
        mfw = length(colnames(data$table.with.all.freqs))
      }}
    
    ecb = function(x,y){
      plot(x, t='n', main = "", xlab = "", ylab = "", yaxt = "n", xaxt = "n")
      text(x, rownames(data$table.with.all.freqs[,1:mfw]), cex = 0.3)
      
    }
    
    tsneData <- tsne(X = data$table.with.all.freqs[,1:mfw], initial_dims = 50, epoch_callback = ecb, perplexity = 50, max_iter = 2000)
    tsneData <- data.frame(tsneData)
    name <- rownames(data$table.with.all.freqs)
    tsneData <- cbind(tsneData, name)
    colnames(tsneData) <- c("V1","V2","name")
    
    jsonTree <- toJSON(tsneData, pretty = TRUE)
    write(jsonTree, file="tsne_JSON.json")`;

  const output = Mustache.render(template, values);

  console.log(output);

  return output;
};
export default TsneCode;
