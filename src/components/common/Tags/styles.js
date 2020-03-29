import { createUseStyles } from "react-jss";
import { colors } from "../../../stylingTheme";

export const useStyles = createUseStyles({
  tag: {
    margin: ".2rem",
    textTransform: "capitalize",
    backgroundColor: colors.tobbaco,
    fontSize: "1rem"
  }
});
