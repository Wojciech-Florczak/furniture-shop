import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  twitterList: {
    listStyle: "none",
    paddingLeft: 0,
    "& li": {
      display: "flex"
    }
  },
  contactList: {
    listStyle: "none",
    paddingLeft: 0,
    "& li": {
      display: "flex",
      justifyContent: "flex-end"
    }
  },
  socialList: {
    listStyle: "none",
    paddingLeft: 0,
    display: "flex",
    "& li": {
      marginRight: 10,
      fontSize: "1.2rem"
    }
  },
  ccIcons: {
    margin: ".25rem"
  }
});
