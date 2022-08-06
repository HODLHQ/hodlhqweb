import Head from "next/head";
import Navbar from "components/Navbar";
import Image from "next/image";
import {useState, useEffect} from "react";
const Stream = (props) => {
    const [pagestate, pagestateSet] = useState(0);
    let imageCard = "h-[30vh] pr-10 mb-10"
    let imageWidth = "100%"
    let imageClass = "rounded-[25px] imageGallery"
  return (
    <div className="all flex w-full inset-0 min-h-[100vh] ">
      <Head>
        <title>HODLHQ Stream</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <div className="w-full container m-0 flex flex-col min-h-[100vh] ">
        <Navbar stateTrans={pagestate} stateTransSet={pagestateSet} />
        <div className="flex flex-1 justify-around m-10 ">
            <iframe src="https://player.twitch.tv/?channel=hodlceo&parent=www.hodlhq.xyz" frameBorder="0" allowFullScreen="true" scrolling="no" height="100%" width="100%"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Stream;
