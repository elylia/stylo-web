library("stylo")
library("ape")
library("treeio")

mfw_min = 100
mfw_max = 500
mfw_incr = 100
consensus_strength = 0.5

bootstrap.list = list()
counter = 1
for (i in seq(mfw_min, mfw_max, by=mfw_incr)){
  data_bct <- stylo(gui = FALSE, corpus.dir = "corpus", analysis.type = "CA", mwf.min = mfw_min, mfw.max = mfw_min)
  mfw_min = mfw_min + mfw_incr
  current.bootstrap.result = as.phylo(hclust(as.dist(data_bct$distance.table),
                                             method = "ward.D"))
  bootstrap.list[[counter]] = current.bootstrap.result
  counter = counter+1
}

consensus.data <- consensus(bootstrap.list, p=consensus_strength)
plot(consensus(bootstrap.list, p=consensus_strength),
     type="u",
     font=1,
     lab4ut="axial")

write.tree(consensus.data, file = "Newick.txt", append = FALSE,digits = 10, tree.names = TRUE)
