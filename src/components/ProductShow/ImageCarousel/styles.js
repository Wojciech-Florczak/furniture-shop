import { createUseStyles } from "react-jss";
import { colors } from "../../../stylingTheme";

export const useStyles = createUseStyles({
  image: {
    width: "100%",
    padding: 5
  },
  arrow: {
    width: "auto",
    height: "auto",
    "&:before": {
      color: colors.tobbaco,
      fontSize: "2rem",
      margin: "0px"
    }
  }
});
