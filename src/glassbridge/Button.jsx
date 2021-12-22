import React, { useState, useEffect } from "react"

import styles from "./../../styles/GlassBridge.module.css"

const buttonLine = () => {
  useEffect(() => {
    console.log(Math.floor(Math.random() * 3))
  }, [])
  return <div className={styles.buttonLine}></div>
}

export default buttonLine
