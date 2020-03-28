import { createUseStyles } from "react-jss";
import { colors } from "../../../stylingTheme";

export const useStyles = createUseStyles({
  contentWrapper: {
    display: "flex",
    fontSize: "1.3rem",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    justifyContent: "space-between",
    padding: "1.5rem 0",
    "& svg": {
      color: colors.lisbonBrown,
      fontSize: "1.8rem"
    }
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: colors.lisbonBrown
  },
  centerElement: {
    margin: "1rem auto",
    color: colors.tobbaco
  }
});
