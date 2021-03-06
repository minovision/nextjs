import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../lib/context";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },
}));

const ButtonAppBar = () => {
  const classes = useStyles();
  const { user, username } = useContext(UserContext);
  // console.log(`x: ${typeof username}`);
  // let user = null,
  //   username = null;
  console.log(
    `navbar: user: ${JSON.stringify(user)} username: ${JSON.stringify(
      username
    )}`
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link href="/">Logo</Link>
          </Typography>
          {/* if user is signed in and username exists */}
          {username && (
            <>
              <li class="no-bullets">
                <Button variant="contained" color="primary" disableElevation>
                  Sign Out
                </Button>
              </li>
              <li class="no-bullets">
                <Link href="/admin">
                  <Button variant="contained" color="primary" disableElevation>
                    Write Post
                  </Button>
                </Link>
              </li>
              <li class="no-bullets">
                <Link href="/${username}">
                  <img src={user?.photoURL} />
                </Link>
              </li>
            </>
          )}
          {/* user is not signed in OR has no username */}
          {!username && (
            <Link href="/enter">
              <Button variant="contained" color="primary" disableElevation>
                Enter
              </Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const Navbar = ({}) => {
  return <ButtonAppBar />;
};
export default Navbar;
