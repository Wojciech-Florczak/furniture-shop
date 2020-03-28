import React from "react";
import { createUseStyles } from "react-jss";
import { colors } from "../../../stylingTheme";

const useStyles = createUseStyles({
  section: {
    backgroundColor: colors.platinum
  }
});

export default function Section({ bg, children, className }) {
  const classes = useStyles();
  const styled = className || bg;

  return (
    <section
      className={
        styled
          ? `${bg ? `${classes.section} ` : ""}${className ? className : ""}`
          : ""
      }
    >
      {children}
    </section>
  );
}
