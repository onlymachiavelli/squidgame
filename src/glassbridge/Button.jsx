import React, { useState, useEffect } from "react"

import styles from "./../../styles/GlassBridge.module.css"

const Random = () => {
  return Boolean(Math.floor(Math.random() * 2))
}
const buttonLine = ({ ...props }) => {
  const [buttons, setButtons] = useState([false, false, false])
  let a = ["fuck"]
  a += "hello"
  a += "bitch"
  console.log(typeof a)
  useEffect(() => {
    setButtons([
      buttons.indexOf(true) !== -1 ? false : Random(),
      buttons.indexOf(true) !== -1 ? false : Random(),
      buttons.indexOf(true) === -1 ? true : false,
    ])
  }, [])

  return <div className={styles.buttonLine}>{JSON.stringify(buttons)}</div>
}

export default buttonLine
