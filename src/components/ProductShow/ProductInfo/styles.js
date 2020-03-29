import { createUseStyles } from "react-jss";
import { colors } from "../../../stylingTheme";

export const useStyles = createUseStyles({
  input: {
    maxWidth: "4rem"
  },
  rating: {
    display: "flex"
  },
  reviewsLink: { color: colors.tobbaco, fontWeight: "bold" },
  name: {
    color: colors.lisbonBrown,
    fontWeight: "bold"
  },
  category: {
    color: colors.tobbaco,
    textTransform: "capitalize",
    fontStyle: "italic"
  }
});
