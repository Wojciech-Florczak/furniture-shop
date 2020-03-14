import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  list: {
    listStyle: "none",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 0
  },
  listItem: {
    flexBasis: "33%",
    padding: 10
  }
});
