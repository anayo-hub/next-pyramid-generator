import { Metadata } from "next";
import Pyramid from "./components/Pyramid";

export const metadata = {
  title: "Pyramid generator which i implemeted originally in c",
};

export default function Home() {
  return (
    <div>
      <main>
        <h1>Welcome to Pyramid Generator</h1>
        <Pyramid />
      </main>
    </div>
  );
}
