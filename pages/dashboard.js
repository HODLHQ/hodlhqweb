import Head from "next/head";
import Navbar from "components/Navbar";
import TestImage from "public/testimage.png"
import Image from "next/image";
import {useState, useEffect,useCallback} from "react";

import {changeToMatic} from "components/WeBrew3/ChangeNetwork.js";
import Popup from 'reactjs-popup';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import contractAbi from "public/Abis/Dashboard.json"
import Web3 from "web3";
const contractAddress = "0xf9e67C8AA7E08B8872e0C28CB403a29Db27e9864";

let name = "No name";
let twitter = "No twitter";
let pfp = "No pfp"
let pfpURL = ""
let ogid = "Not OG"
const Dash = () => {
  let a = 5;
  let polyWeb3;
  let contract;
  const [pagestate, pagestateSet] = useState(0);
  const [contentState, setContentState] = useState("");


  useEffect(() => {
    if(pagestate === 1){
      changeToMatic().then(()=>{
        
        console.log(globalThis.ethereum.chainId)
        contract = new globalThis.web3js.eth.Contract(contractAbi,contractAddress);
        globalThis.contract = contract;
        contract.methods.data(globalThis.accounts[0],"name").call().then((x)=>{
          name=x+"";
          
          contract.methods.data(globalThis.accounts[0],"twitter").call().then((x2)=>{
            twitter=x2+""
            contract.methods.data(globalThis.accounts[0],"pfp").call().then((x3)=>{
              pfp=x3;
                contract.methods.ogID(globalThis.accounts[0]).call().then((x4)=>{
                  ogid=x4;
                    if(x3 != "" && x3 != "Pfp Ipfs Cid") pfpURL = "https://ipfs.io/ipfs/"+ (x3);
                    console.log(pfp)
                    setContentState(name+twitter+pfp+ogid)
                })
              })
            })
          })
      }).catch((e)=>{
        toast.error("Error Switching")
        console.log("Error Switching",e)
      });
    }
  }, [pagestate])

  useEffect(() => {
    pagestateSet(0)
  }, [])

  const [innerSize, setInnerSize] = useState([globalThis.innerHeight+1,globalThis.innerWidth+1]);
  
  const setScreenLengths = useCallback(() => {
      setInnerSize([globalThis.innerHeight,globalThis.innerWidth]);
  }, [])
  let mobile = 1134 > innerSize[1] || innerSize[0] > innerSize[1];
  useEffect(() => {
    window.addEventListener("resize", setScreenLengths);
    setScreenLengths()
    return () => {
      window.removeEventListener("resize", setScreenLengths)
    };
  }, []);

  const [nameInputState, setNameInputState] = useState("Name");
  const [twitterInputState, setTwitterInputState] = useState("Twitter");
  const [cidInputState, setCidInputState] = useState("Name");

  return (
    <div className="all h-full inset-0 flex">
      <Head>
        <title>HODLHQ Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <div className="w-full container m-0 min-h-[100vh] flex flex-col">
        <ToastContainer position="bottom-left" theme={"dark"} />
        <Navbar stateTrans={pagestate} stateTransSet={pagestateSet}/>
        <div className={"dashContainer flex pt-20 h-full " +
        (mobile ? "flex-col pl-5 pb-10" : "pl-20 ")}>
            <div className="h-[30vw] w-[30vw] bg-[#18abe3] mr-10 mb-10 relative" style={{borderRadius: "25px",border: "#18abe3 solid 10px"}}><Image src={pfpURL == "" ? TestImage : pfpURL} style={{borderRadius: "20px"}} layout="fill" objectFit="cover"/></div>
            <div className="flex flex-col">
                <div>
                    <button className="label">Name</button>
                    <div className="value">{name}</div>
                </div>
                <div className="mt-10">
                    <div className="label">Twitter</div>
                    <div className="value">{twitter}</div>
                </div>
                <div className="mt-10">
                    <div className="label">PFP</div>
                    <div className="value">{pfp}</div>
                </div>
                <div className="mt-10">
                    <div className="label">OG ID</div>
                    <div className="value">{ogid}</div>
                </div>
                <div className="flex space-x-10">
                <Popup trigger={<button className="web3button whitespace-nowrap text-[#74d9ff] font-bold uppercase mt-5">Update</button>} 
                  position="top center">
                  <input
                    id="name"
                    name="nameInput"
                    onChange={(x)=>{setNameInputState(x.target.value)}}
                    type="text"
                    defaultValue="Name"
                  />
                  <input
                    id="twitter"
                    name="twitterInput"
                    onChange={(x)=>{setTwitterInputState(x.target.value)}}
                    type="text"
                    defaultValue="Twitter"
                  />
                  <input
                    id="cid"
                    name="cidInput"
                    onChange={(x)=>{setCidInputState(x.target.value)}}
                    type="text"
                    defaultValue="Pfp Ipfs Cid"
                  />
                  <button onClick={()=>{
                    if(pagestate == 1){
                      contract = new globalThis.web3js.eth.Contract(contractAbi,contractAddress);
                      globalThis.contract = contract;
                        contract.methods.setDatas(["name","twitter","pfp"],[nameInputState,twitterInputState,cidInputState]).send({
                          from: globalThis.accounts[0],
                          }).then(function (txHash) {
                            pagestateSet(1)
                            toast.success("Infos updated")
                          }).catch(console.error)
                        }
                  }}>Send</button>
                </Popup>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Dash;
