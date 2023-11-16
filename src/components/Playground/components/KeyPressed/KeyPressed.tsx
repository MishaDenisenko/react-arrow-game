import React, { useCallback, useEffect } from "react"
import { MAP_ARROW_CODES } from "../../constants"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { setEnteredValue, setSteps } from "../../store/slice"
import { useKeyPressedElement } from "./hooks"

interface IKeyPressed {
  isTimerActive: boolean
}

const KeyPressed: React.FC<IKeyPressed> = (props) => {
  const { isTimerActive } = props
  const keyPressedElement = useKeyPressedElement()
  const dispatch = useAppDispatch()

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const enteredValue = e.key

      if (MAP_ARROW_CODES.hasOwnProperty(enteredValue) && isTimerActive)
        dispatch(setEnteredValue(enteredValue))
    },
    [dispatch, isTimerActive],
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)

    return () => window.removeEventListener("keydown", handleKeyDown)
  })

  return <div>{keyPressedElement}</div>
}

export default KeyPressed
