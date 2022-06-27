import {useState, useEffect, Component} from "react";
import Web3 from "web3";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const NFTCard = (props) => {
    console.log(props.height)
    let heightT = props.height !== undefined ? props.height : "30";
    console.log( heightT)
    return(
    <div className={`flex flex-col bg-[#18abe3] pb-2 mb-5 mr-2 ml-2 relative items-center rounded-[20px]`} style={{
        height: heightT+"vh",
        border: "4px solid #ffffff"
    }}>
        <div className="h-[60%] mt-3 mb-2 ml-3 mr-3">
            <a href={props.link}  target="_blank"
          rel="noreferrer"><img src={props.content} className="h-[100%] w-auto rounded-[13px]"></img></a>
        </div>
        <div style={{fontSize:  0.07* parseInt(heightT) +"vh"}} className={"value mr-2 ml-2"}>{props.name}</div>
        <div style={{fontSize:  0.07* parseInt(heightT) +"vh"}} className={"value mr-2 ml-2 mb-2"}>{props.creator}</div>
    </div>
    )
 }  

export default NFTCard;