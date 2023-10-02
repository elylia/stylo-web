export default function TsneGetHighlighting(name, searchQuery) {
  if (name === undefined) {
    return "transparent";
  } else if (searchQuery === "") {
    return "transparent";
  } else if (name.toLowerCase().includes(searchQuery.toLowerCase())) {
    return "#FFEA00";
  } else {
    return "transparent";
  }
}
