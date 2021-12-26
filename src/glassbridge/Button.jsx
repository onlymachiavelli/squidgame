import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event"
import React, { useState, useEffect } from "react"

import styles from "./../../styles/GlassBridge.module.css"

const useCurrentBtn = () => {
  const [currrentLine, setCurrentLine] = useState(1)

  useEffect(() => {

  }, [])
}



const Random = () => {
  return Math.floor(Math.random() * 3)
}
const useRandom = () => {
  let a = [false, false, false]
  a[Random()] = true

  const [buttons, setButtons] = useState([a[0], a[1], a[2]])

  useEffect(() => {

  }, [buttons])
  return { buttons, setButtons }

}


const checkGlass = (arr, num) => {
  if (arr[num]) return true
  return false
}
const buttonLine = ({ ...props }) => {
  const { buttons, setButtons } = useRandom()
  const btns = [buttons[0], buttons[1], buttons[2]]

  return (
    <div className={styles.buttonLine}>
      <button id={props.Button + "a"} onClick={() => {
        if (checkGlass(btns, 0)) {

        }
      }}></button>
      <button id={props.Button + "b"}></button>
      <button id={props.Button + "c"}></button>
    </div>
  )
}

export default buttonLine
