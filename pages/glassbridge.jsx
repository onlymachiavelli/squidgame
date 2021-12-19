import React from "react"
import styles from "./../styles/GlassBridge.module.css"
import Image from "next/image"

import LeftSide from "../src/glassbridge/left"
const BridgeGame = () => {
  return (
    <main className={styles.container}>
      <LeftSide />
      <div>hello world</div>
      <div>tst reserved </div>
    </main>
  )
}
export default BridgeGame
