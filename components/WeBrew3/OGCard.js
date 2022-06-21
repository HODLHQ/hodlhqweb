import {useState, useEffect, Component} from "react";
import Web3 from "web3";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import contractAbi from "public/Abis/Dashboard.json"
const contractAddress = "0xf9e67C8AA7E08B8872e0C28CB403a29Db27e9864";
let name = "";
let pfp = "";
const OGCard = (props) => {
    const [pagestate, pagestateSet] = useState(["",""]);
    let size = props.size !== undefined ? props.size : "50";
    const web3I = new Web3(new Web3.providers.HttpProvider('https://rpc-mainnet.maticvigil.com/v1/6cdc25ca4b20d50823b5fc4a37b6d4029d941956'));
    const contract = new web3I.eth.Contract(contractAbi,contractAddress);
    useEffect(()=>{
        contract.methods.OGs(props.id).call().then((x2)=>{
        contract.methods.data(x2,"name").call().then((x)=>{
            name=x+"";
            contract.methods.data(x2,"pfp").call().then((x3)=>{
                if(x3 != "" && x3 != "Pfp Ipfs Cid") pfp = "https://ipfs.io/ipfs/"+ (x3);
                pagestateSet([name,pfp])
            })
        })
    })
    },[])
    return(
    <div className={`flex flex-col bg-[#18abe3] pb-2 mb-5 mr-2 ml-2 relative items-center rounded-[20px]`} style={{
        height: size+"vh",
        width: size+"vh",
        border: "4px solid #ffffff"
    }}>
        <div className="h-[80%] mt-3 mb-2 ml-3 mr-3">
            <a href={"og/"+name}  target="_blank"
          rel="noreferrer"><img src={pfp} className="h-[100%] rounded-[13px]"></img></a>
        </div>
        <div style={{fontSize:  0.07* parseInt(size) +"vh"}} className={"value mr-2 ml-2"}>{name}</div>
    </div>
    )
 }  

export default OGCard;