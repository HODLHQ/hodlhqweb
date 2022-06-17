import Head from "next/head";
import Navbar from "components/Navbar";
import TestImage from "public/testimage.png"
import Image from "next/image";

const Collections = (props) => {
  let a = 5;

  return (
    <div className="all fixed inset-0 flex">
      <Head>
        <title>HODLHQ Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <div className="w-full container m-0 h-full flex flex-col">
        <Navbar />
        <div className="w-full h-full flex flex-col items-center justify-evenly text-[#74d9ff] font-bold uppercase text-[30px] ">
          <a target="_blank" rel="noreferrer" href="https://coolxclones.xyz">COOL X CLONES</a><br/>
          <a target="_blank" rel="noreferrer" href="https://market.decentraland.org/accounts/0x6005cdca3e6aef6aa9ff5a6301b09c770aa55783?assetType=item&section=wearables">DIAMOND WEARABLE</a><br/>
          <a target="_blank" rel="noreferrer" href="https://opensea.io/collection/podmarket">POD MARKET</a><br/>
          <a target="_blank" rel="noreferrer" href="https://juicecrewnft.com">JUICE CREW</a><br/>
        </div>
        
      </div>
    </div>
  );
};

export default Collections;
