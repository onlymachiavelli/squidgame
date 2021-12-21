import React from "react"
import logo from "./../../public/img/logo.png"
import Image from "next/image"
import styles from "./../../styles/GlassBridge.module.css"
import { GentleMan } from "./../svg"
import useTimer from "./Timer"
const LeftSide = () => {
  const { time } = useTimer()
  return (
    <div className={styles.inFlex}>
      <div className={styles.logo}>
        <Image src={logo} />
        <p id={styles.gameTitle}>Glass Bridge</p>
      </div>
      <div className={styles.msg}>
        <p>If You Lose , You're Racist</p>
        <div>
          <GentleMan Width="90%" />
        </div>
      </div>

      <div className={styles.counter}>
        <p id={styles.time}>00:{time}</p>
      </div>
      <button className={styles.startBtn}>Start The Game</button>
    </div>
  )
}

export default LeftSide
