import { createUseStyles } from "react-jss";
export const useStyles = createUseStyles({
  title: {
    fontSize: "1rem",
    color: "gray",
    textAlign: "center",
    marginBottom: 0
  },
  price: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    textAlign: "center"
  },
  buttonsWrapper: {
    opacity: 1,
    width: "100%",
    height: 40,
    display: "flex",
    alignItems: "center",
    backgroundColor: "#EAEBED",
    borderTop: "1px solid #DFDFDF",
    "& div": {
      display: "flex",
      flex: "1 auto",
      padding: ".25rem",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      "&:not(:last-child)": {
        borderRight: "1px solid #DFDFDF"
      },
      "& span": {
        fontSize: "0.75rem"
      }
    },
    fontSize: "1rem"
  }
});
