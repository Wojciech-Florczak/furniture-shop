import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  socialList: {
    listStyle: "none",
    paddingLeft: 0,
    display: "flex",
    "& li": {
      marginRight: 10,
      fontSize: "1.2rem"
    }
  }
});
