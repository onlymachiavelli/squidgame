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
    <button >

    </button>
    <button></button>
    <button></button>
  </div>
}

export default buttonLine
