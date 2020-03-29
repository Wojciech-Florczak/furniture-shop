import { createUseStyles } from "react-jss";
import { colors } from "../../../stylingTheme";

export const useStyles = createUseStyles({
  title: {
    color: colors.tobbaco,
    fontSize: "1.4rem",
    paddingTop: ".75rem",
    paddingLeft: ".75rem",
    fontWeight: "bold"
  }
});
