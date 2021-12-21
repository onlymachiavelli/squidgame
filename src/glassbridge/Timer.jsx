import React, { useEffect, useState } from "react"

const useTimer = () => {
  let [time, setTime] = useState(60)
  const [launch, setLaunch] = useState(true)
  useEffect(() => {
    if (time == 0) {
      setLaunch(false)
      setTime(60)
    }
    if (launch) {
      let x = setInterval(() => {
        setTime(time - 1)
      }, 1000)
    }

    return () => clearInterval(x)
  }, [time, launch])

  return { time, setTime, launch, setLaunch }
}

export default useTimer
