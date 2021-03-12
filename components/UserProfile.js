import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const UserProfile = ({ user }) => {
  // console.log(user);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Avatar
        alt={user.displayName}
        src={user.photoURL}
        className={classes.large}
      />
      <i>@{user.displayName}</i>
      <h1>{user.displayName}</h1>
    </div>
  );
};
export default UserProfile;
