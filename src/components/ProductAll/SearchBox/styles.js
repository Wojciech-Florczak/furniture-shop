import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  input: {
    maxWidth: navbar => navbar && 150
  }
});
