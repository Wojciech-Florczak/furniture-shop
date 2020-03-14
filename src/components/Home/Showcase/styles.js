import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  messageBox: {
    color: "white",
    position: "absolute",
    fontSize: "2rem",
    padding: 20,
    width: "100%",
    height: "100%",
    border: "2px solid gray",
    borderRadius: 6,
    "& a, h4": {
      color: "white",
      fontSize: "1.1rem",
      textDecoration: "none"
    }
  }
});
