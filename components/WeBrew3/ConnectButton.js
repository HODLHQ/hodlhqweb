import {useState, useEffect} from "react";
import Web3 from "web3";

const ConnectButton = () => {
    const [connectionState, setConnection] = useState(-1);
    let connectText = connectionState == 0 ? "CONNECT WALLET" : "DISCONNECT"
    useEffect(()=>{
      window.addEventListener('load', (event) => {
        let state = 0;
      if (globalThis.web3 !== "undefined" && globalThis.ethereum.isConnected()) {
        globalThis.web3js = new Web3(globalThis.web3.currentProvider);
          globalThis.web3js.eth.getAccounts().then((x)=>{
          

          connectText = "DISCONNECT"
          globalThis.accounts = x;
          state = 1
          setConnection(1);
        });
        
      }
      });
    },[])
    const Connect = async () => {
      if (globalThis.web3 !== "undefined") {
        await globalThis.ethereum.enable()
        globalThis.web3js = new Web3(globalThis.web3.currentProvider);
        let chainId = await globalThis.web3js.eth.net.getId()
        if (chainId == -1) {
          alert("Please use polygon");
        } else {
          let accounts = await globalThis.web3js.eth.getAccounts();
          connectText = "DISCONNECT"
          setConnection(1)
          globalThis.accounts = accounts;
        }
      } else {
        alert("Please install Metamask and use polygon");
      }
    }
    
    const Disconnect = () => {
      connectText = "CONNECT WALLET"
      globalThis.web3js = undefined;
      setConnection(0)
    }
    
    return(
        <button className="web3button whitespace-nowrap text-[#74d9ff] font-bold uppercase" onClick={connectionState == 0 ? Connect : Disconnect}>{connectText}</button>
    )

}

export default ConnectButton;