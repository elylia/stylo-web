library("stylo")
library("jsonlite")
library("tidyr")
library("dplyr")
library("stats")
library("globals")

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

data <- stylo(gui = FALSE, frequencies = NULL, parsed.corpus = NULL,
              features = NULL, path = NULL, metadata = NULL,
              corpus.dir = "corpus")

table <- as.table(data$distance.table)

edges_JSON <- toJSON(data$list.of.edges, pretty = TRUE)

distance_JSON <- toJSON(setNames(as.data.frame(table),c("var1","var2","freq")), pretty = TRUE)


write(distance_JSON, file="distance_JSON")
write(edges_JSON, file="edges_JSON")

clustered.data = hclust(as.dist(data$distance.table), method = "ward.D")
plot(clustered.data)
halfway <- hclustToTree(clustered.data)
jsonTree <- toJSON(halfway[[1]], pretty = TRUE, auto_unbox = TRUE)

write(jsonTree, file="tree_JSON.json")