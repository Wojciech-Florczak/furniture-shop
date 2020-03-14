import React from "react";
import { useStyles } from "./styles";

export default function Map() {
  const classes = useStyles();

  return (
    <div className={classes.mapOuter}>
      <div className={classes.gmapCanvas}>
        <iframe
          title="google-map"
          width="100%"
          height="500"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=warsaw&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
      </div>
    </div>
  );
}
