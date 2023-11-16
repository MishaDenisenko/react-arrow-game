import React from "react"

import { useAppSelector } from "../../../../../app/hooks"

import { MAP_ARROW_CODES } from "../../../constants"
import { IMapArrowCodes } from "../../../types"

import styles from "./RandomArrows.module.css"

const RandomArrows: React.FC = () => {
  const { steps } = useAppSelector((state) => state.playground)

  const getStylesRandomArrow = (success: boolean | null): string => {
    if (success == null) return styles.icon

    return success ? styles.iconSuccess : styles.iconUnsuccess
  }

  return (
    <>
      {steps.map(({ step, success, currentValue }) => (
        <span key={step} className={getStylesRandomArrow(success)}>
          {MAP_ARROW_CODES[currentValue as keyof IMapArrowCodes]}
        </span>
      ))}
    </>
  )
}

export default RandomArrows
