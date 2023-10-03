import { saveAs } from "file-saver";
const executeR = async (settings, suffix) => {
  const body = { settings, suffix };
  try {
    const response = await fetch("api/execute-r", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      const result = await response.json();
      if (
        settings.frequencyTable ||
        settings.distanceTable ||
        settings.featureList
      )
        saveAs(
          await (await fetch("api/" + result.rawData)).blob(),
          "rawData.zip"
        );
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
