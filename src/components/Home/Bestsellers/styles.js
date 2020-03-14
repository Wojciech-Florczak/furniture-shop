import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  arrow: {
    width: "auto",
    height: "auto",
    "&:before": {
      color: "rgba(0,0,0,0.3)",
      fontSize: "2rem",
      margin: "-20px"
    }
  }
});