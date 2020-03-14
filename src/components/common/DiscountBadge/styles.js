import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
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
