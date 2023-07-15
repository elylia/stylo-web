import Mustache from "mustache";

const BctCode = (settings) => {
  const values = {
    distanceMeasure: settings.distanceMeasure,
    consensusStrength: settings.consensusStrength,
    analysisType: settings.analysisType,
    analyzedFeatures: "w",
    nGramSize: settings.nGram,
    mfwMin: settings.mfwMin,
    mfwMax: settings.mfwMax,
    mfwIncr: settings.mfwIncr,
    cullMin: settings.cullMin,
    cullMax: settings.cullMax,
    cullIncr: settings.cullIncr,
    deletePronouns: settings.pronouns,
    preserveCase: "FALSE",
    sampling: settings.sampling,
    sampleSize: settings.sampleSize,
    randomSample: settings.randomSample,
  };

  const template = `library("stylo")
library("ape")
library("treeio")

bootstrap.list = list()
counter = 1
for (i in seq(mfw_min, mfw_max, by=mfw_incr)){
  data_bct <- stylo(gui = FALSE, 
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
    corpus.dir = "../data/corpus",
    write.pdf.file = "false")
  mfw_min = mfw_min + mfw_incr
  current.bootstrap.result = as.phylo(hclust(as.dist(data_bct$distance.table),
                                             method = "ward.D"))
  bootstrap.list[[counter]] = current.bootstrap.result
  counter = counter+1
}
consensus.data <- consensus(bootstrap.list, p=consensus_strength)
write.tree(consensus.data, file = "Newick.txt", append = FALSE,digits = 10, tree.names = TRUE)


table <- as.table(data$distance.table)

edges_JSON <- toJSON(data$list.of.edges, pretty = TRUE)

distance_JSON <- toJSON(setNames(as.data.frame(table),c("var1","var2","freq")), pretty = TRUE)


write(distance_JSON, file="distance_JSON")
write(edges_JSON, file="edges_JSON")

clustered.data = hclust(as.dist(data$distance.table), method = "ward.D")
plot(clustered.data)
halfway <- hclustToTree(clustered.data)
jsonTree <- toJSON(halfway, pretty = TRUE, auto_unbox = TRUE)

write(jsonTree, file="tree_JSON.json")`;

  const output = Mustache.render(template, values);

  return output;
};
export default BctCode;
