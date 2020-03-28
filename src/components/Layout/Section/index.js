import React from "react";
import { createUseStyles } from "react-jss";
import { colors } from "../../../stylingTheme";

const useStyles = createUseStyles({
  section: {
    backgroundColor: colors.platinum
  }
});

export default function Section({ bg, children }) {
  const classes = useStyles();
  return <section className={bg && classes.section}>{children}</section>;
}
