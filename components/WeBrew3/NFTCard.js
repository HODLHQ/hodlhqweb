import {useState, useEffect, Component} from "react";
import Web3 from "web3";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const NFTCard = (props) => {
    console.log(props.height)
    let heightT = props.height !== undefined ? "30vh" : "40vh";
    console.log( heightT)
    return(
    <div className={`flex flex-col bg-[#18abe3] mb-5 mr-2 ml-2 relative items-center rounded-[20px]`} style={{
        height: heightT
    }}>
        <div className="h-[60%] mt-5 mb-2 ml-5 mr-5">
            <a href={props.link}><img src={props.content} className="h-[100%] rounded-[13px]"></img></a>
        </div>
        <div className="value text-[80%] mr-3 ml-3">{props.name}</div>
        <div className="value text-[80%] mr-3 ml-3 mb-2">{props.creator}</div>
    </div>
    )
 }  

export default NFTCard;