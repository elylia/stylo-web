const executeR = async (code) => {
  try {
    const response = await fetch("/execute-r", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    });

    if (response.ok) {
      // R code executed successfully, handle the response
      const result = await response.json();
      console.log("Execution result:", result);
    } else {
      // Handle error response
      console.error("Error executing R code:", response.statusText);
    }
  } catch (error) {
    console.error("Error executing R code:", error);
  }
};

export default executeR;
