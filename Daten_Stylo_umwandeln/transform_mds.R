library(stylo)
library(stats)
library(jsonlite)
library(stringr)
library(tibble)

data <- stylo(gui = FALSE, frequencies = NULL, parsed.corpus = NULL,
              features = NULL, path = NULL, metadata = NULL,
              corpus.dir = "corpus", analysis.type = "MDS")

mds.results = cmdscale(data$distance.table, eig = TRUE)
xy.coord = mds.results$points[,1:2]

xy.coord <- data.frame(xy.coord)
xy.coord <- tibble::rownames_to_column(xy.coord, "name")


jsonTree <- toJSON(xy.coord, pretty = TRUE)
write(jsonTree, file="mds_JSON.json")
