import Image from "next/image";
import Logo from "public/logo.png";
import twitterLogo from "public/icons/twitter.png";
import discordLogo from "public/icons/discord.png";
import instagramLogo from "public/icons/instagram.png";
import ConnectButton from "components/WeBrew3/ConnectButton";
import {useState, useEffect} from "react";

const HeaderNav = () => {
  const [innerHeight, setInnerHeight] = useState(0);
  const [innerWidth, setInnerWidth] = useState(globalThis.innerWidth);
  let socialIconClass = innerHeight > innerWidth ? "mt-4 w-7" : "mt-4 w-10"
  useEffect(() => {
    setInnerWidth(globalThis.innerWidth);
    setInnerHeight(globalThis.innerHeight);
    window.addEventListener('resize', () => {   
      setInnerHeight(globalThis.innerHeight);
      setInnerWidth(globalThis.innerWidth);
    })
  },[])
  let mobile = innerHeight > innerWidth;
  return (
    <div className={"flex justify-between items-center "+(innerHeight > innerWidth ? "flex-wrap pb-20" : "")}>
      <a href="../" className="mt-4 w-20">
        <Image src={Logo} layout="" objectFit="contain" />
      </a>
      
      <div className={"flex text-[#74d9ff] font-bold uppercase items-center space-x-5 " + (innerHeight > innerWidth ? "ml-1" : "ml-5")}>
      <a href="https://twitter.com/HODLHQ" target="_blank" className={socialIconClass}><Image src={twitterLogo} layout="" objectFit="contain"/></a>
      <a href="https://discord.gg/hodlhq" target="_blank" className={socialIconClass}><Image src={discordLogo} layout="" objectFit="contain" /></a>
      <a href="https://www.instagram.com/hodlhq/" target="_blank" className={socialIconClass}><Image src={instagramLogo} layout="" objectFit="contain" /></a>
      </div>
      <div className={"w-[200px] h-full relative flex items-center justify-start " + (mobile ? "" : "hidden")}><div className="ml-7 absolute"><ConnectButton/></div></div>
      <div className={"flex-1 flex text-[#74d9ff] font-bold uppercase items-center justify-end space-x-10 " + (mobile ? "text-[10px] justify-center" : "")}>
        <a href="/gallery">Gallery</a>
        <div className="text-[#AAA]">Vault</div>
        <a target="_blank" href="https://hodlhq.io">Shop</a>
        <div>OGs</div>
        <div className="dropdown">
        {mobile ? <a href="/collections">Collections</a> : <a>Collections</a>}
          <div className="dropdown-content">
              <a target="_blank" href="https://coolxclones.xyz">COOL X CLONES</a><br/>
              <a target="_blank" href="https://market.decentraland.org/accounts/0x6005cdca3e6aef6aa9ff5a6301b09c770aa55783?assetType=item&section=wearables">DIAMOND WEARABLE</a><br/>
              <a target="_blank" href="https://opensea.io/collection/podmarket">POD MARKET</a><br/>
              <a target="_blank" href="https://juicecrewnft.com">JUICE CREW</a><br/>
          </div>
        </div>
        {/*<div>Dashboard</div>*/}
      </div>
      <div className={"w-[220px] h-full relative flex items-center justify-start " + (mobile ? "hidden" : "")}><div className="ml-7 absolute"><ConnectButton/></div></div>
    </div>
  );
};

export default HeaderNav;
