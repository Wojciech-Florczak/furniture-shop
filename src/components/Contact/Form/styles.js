import { createUseStyles } from "react-jss";
import { colors } from "../../../stylingTheme";

export const useStyles = createUseStyles({
  form: {
    "& input, textarea": {
      border: `1px solid ${colors.lisbonBrown}`
    }
  }
});
