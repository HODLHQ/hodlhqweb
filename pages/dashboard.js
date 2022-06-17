import Head from "next/head";
import Navbar from "components/Navbar";
import TestImage from "public/testimage.png"
import Image from "next/image";

const Dash = (props) => {
  let a = 5;

  return (
    <div className="all fixed inset-0 flex">
      <Head>
        <title>HODLHQ Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <div className="w-full container m-0 h-full flex flex-col">
        <Navbar />
        <div className="dashContainer flex pt-20 pl-20">
            <div className="h-[30vw] w-[30vw] bg-[#18abe3] mr-10" style={{borderRadius: "25px",border: "#18abe3 solid 10px"}}><Image src={TestImage} style={{borderRadius: "20px"}} layout="" objectFit="contain"/></div>
            <div className="flex flex-col">
                <div>
                    <div className="label">Name ↺</div>
                    <div className="value">HODLCEO</div>
                </div>
                <div className="mt-10">
                    <div className="label">Twitter ↺</div>
                    <div className="value">@HODLCEO</div>
                </div>
                <div className="mt-10">
                    <div className="label">PFP ↺</div>
                    <div className="value">0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b/7005</div>
                </div>
                <div className="mt-10">
                    <div className="label">OG ID</div>
                    <div className="value">01</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Dash;
