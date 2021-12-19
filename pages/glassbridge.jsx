import React from "react"
import styles from "./../styles/GlassBridge.module.css"
import Image from "next/image"
import logo from "./../public/img/logo.png"
import LeftSide from "../src/glassbridge/left"
const BridgeGame = () => {
  return (
    <main className={styles.container}>
      <div className={styles.logo}>
        <Image src={logo} width={"100"} height={"50"} />
        <LeftSide />
      </div>
    </main>
  )
}
export default BridgeGame
