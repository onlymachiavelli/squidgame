import React, { useState, useEffect } from "react"

import styles from "./../../styles/GlassBridge.module.css"

const Button = () => {
  useEffect(() => {
    console.log(Math.floor(Math.random() * 3))
  }, [])
  return <></>
}

export default Button
