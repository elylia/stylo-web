import Mustache from "mustache";

const BctCode = (settings) => {
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
    encoding: settings.encoding == false ? "UTF-8" : "native.enc",
    sampling: settings.sampling,
    sampleSize: settings.sampleSize,
    randomSample: settings.randomSample,
    language: settings.language,
    format: settings.format,
  };

  const template = ` 
  library("treeio")
  library("stylo")
  library("ape")
  
  bootstrap.list = list()
  counter = 1
  loaded.corpus = load.corpus.and.parse(corpus.dir = "corpus",
                                        encoding = "{{encoding}}",
                                        markup.type = "{{format}}",
                                        corpus.lang = "{{language}}",
                                        sample.size = {{sampleSize}},
                                        number.of.samples = {{randomSample}},
                                        sampling = "{{sampling}}",
                                        features = "{{analyzedFeatures}}",
                                        ngram.size = "{{nGramSize}}",
                                        preserve.case = {{preserveCase}})
  for (i in seq({{mfwMin}}, {{mfwMax}}, by={{mfwIncr}})){
    for (j in seq({{cullMin}}, {{cullMax}}, by={{cullIncr}})){
      data_bct <- stylo(gui = FALSE, 
                        parsed.corpus = loaded.corpus,
                      distance.measure = "{{distanceMeasure}}",
                      analysis.type  = "CA", 
                      mfw.min= i, 
                      mfw.max = i, 
                      mfw.incr = 0,
                      culling.min = j,
                      culling.max = j,
                      culling.incr = 0,
                      delete.pronouns = {{deletePronouns}},
                      write.pdf.file = "false")
    mfw_min = {{mfwMin}} + {{mfwIncr}}
    cull_min = {{cullMin}} + {{cullIncr}}
    current.bootstrap.result = as.phylo(hclust(as.dist(data_bct$distance.table),
                                               method = "ward.D"))
    bootstrap.list[[counter]] = current.bootstrap.result
    counter = counter+1
  }}
  
  consensus.data <- consensus(bootstrap.list, p={{consensusStrength}})
  
  
  write.tree(consensus.data, file = "Newick.txt", append = FALSE,digits = 10, tree.names = TRUE)
  `;

  const output = Mustache.render(template, values);

  return output;
};
export default BctCode;
