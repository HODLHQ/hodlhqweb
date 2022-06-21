import Head from "next/head";
import Navbar from "components/Navbar";
import Image from "next/image";
import {useState, useEffect, useCallback} from "react";
import Link from "next/link";
import OGCard from "components/WeBrew3/OGCard";
import NFTCard from "components/WeBrew3/NFTCard";
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
    let titleStyle = "titleC mr-3 ml-3 mb-3"
    let heightCard = "30"
    console.log("render")
  return (
    <div className="all flex min-h-[100vh] w-full inset-0 ">
      <Head>
        <title>HODLHQ Gallery</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <div className="w-full container m-0 flex flex-col">
        <Navbar stateTrans={pagestate} stateTransSet={pagestateSet} />
            <div className={"flex justify-start flex-wrap mr-10 mb-10 mt-5 " + (mobile ? " ml-5" : "ml-10")}>
            <div className={titleStyle+" mb-5 text-[30px]"}>OGs</div>
            <div className="basis-full"></div>
            <div className="flex justify-evenlty">
              <div className={titleStyle+" mb-5 text-[10px]"}>OG&apos;s are members of the web3 community that took it upon themselves to support the HQ and those within it.<br/> Currently you can only get this rank by buying our 1 of 100 DCL hat that comes with a physical version,<br/> or by earning it by buidling!</div>
              <div className="relative ml-10">
                <div className={(mobile ? "h-[15vh] w-[15vh]" : "absolute h-[20vh] w-[20vh]") } style={{
                  top: "-60%",
                }}>
                  <NFTCard 
                  content="https://lh3.googleusercontent.com/nXUYIPNgw5GOIwlJAPi9-BwyMlc820Z8b6BISXdld-nvgGO2E6mrsLoVdKRfmuiad-wz02RPo9SpDY2bYcphBbjJLOP9h0a2q2B8qA=w600"
                  link="https://market.decentraland.org/contracts/0x9cd35964358247217339be23110d9f676dfb496c/items/0"
                  creator="HODLHQ"
                  name="OGCap"
                  height={mobile ? "15" : "20"}
                  />
                </div>
              </div>
            </div>
            <div className="basis-full"></div>
            <OGCard 
            id={15}
            size={mobile ? "25" : "30"}
            />
            <OGCard 
            id={15}
            size={mobile ? "25" : "30"}
            />
        </div>
      </div>
    </div>
  );
};

export default Vault;
