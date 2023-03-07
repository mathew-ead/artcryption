import { Inter } from "next/font/google";
// import styles from "./page.module.css";
import Card from "./pages/card";
import Welcome from "./pages/welcome";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Welcome/>
      <Card/>     
    </>
  );
}
