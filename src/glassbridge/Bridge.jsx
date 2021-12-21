import React, { useState } from "react"
import styles from "./../../styles/GlassBridge.module.css"
import { Flag } from "./../svg"
import myTimer from "./Timer"
import Button from "./Button"
const Bridge = () => {
  const time = myTimer()
  const [Time, setTime] = useState(time)
  return (
    <div className={styles.bridge}>
      <div className={styles.endLine}>
        <Flag Width="40" /> &nbsp;&nbsp;
        <Flag Width="40" />
        &nbsp;&nbsp;
        <Flag Width="40" />
      </div>
      <div className={styles.line}>Time</div>
    </div>
  )
}

export default Bridge
