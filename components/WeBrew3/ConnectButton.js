import {useState, useEffect, Component} from "react";
import Web3 from "web3";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";
class ConnectButton extends Component {
  constructor(props) {
    super(props);
    this.connectText = "CONNECT WALLET"
    //this.setConnection = this.setConnection.bind(this);
    this.state = {connection: 0}
    this.Disconnect = this.Disconnect.bind(this);
    this.Connect = this.Connect.bind(this);
  }

  async Connect() {
    if(typeof globalThis.ethereum !== "undefined"){
      if (globalThis.web3 !== "undefined") {
        await globalThis.ethereum.enable()
        globalThis.web3js = new Web3(globalThis.web3.currentProvider);
        let chainId = await globalThis.web3js.eth.net.getId()
        
        if (chainId == -1) {
          alert("Please use polygon");
        } else {
          let accounts = await globalThis.web3js.eth.getAccounts();
          this.connectText = "DISCONNECT"
          toast.success("Connected")
          if(this.props.stateTrans != undefined ) this.props.stateTransSet(1);
          globalThis.accounts = accounts;
          globalThis.accounts.push(globalThis.ethereum.selectedAddress)
        }
      } else {
        alert("Please install Metamask and use polygon");
      }
    }
    else{
      //error
    }
  }
  
  Disconnect(){
    toast.info("Disconnected")
    this.connectText = "CONNECT WALLET"
    globalThis.web3js = undefined;
    if(this.props.stateTrans != undefined ) this.props.stateTransSet(0);
  }
  render(){
    
    let props = this.props
    let connectText = this.props.stateTrans == 0 ? "CONNECT WALLET" : "DISCONNECT"

    return(
      <div className="dropdown">
          <div>
        <ToastContainer position="bottom-left" theme={"dark"} />
        <button className="web3button whitespace-nowrap text-[#74d9ff] font-bold uppercase" onClick={this.props.stateTrans == 0 ? this.Connect : this.Disconnect}>{connectText}</button>
        </div>   
        {this.connectText == "DISCONNECT" ? 
        <div className={"dropdown-content min-w-[120px] ml-0"}>
             <Link href="/dashboard">
              DASHBOARD
            </Link>
            <br />
          </div> : <></>}
        </div>
    )
  }
  componentDidUpdate(prevProps, prevState) {
    
    if(this.props.stateTrans != undefined && this.props.stateTrans !== prevProps.stateTrans ){
      // if( !== this.props.stateTrans){
        this.props.stateTransSet(this.props.stateTrans);
        console.log(this.props.stateTrans)
      // }
    }
  }
 
  componentDidMount() {
    if(typeof globalThis.ethereum !== "undefined"){
      if (this.props.stateTrans == 0 && globalThis.web3 !== "undefined" && globalThis.ethereum.selectedAddress != null && globalThis.ethereum.selectedAddress != "" && globalThis.ethereum.selectedAddress != undefined) {
        globalThis.web3js = new Web3(globalThis.web3.currentProvider);
        globalThis.web3js.eth.getAccounts().then((x)=>{
          this.connectText = "DISCONNECT"
          globalThis.accounts = x;
          globalThis.accounts.push(globalThis.ethereum.selectedAddress)
          this.props.stateTransSet(1);
        });
      }
    }
  }
 }

export default ConnectButton;