import "../App.css";
import * as React from "react";
import TextField from "@mui/material/TextField";

function CullingMinMax({ settings, setSettings }) {
  const handleChangeCullMin = (event) => {
    const newValue = event.target.value;
    setSettings({ ...settings, cullMin: Number(newValue) });
  };
  const handleChangeCullMax = (event) => {
    const newValue = event.target.value;
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
          type="number"
          value={settings.cullMin}
          onChange={handleChangeCullMin}
        />
        <TextField
          id="outlined-basic"
          label="Culling Maximum"
          variant="outlined"
          size="small"
          style={{ maxWidth: "200px" }}
          type="number"
          value={settings.cullMax}
          onChange={handleChangeCullMax}
        />
      </div>
    </>
  );
}

export default CullingMinMax;
