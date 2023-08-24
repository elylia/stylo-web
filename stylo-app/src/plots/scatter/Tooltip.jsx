import React from "react";
import styles from "./tooltip.module.css";

export const Tooltip = ({ interactionData }) => {
  if (!interactionData) {
    return null;
  }
  let style = {};
  if (interactionData.xPos > 400) {
    style = {
      right: interactionData.w - interactionData.xPos - 90,
      top: interactionData.yPos + 40,
    };
  } else {
    style = {
      left: interactionData.xPos + 95,
      top: interactionData.yPos + 40,
    };
  }

  return (
    <div className={styles.tooltip} style={style}>
      {interactionData.name}
    </div>
  );
};
