import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event"
import React, { useState, useEffect } from "react"

import styles from "./../../styles/GlassBridge.module.css"

const Random = () => {
  return Math.floor(Math.random() * 3)
}
const buttonLine = ({ ...props }) => {
  let a = [false, false, false]
  a[Random()] = true

  const [buttons, setButtons] = useState([a[0], a[1], a[2]])

  useEffect(() => {

  }, [])

  return <div className={styles.buttonLine}>
    <button id={props.Button}></button>
    <button id={props.Button}></button>
    <button id={props.Button}></button>
  </div>
}

export default buttonLine
