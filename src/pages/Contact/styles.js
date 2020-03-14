import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  mapOuter: {
    position: "relative",
    textAlign: "right",
    height: 500,
    width: "100%",
  },
  gmapCanvas: {
    overflow: "hidden",
    background: "none!important",
    height: 500,
    width: "100%"
  }
});