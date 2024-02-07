import React from "react";
import TextField from "@mui/material/TextField";

const Search = ({ onChange }) => {
  return (
    <div>
      <TextField
        role="input field"
        label="Search"
        onChange={onChange}
        variant="outlined"
        size="small"
      />
      <div></div>
    </div>
  );
};

export default Search;
