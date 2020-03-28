import { createUseStyles } from "react-jss";
import { colors } from "../../../stylingTheme";

const { lisbonBrown, bone, platinum, tobbaco } = colors;
export const useStyles = createUseStyles({
  addToCart: {
    flex: "initial!important"
  },
  button: {
    flex: 1,
    borderRadius: 0,
    border: 0,
    backgroundColor: bone,
    color: tobbaco,
    fontWeight: "bold"
  },
  buttonsWrapper: {
    backgroundColor: bone,
    borderTop: "1px solid #DFDFDF",
    display: "flex",
    fontSize: "1rem",
    opacity: 1,
    width: "100%",
    "& div": {
      "&:not(:last-child)": {
        borderRight: "1px solid #DFDFDF"
      },
      alignItems: "center",
      display: "flex",
      flex: "1 auto",
      justifyContent: "center"
    },
    "& svg": {
      color: lisbonBrown
    }
  },
  card: {
    height: "100%",
    backgroundColor: platinum
  },
  heart: {
    "& svg": {
      // color: platinum,
      // "&:hover": {
        color: "#a83f39"
      // }
    }
  },
  price: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    textAlign: "center"
  },
  title: {
    color: lisbonBrown,
    fontSize: "1.2rem",
    marginBottom: 0,
    textAlign: "center"
  }
});
