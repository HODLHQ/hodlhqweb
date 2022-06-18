import Head from "next/head";
import Navbar from "components/Navbar";
import TestImage from "public/testimage.png"
import Image from "next/image";
import {useState, useEffect} from "react";
import Web3 from "web3";
import {changeToMatic} from "components/WeBrew3/ChangeNetwork.js";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
  
let name = "No name";
let twitter = "No twitter";
let pfp = "No pfp"
let pfpURL = ""
let ogid = "Not OG"
const Dash = () => {
  let a = 5;
  let contractAbi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
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
      "inputs": [
        {
          "internalType": "string",
          "name": "key",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "value",
          "type": "bool"
        }
      ],
      "name": "approveKey",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "approvedKeys",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "controllers",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "data",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
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
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "pfpsContracts",
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
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "pfpsIds",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "pfpsUris",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
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
          "name": "addy",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "value",
          "type": "bool"
        }
      ],
      "name": "setController",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "key",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "value",
          "type": "string"
        }
      ],
      "name": "setData",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string[]",
          "name": "keys",
          "type": "string[]"
        },
        {
          "internalType": "string[]",
          "name": "values",
          "type": "string[]"
        }
      ],
      "name": "setDatas",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "cont",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "setPfp",
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
  let contractAddress = "0x1de7F37D5B82e9166Aeca702871FEac1D727700E";
  let polyWeb3;
  let contract;


  const [contentState, setContentState] = useState("");



  if(pagestate == 1){
    changeToMatic().then(()=>{
      contract = new globalThis.web3js.eth.Contract(contractAbi,contractAddress);
      globalThis.contract = contract;
      contract.methods.data(globalThis.accounts[0],"name").call().then((x)=>{
        name=x+"";
        
        contract.methods.data(globalThis.accounts[0],"twitter").call().then((x)=>{
          twitter=x+""
          contract.methods.pfpsContracts(globalThis.accounts[0]).call().then((x)=>{
            contract.methods.pfpsIds(globalThis.accounts[0]).call().then((x2)=>{
              pfp=x+"/"+x2;
              contract.methods.pfpsUris(globalThis.accounts[0]).call().then((x3)=>{
                if(x3 != ""){
                  fetch(x3)
                  .then((response) => response.json())
                  .then((responseJson) => {
                    if(contentState != name+twitter+pfp) setContentState(name+twitter+pfp);
                    pfpURL = "https://ipfs.io/ipfs/"+responseJson.image.split('/').pop();
                  })
                  .catch((error) => {
                    console.error(error);
                  });
                }else{
                  if(contentState != name+twitter+pfp) setContentState(name+twitter+pfp);
                }
                
                 
              
              })
            })
          })
        })
      })
    });
  }

  const [nameInputState, setNameInputState] = useState("Name");
  const [twitterInputState, setTwitterInputState] = useState("Twitter");
  const [contractAddressInputState, setContractAddressInputState] = useState("Name");
  const [tokenIdInputState, setTokenIdInputState] = useState("Twitter");
  useEffect(()=>{
    
  },[pagestate])
  return (
    <div className="all fixed inset-0 flex">
      <Head>
        <title>HODLHQ Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <div className="w-full container m-0 h-full flex flex-col">
 
        <Navbar stateTrans={pagestate} stateTransSet={pagestateSet}/>
        <div className="dashContainer flex pt-20 pl-20">
            <div className="h-[30vw] w-[30vw] bg-[#18abe3] mr-10 relative" style={{borderRadius: "25px",border: "#18abe3 solid 10px"}}><Image src={pfpURL == "" ? TestImage : pfpURL} style={{borderRadius: "20px"}} layout="fill" objectFit="cover"/></div>
            <div className="flex flex-col">
                <div>
                    <button className="label">Name ↺</button>
                    <div className="value">{name}</div>
                </div>
                <div className="mt-10">
                    <div className="label">Twitter ↺</div>
                    <div className="value">{twitter}</div>
                </div>
                <div className="mt-10">
                    <div className="label">PFP ↺</div>
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
                            setContentState("reload\n")
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
                            setContentState("reload\n")
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
