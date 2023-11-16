import React from "react"
import {
  Button as MaterialButton,
  ButtonProps as MaterialButtonProps,
} from "@mui/material"
import cn from "classnames"

import styles from "./Button.module.css"
import "../../../index.css"

interface IButton extends MaterialButtonProps {}

const Button: React.FC<IButton> = (props) => {
  const { children, className = "" } = props

  return (
    <MaterialButton
      variant={"contained"}
      size={"small"}
      className={cn(styles.button, className)}
      {...props}
    >
      {children}
    </MaterialButton>
  )
}

export default Button
