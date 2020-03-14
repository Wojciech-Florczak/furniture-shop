import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  icon: {
    fontSize: "1.6rem",
    color: "lightgray",
    height: "100%"
  },
  iconWrapper: {
    position: "relative",
    margin: {
      right: ".5rem",
      left: ".5rem"
    },
    cursor: "pointer",
    "& svg": {
      zIndex: -1
    }
  }
});
