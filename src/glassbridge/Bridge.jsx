import React, { useState } from "react"
import styles from "./../../styles/GlassBridge.module.css"
import { Flag } from "./../svg"
import myTimer from "./Timer"
import Button from "./Button"
import useTimer from "./Timer"
const Bridge = () => {

  return (
    <div className={styles.bridge}>
      <div className={styles.endLine}>
        <Flag Width="40" /> &nbsp;&nbsp;
        <Flag Width="40" />
        &nbsp;&nbsp;
        <Flag Width="40" />
      </div>
      <div className={styles.line}></div>
      <div className={styles.theButtons}>
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
      </div>
    </div>
  )
}

export default Bridge
