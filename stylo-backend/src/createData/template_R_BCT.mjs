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
    sampling: settings.sampling,
    sampleSize: settings.sampleSize,
    randomSample: settings.randomSample,
  };

  const template = ` 
  library("treeio")
  library("stylo")
  library("ape")
  

  
  bootstrap.list = list()
  counter = 1
  for (i in seq({{mfwMin}}, {{mfwMax}}, by={{mfwIncr}})){
    data_bct <- stylo(gui = FALSE, 
      distance.measure = "{{distanceMeasure}}",
      analysis.type  = "CA", 
      analyzed.features = "w",
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
    table <- stylo(gui = FALSE, 
      distance.measure = "{{distanceMeasure}}",
      analysis.type  = "BCT", 
      consensus.strength = {{consensusStrength}},
      analyzed.features = "w",
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
      write.pdf.file = "false",
      save.distance.tables = {{distanceTable}},
      save.analyzed.freqs = {{frequencyTable}},
      save.analyzed.features = {{featureList}})
    mfw_min = {{mfwMin}} + {{mfwIncr}}
    current.bootstrap.result = as.phylo(hclust(as.dist(data_bct$distance.table),
                                               method = "ward.D"))
    bootstrap.list[[counter]] = current.bootstrap.result
    counter = counter+1
  }
  
  consensus.data <- consensus(bootstrap.list, p={{consensusStrength}})
  plot(consensus(bootstrap.list, p={{consensusStrength}}),
       type="u",
       font=1,
       lab4ut="axial")
  
  write.tree(consensus.data, file = "Newick.txt", append = FALSE,digits = 10, tree.names = TRUE)
  `;

  const output = Mustache.render(template, values);

  return output;
};
export default BctCode;
