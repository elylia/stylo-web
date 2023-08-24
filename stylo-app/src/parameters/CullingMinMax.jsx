import "../App.css";
import * as React from "react";
import TextField from "@mui/material/TextField";

function CullingMinMax({ settings, setSettings }) {
  const handleChangeCullMin = (event) => {
    let newValue = event.target.value;
    newValue = newValue.replace(/\D/g, "");
    setSettings({ ...settings, cullMin: Number(newValue) });
  };
  const handleChangeCullMax = (event) => {
    let newValue = event.target.value;
    newValue = newValue.replace(/\D/g, "");
    setSettings({ ...settings, cullMax: Number(newValue) });
  };
  return (
    <>
      <div className="parameter">
        {/*Culling Input*/}
        <TextField
          id="outlined-basic"
          label="Culling Minimum"
          variant="outlined"
          size="small"
          style={{ maxWidth: "200px" }}
          value={settings.cullMin}
          onChange={handleChangeCullMin}
        />
        <TextField
          id="outlined-basic"
          label="Culling Maximum"
          variant="outlined"
          size="small"
          style={{ maxWidth: "200px" }}
          value={settings.cullMax}
          onChange={handleChangeCullMax}
        />
      </div>
    </>
  );
}

export default CullingMinMax;
