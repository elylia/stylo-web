import exec from "child_process";
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
      const result = await response.json();
      return result;
    } else {
      const originalErrorMessage = await response.json();
      throw new Error(originalErrorMessage.error.message);
    }
  } catch (error) {
    throw error;
  }
};

export default executeR;
