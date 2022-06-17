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
let ogid = "Not OG"
const Dash = () => {
  let a = 5;
  let contractAbi = [
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
    }
  ]
  const [pagestate, pagestateSet] = useState(0);
  let contractAddress = "0x6b0A49F799D7F1534227EF9AEb2DaAaC821FEAB1";
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
              pfp=x+x2+"";
              if(contentState != name+twitter+pfp) setContentState(name+twitter+pfp); 
            })
          })
        })
      })
    });
  }

  const [nameInputState, setNameInputState] = useState("");

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
            <div className="h-[30vw] w-[30vw] bg-[#18abe3] mr-10" style={{borderRadius: "25px",border: "#18abe3 solid 10px"}}><Image src={TestImage} style={{borderRadius: "20px"}} layout="" objectFit="contain"/></div>
            <div className="flex flex-col">
                <div>
                <Popup trigger={<button className="label">Name ↺</button>} 
     position="right center">
      <input
        id="name"
        name="nameInput"
        onChange={(x)=>{setNameInputState(x.target.value)}}
        type="text"
      />
      <button onClick={()=>{
        if(pagestate == 1){
          contract = new globalThis.web3js.eth.Contract(contractAbi,contractAddress);
          globalThis.contract = contract;

            contract.methods.setData("name",nameInputState).send({
              from: globalThis.accounts[0],
              }).then(function (txHash) {
                setContentState("reload\n")
              }).catch(console.error)

        }
      }}>Send</button>
    </Popup>
                    
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
            </div>
        </div>

      </div>
    </div>
  );
};

export default Dash;
