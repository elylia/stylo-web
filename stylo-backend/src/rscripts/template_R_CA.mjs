import Mustache from "mustache";

const CACode = (settings) => {
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

  const template = `library(stylo)
library(jsonlite)
library(tidyr)
library(dplyr)
library(stats)
library(globals)

createLeafNode <- function(hclust, i) {
  newheight <- c("0",hclust$height)
  print(newheight)
  list(name = hclust$labels[[i]],
       height = newheight[[i]],
       order = hclust$order[[i]])
}

hclustToTree <- function(hclust) {
  if (length(hclust$merge) == 0)
    return(NULL)
  
  merges <- list()
  for (index in 1:nrow(hclust$merge)) {
    left <- hclust$merge[index, 1]
    right <- hclust$merge[index, 2]
    
    if (left < 0){
      left <- createLeafNode(hclust, -left)
      left$height <- hclust$height[index] - 0.1
   } else
      left <- merges[[left]]
    if (right < 0){
      right <- createLeafNode(hclust, -right)
      right$height <- hclust$height[index] - 0.1
    }else
      right <- merges[[right]]
    
    #if (left$order < right$order) {
     # tmp <- left
      #left <- right
      #right <- tmp
    #}

    
    merges[[index]] <- list(
      children = list(
        right,
        left
      ),
      order = left$order,
      height = hclust$height[index]
    )
  }
  
  return(merges[nrow(hclust$merge)])
}

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
    delete.pronouncs = {{deletePronouns}},
    preserve.case = {{preserveCase}},
    sampling = "{{sampling}}",
    sample.size = {{sampleSize}},
    number.of.samples = {{randomSample}},
    corpus.dir = "../data/corpus",
    write.pdf.file = "false")

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
export default CACode;
