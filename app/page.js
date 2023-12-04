// this page is the home page of the app

import Image from "next/image";
import lobosIsland from "../public/assets/Home/lobos-island-bg.svg";
import "./page.scss";

export default function Home() {
  return (
    <main className="main">
      <div className="home__section">
        <Image src={lobosIsland} alt="lobos island" width={"100vw"} height={"auto"} />
      </div>
    </main>
  );
}
