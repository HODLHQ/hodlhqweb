import Head from "next/head";
import Navbar from "components/Navbar";
import TestImage from "public/testimage.png"
import Image from "next/image";
import {useState, useEffect} from "react";
import Web3 from "web3";
import {changeToMatic} from "components/WeBrew3/ChangeNetwork";
const Dash = async (props) => {
  let a = 5;
  let contractAbi = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
  const [pagestate, pagestateSet] = useState(0);
  let contractAddress = "0x6b0A49F799D7F1534227EF9AEb2DaAaC821FEAB1";
  let polyWeb3;
  if(pagestate == 1){
    await changeToMatic();
  }
  
  useEffect(()=>{
    
  },[pagestate])
  return (
    <div className="all fixed inset-0 flex">
      <Head>
        <title>HODLHQ Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <div className="w-full container m-0 h-full flex flex-col">
 
        <Navbar stateTrans={pagestate} stateTransSet={() => {pagestateSet}}/>
        <div className="dashContainer flex pt-20 pl-20">
            <div className="h-[30vw] w-[30vw] bg-[#18abe3] mr-10" style={{borderRadius: "25px",border: "#18abe3 solid 10px"}}><Image src={TestImage} style={{borderRadius: "20px"}} layout="" objectFit="contain"/></div>
            <div className="flex flex-col">
                <div>
                    <div className="label">Name ↺</div>
                    <div className="value">{globalThis.web3js != undefined ? "aa" : "bb"}</div>
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
