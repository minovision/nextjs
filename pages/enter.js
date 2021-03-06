import { Button } from "@material-ui/core";
import { UserContext } from "../lib/context";
import { auth, firestore, googleAuthProvider } from "../lib/firebase";
import { useContext } from "react";
import UsernameForm from "../components/UsernameForm";

const SignInButton = () => {
  const signInWithGoogle = async () => {
    try {
      await auth.signInWithPopup(googleAuthProvider);
    } catch (error) {
      console.log(`signInWithGoogle: ${error}`);
    }
  };
  return (
    <Button
      variant="contained"
      color="primary"
      disableElevation
      onClick={signInWithGoogle}
    >
      <img class="icon" src={"GoogleLogo.png"}></img>Google Sign In
    </Button>
  );
};

const SignOutButton = () => {
  return (
    <Button
      variant="contained"
      color="primary"
      disableElevation
      onClick={() => {
        auth.signOut();
      }}
    >
      Sign Out
    </Button>
  );
};

const EnterPage = () => {
  const { user, username } = useContext(UserContext);
  // console.log(`enter: user: ${JSON.stringify(user)} username: ${JSON.stringify(username)}`);
  return (
    <main>
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
};
export default EnterPage;
