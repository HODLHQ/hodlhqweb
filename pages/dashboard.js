import Head from "next/head";
import Navbar from "components/Navbar";
import TestImage from "public/testimage.png"
import Image from "next/image";
import {useState, useEffect,useCallback} from "react";
import Web3 from "web3";
import {changeToMatic} from "components/WeBrew3/ChangeNetwork.js";
import Popup from 'reactjs-popup';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import contractAbi from "public/Abis/Dashboard.json"

const contractAddress = "0x7a9A57e11CC52411F568704BE67302F6b6eFA1Ef";

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
            contract.methods.pfpsContracts(globalThis.accounts[0]).call().then((x3)=>{
              contract.methods.pfpsIds(globalThis.accounts[0]).call().then((x5)=>{
                pfp=x3+"/"+x5;
                contract.methods.pfpsUris(globalThis.accounts[0]).call().then((x4)=>{
                  if(x4 != ""){
                    fetch(x4)
                    .then((response) => response.json())
                    .then((responseJson) => {
                      setContentState(name+twitter+pfp);
                      pfpURL = "https://ipfs.io/ipfs/"+ (responseJson.image != undefined ? responseJson.image.substring(7) : responseJson.image_url.substring(7));
                      console.log(pfp)
                    })
                    .catch((error) => {
                      console.error(error);
                    });
                  }else{
                    setContentState(name+twitter+pfp);
                  }
                })
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

  const [innerSize, setInnerSize] = useState([0,0]);
  
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
  const [contractAddressInputState, setContractAddressInputState] = useState("Name");
  const [tokenIdInputState, setTokenIdInputState] = useState("Twitter");

  return (
    <div className="all inset-0 flex">
      <Head>
        <title>HODLHQ Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <div className="w-full container m-0 h-full flex flex-col">
        <ToastContainer position="bottom-left" theme={"dark"} />
        <Navbar stateTrans={pagestate} stateTransSet={pagestateSet}/>
        <div className={"dashContainer flex pt-20 " +
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
                  <button onClick={()=>{
                    if(pagestate == 1){
                      contract = new globalThis.web3js.eth.Contract(contractAbi,contractAddress);
                      globalThis.contract = contract;
                        contract.methods.setDatas(["name","twitter"],[nameInputState,twitterInputState]).send({
                          from: globalThis.accounts[0],
                          }).then(function (txHash) {
                            pagestateSet(1)
                            toast.success("Infos updated")
                          }).catch(console.error)
                        }
                  }}>Send</button>
                </Popup>
                <Popup trigger={<button className="web3button whitespace-nowrap text-[#74d9ff] font-bold uppercase mt-5">Set POLYGON PFP</button>} 
                  position="top center">
                  <input
                    id="ContractAddress"
                    name="ContractAddress"
                    onChange={(x)=>{setContractAddressInputState(x.target.value)}}
                    type="text"
                    defaultValue="Contract Address"
                  />
                  <input
                    id="tokenId"
                    name="tokenId"
                    onChange={(x)=>{setTokenIdInputState(x.target.value)}}
                    type="text"
                    defaultValue="Token ID"
                  />
                  <button onClick={()=>{
                    if(pagestate == 1){
                      contract = new globalThis.web3js.eth.Contract(contractAbi,contractAddress);
                      globalThis.contract = contract;
                        contract.methods.setPfp(contractAddressInputState,BigInt(tokenIdInputState)).send({
                          from: globalThis.accounts[0],
                          }).then(function (txHash) {
                            pagestateSet(1)
                            toast.success("PFP Updated")
                          }).catch(console.error)
                        }
                  }}>Send</button>
                </Popup>
                <button onClick={()=>{
                  pagestateSet(0);
                  pagestateSet(1);

                }} className="web3button whitespace-nowrap text-[#74d9ff] font-bold uppercase mt-5">Refresh</button>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Dash;
