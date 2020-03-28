import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStyles } from "./styles";
import { icons } from "./config";

export default function SocialMedia() {
  const classes = useStyles();

  return (
    <>
      <h3>Find us on Social Media</h3>

      <ul className={classes.socialList}>
        {icons.map(icon => {
          return (
            <li key={icon.name}>
              <a href={icon.link}>
                <FontAwesomeIcon icon={["fab", icon.name]} />
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}
