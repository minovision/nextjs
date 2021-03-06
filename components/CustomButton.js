import React from "react";
import Button from "@material-ui/core/Button";
import Link from "next/link";

const DisableElevationButton = ({ text, url }) => {
  if (url) {
    return (
      <Link href={url}>
        <Button variant="contained" color="primary" disableElevation>
          {text}
        </Button>
      </Link>
    );
  } else {
    return (
      <Button variant="contained" color="primary" disableElevation>
        {text}
      </Button>
    );
  }
};

const CustomButton = ({ text, url }) => {
  return <DisableElevationButton text={text} url={url} />;
};
export default CustomButton;
