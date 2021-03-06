import Head from "next/head";
import styles from "../styles/Home.module.css";
import Loader from "../components/Loader";
import Button from "@material-ui/core/Button";
import toast from "react-hot-toast";

export default function Home() {
  return (
    <main>
      <h1>HomePage</h1>
      <Loader show={true} />
      <Button
        variant="contained"
        color="primary"
        disableElevationcolor="primary"
        onClick={() => toast.success("i smell toast!")}
      >
        Toast Me
      </Button>
    </main>
  );
}
