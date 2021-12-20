import React from "react"
import styles from "./../styles/GlassBridge.module.css"
import Image from "next/image"
import Bridge from "../src/glassbridge/Bridge"
import LeftSide from "../src/glassbridge/left"
const BridgeGame = () => {
  return (
    <main className={styles.container}>
      <LeftSide />
      <Bridge />
      <div>tst reserved </div>
    </main>
  )
}
export default BridgeGame
