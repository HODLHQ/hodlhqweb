import Head from "next/head";
import Navbar from "components/Navbar";
import Image from "next/image";
import {useState, useEffect, useCallback} from "react";
import Link from "next/link";
import NFTCard from "components/WeBrew3/NFTCard";
import OGCard from "components/WeBrew3/OGCard";
const Vault = (props) => {
    const [pagestate, pagestateSet] = useState(0);
    const [innerSize, setInnerSize] = useState([globalThis.innerHeight+1,globalThis.innerWidth+1]);
    
    const setScreenLengths = useCallback(() => {
        setInnerSize([globalThis.innerHeight,globalThis.innerWidth]);
    }, [])
    let mobile = 1134 > innerSize[1] || innerSize[0] > innerSize[1];
    console.log(mobile)
    useEffect(() => {
      window.addEventListener("resize", setScreenLengths);
      setScreenLengths()
      return () => {
        window.removeEventListener("resize", setScreenLengths)
      };
    }, []);
    let imageCard = "h-[30vh] pr-10 mb-10"
    let imageWidth = "100%"
    let imageClass = "rounded-[25px] imageGallery"
    let titleStyle = "titleC text-[30px] mr-3 ml-3 mb-3"
    let heightCard = "20vh"
    console.log("render")
  return (
    <div className="all min-h-[100vh] flex w-full inset-0 ">
      <Head>
        <title>HODLHQ Gallery</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <div className="w-full container m-0 flex flex-col">
        <Navbar stateTrans={pagestate} stateTransSet={pagestateSet} />
        <div className="flex justify-start flex-wrap m-10 ">
            <div className={titleStyle}>Boboch D. Brew</div>
            <div className="basis-full"></div>
            <OGCard 
            id={15}
            nolink={true}
            size={mobile ? heightCard : undefined}
            />
        </div>
      </div>
    </div>
  );
};

export default Vault;
