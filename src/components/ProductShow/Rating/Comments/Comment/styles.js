import { createUseStyles } from "react-jss";
import { colors } from "../../../../../stylingTheme";

export const useStyles = createUseStyles({
  comment: {
    color: colors.lisbonBrown,
    display: "flex",
    flexWrap: "wrap",
    marginTop: ".75rem",
    marginBottom: ".75rem"
  },
  leftCol: {
    fontWeight: "bold",
    borderRight: `1px solid ${colors.lisbonBrown}`
  },
  leftColContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: ".25rem"
  },
  rightCol: {}
});
