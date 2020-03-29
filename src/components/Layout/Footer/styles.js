import { createUseStyles } from "react-jss";
import { colors } from "../../../stylingTheme";

const { platinum, lisbonBrown } = colors;

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
  twitterList: {
    "& li": {
      display: "flex"
    },
    listStyle: "none",
    paddingLeft: 0
  }
});
