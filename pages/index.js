import Head from "next/head";
import Navbar from "components/Navbar";
import Bg from "components/Bg";
import Persos from "components/Persos";
import {useState, useEffect} from "react";
const Home = (props) => {
  const [pagestate, pagestateSet] = useState(0);
  return (
    <div className="all fixed inset-0 flex overflow-auto">
      <Head>
        <title>HODLHQ</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="In HODL we trust !" />
      </Head>
      <Bg />
      <div className="w-full container m-auto h-full flex flex-col">
        <Navbar stateTrans={pagestate} stateTransSet={pagestateSet}/>
        <Persos />
      </div>
    </div>
  );
};

export default Home;
