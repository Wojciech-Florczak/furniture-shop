import { createUseStyles } from "react-jss";
import { colors } from "../../../stylingTheme";
export const useStyles = createUseStyles({
  title: {
    fontWeight: "bold",
    color: colors.lisbonBrown
  },
  text: {
    fontSize: "1.4rem",
    fontStyle: "italic",
    textIndent: "1rem"
  }
});
