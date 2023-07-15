const executeR = async (settings) => {
  try {
    const response = await fetch("http://localhost:5000/execute-r", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(settings),
    });

    if (response.ok) {
      // R code executed successfully, handle the response
      const result = await response.json();
      console.log("Execution result:", result);

      // Execute the R code using RScript
      const exec = require("child_process").exec;
      exec(`RScript -e '${result.code}'`, (error, stdout, stderr) => {
        if (error) {
          console.error("Error executing R code:", error);
        } else {
          console.log("R code executed successfully.");
          console.log("Output:", stdout);
        }
      });
    } else {
      // Handle error response
      console.error("Error executing R code:", response.statusText);
    }
  } catch (error) {
    console.error("Error executing R code:", error);
  }
};

export default executeR;
