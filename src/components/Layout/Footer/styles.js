import { createUseStyles } from "react-jss";
import { colors } from "../../../stylingTheme";

const { platinum, tobbaco, lisbonBrown } = colors;

export const useStyles = createUseStyles({
  ccIcons: {
    margin: ".25rem"
  },
  contactList: {
    "& li": {
      display: "flex",
      justifyContent: "flex-end"
    },
    listStyle: "none",
    paddingLeft: 0
  },
  footer: {
    backgroundColor: platinum,
    "& svg": {
      color: `${lisbonBrown}!important`
    }
  },
  socialList: {
    "& li": {
      fontSize: "1.2rem",
      marginRight: 10
    },
    display: "flex",
    listStyle: "none",
    paddingLeft: 0
  },
  tag: {
    margin: ".2rem",
    textTransform: "capitalize",
    backgroundColor: tobbaco,
    fontSize: "1rem"
  },
  twitterList: {
    "& li": {
      display: "flex"
    },
    listStyle: "none",
    paddingLeft: 0
  }
});
