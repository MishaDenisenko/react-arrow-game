import React from "react"

interface IWelcomeText {
  isTimerActive: boolean
}

const WelcomeText: React.FC<IWelcomeText> = (props) => {
  const { isTimerActive } = props

  return (
    <span>
      {isTimerActive
        ? "Loading..."
        : 'Press "Play" to start the game and wait for the first arrow to appear'}
    </span>
  )
}

export default WelcomeText
