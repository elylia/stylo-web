library(stylo)
library(stats)
library(jsonlite)
library(stringr)

data <- stylo(gui = FALSE, frequencies = NULL, parsed.corpus = NULL,
              features = NULL, path = NULL, metadata = NULL,
              corpus.dir = "corpus", analysis.type = "PCV")
for(i in seq(100,100,round(100)) ) {
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
write(jsonTree, file="pcv_JSON.json")
