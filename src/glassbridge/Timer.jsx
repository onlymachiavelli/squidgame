import React, { useEffect, useState } from "react"

const myTimer = () => {
  useEffect(() => {
    let [time, setTime] = useState(60)
    while (i--) {
      setTime(time--)
      setTimeout(myTimer, 1000)
    }
  }, [time])
  return { time, setTime }
}

export default myTimer
