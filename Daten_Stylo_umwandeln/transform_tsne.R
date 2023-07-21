library(stylo)
library(stats)
library(jsonlite)
library(stringr)
library(tsne)

data <- stylo(gui = FALSE, frequencies = NULL, parsed.corpus = NULL,
              features = NULL, path = NULL, metadata = NULL,
              corpus.dir = "corpus", analysis.type = "tSNE")

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
write(jsonTree, file="result.json")

