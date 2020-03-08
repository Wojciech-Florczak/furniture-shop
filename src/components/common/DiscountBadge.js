import React from 'react'
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: props => ({
    fontSize: "2rem",
    borderRadius: "100%",
    background: props.background,
    color: props.color,
    position: "absolute",
    fontWeight: "bold",
    right: 50,
    bottom: 50,
    padding: "14px 8px",
    height: "auto",
    width: "auto"
  })
})

export default function DiscountBadge(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.wrapper}>
      <span>-{props.value}%</span>
    </div>
  )
}

DiscountBadge.defaultProps = {
  value: 50,
  color: "white",
  background: "orange"
}