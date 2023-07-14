import express from "express";
import { exec } from "child_process";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
const port = 5173;
app.use(cors());
app.post("/execute-r", (req, res) => {
  const code = req.body.code;

  // Execute the R code using the child_process module
  exec(code, (error, stdout, stderr) => {
    if (error) {
      console.error("Error executing R code:", error);
      res.status(500).json({ error: "Failed to execute R code." });
      return;
    }

    // Send the response with the result
    res.json({ result: stdout });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
