import React from "react"
import styles from "./../../styles/GlassBridge.module.css"
import { Flag } from "./../svg"
const Bridge = () => {
  return (
    <div className={styles.bridge}>
      <div className={styles.endLine}>
        <Flag Width="40" /> &nbsp;&nbsp;
        <Flag Width="40" />
        &nbsp;&nbsp;
        <Flag Width="40" />
      </div>
    </div>
  )
}

export default Bridge
