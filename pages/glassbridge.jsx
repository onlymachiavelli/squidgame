import React from "react"
import styles from "./../styles/GlassBridge.module.css"
import Image from "next/image"
import Bridge from "../src/glassbridge/Bridge"
import LeftSide from "../src/glassbridge/left"
import Right from "../src/glassbridge/Right"
import Head from "next/head"

const BridgeGame = () => {
  return (
    <main className={styles.container}>
      <Head>
        <title>Glass Bridge</title>
      </Head>
      <LeftSide />
      <Bridge />
      <Right />
    </main>
  )
}
export default BridgeGame
