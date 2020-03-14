import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.4)"
  },
  intro: {
    position: "absolute",
    top: "40%",
    left: "50%",
    color: "white",
    zIndex: 1,
    transform: "translate(-50%, 50%)",
    "& h2": {
      fontSize: "3rem"
    }
  },
  imageWrapper: {
    width: "100%",
    height: "100%",
    position: "relative"
  },
  contentWrapper: {
    height: 600
  },
  image: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
});
