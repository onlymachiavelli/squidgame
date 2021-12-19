import React from "react"
import logo from "./../../public/img/logo.png"
import Image from "next/image"
import styles from "./../../styles/GlassBridge.module.css"
import { GentleMan } from "./../svg"
const LeftSide = () => {
  return (
    <div className={styles.inFlex}>
      <div className={styles.logo}>
        <Image src={logo} />
        <p id={styles.gameTitle}>Glass Bridge</p>
      </div>
      <div className={styles.msg}>
        <p>If You Lose , You're Racist</p>
        <GentleMan Width="300px" Height="200px" />
      </div>
    </div>
  )
}

export default LeftSide
