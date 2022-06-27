import Image from "next/image";
import Logo from "public/logo.png";
import twitterLogo from "public/icons/twitter.png";
import discordLogo from "public/icons/discord.png";
import instagramLogo from "public/icons/instagram.png";
import ConnectButton from "components/WeBrew3/ConnectButton";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const HeaderNav = (props) => {
  const [innerHeight, setInnerHeight] = useState(0);
  const [innerWidth, setInnerWidth] = useState(0);
  let socialIconClass = innerHeight > innerWidth ? "h-7 w-7" : "h-10 w-10";
console.log(innerHeight,innerWidth)
  const setScreenLengths = useCallback(() => {
      setInnerHeight(globalThis.innerHeight);
      setInnerWidth(globalThis.innerWidth);
  }, [])

  useEffect(() => {
    window.addEventListener("resize", setScreenLengths);
    setInnerHeight(globalThis.innerHeight);
      setInnerWidth(globalThis.innerWidth);
    return () => {
      window.removeEventListener("resize", setScreenLengths)
    };
  }, []);
  let mobile = 1134 > innerWidth || innerHeight > innerWidth;
  return (
    <div
      className={
        "flex h-24 justify-between items-center " +
        (mobile ? "flex-wrap pb-0 mb-20 mt-5" : "")
      }
    >
      <a href="../" className={"w-20 " + (mobile ? "" : "")}>
        <Image src={Logo} layout="" objectFit="contain" />
      </a>
      <div
        className={
          "w-[200px] relative flex items-center justify-center mr-5 " +
          (mobile ? "" : "hidden")
        }
      >
        <div className="ml-7 absolute">
          <ConnectButton
            stateTrans={props.stateTrans}
            stateTransSet={props.stateTransSet}
          />
        </div>
      </div>
      
      <div
        className={
          "flex text-[#74d9ff] font-bold uppercase justify-center items-center space-x-5 " +
          (mobile ? "ml-1 flex-1 mt-1" : "ml-5")
        }
      >
        <a
          href="https://twitter.com/HODLHQ"
          target="_blank"
          rel="noreferrer"
          className={socialIconClass}
        >
          <Image src={twitterLogo} layout="" objectFit="contain" />
        </a>
        <a
          href="https://discord.gg/hodlhq"
          target="_blank"
          rel="noreferrer"
          className={socialIconClass}
        >
          <Image src={discordLogo} layout="" objectFit="contain" />
        </a>
        <a
          href="https://www.instagram.com/hodlhq/"
          target="_blank"
          rel="noreferrer"
          className={socialIconClass}
        >
          <Image src={instagramLogo} layout="" objectFit="contain" />
        </a>
      </div>

      <div className={mobile ? "basis-full h-0" : "hidden"}></div>
      <div
        className={
          "flex-1 flex text-[#74d9ff] font-bold uppercase items-center justify-end space-x-[2vw] " +
          (mobile
            ? "text-[15px] justify-around flex-wrap h-[15vh] ml-10 mr-10 space-x-5"
            : "")
        }
      >

        <div className="dropdown">
          <a>Collections</a>    
          <div className={"dropdown-content "  +
        (mobile ? "" : "")}>
            <a target="_blank" rel="noreferrer" href="https://coolxclones.xyz">
              COOL X CLONES
            </a>
            <br />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://market.decentraland.org/accounts/0x6005cdca3e6aef6aa9ff5a6301b09c770aa55783?assetType=item&section=wearables"
            >
              DIAMOND WEARABLE
            </a>
            <br />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://opensea.io/collection/podmarket"
            >
              POD MARKET
            </a>
            <br />
            <a target="_blank" rel="noreferrer" href="https://juicecrewnft.com">
              JUICE CREW
            </a>
            <br />
          </div>
        </div>
        <a target="_blank" rel="noreferrer" href="https://hodlhq.io">
          Shop
        </a>
        <Link href="/vault">Vault</Link>
        <Link href="/ogs">OGs</Link>
        <Link href="/guild">Guilds</Link>
        <div className="dropdown">
          <a>Metaverse</a>    
          <div className="dropdown-content">
            <a target="_blank" rel="noreferrer" href="https://play.decentraland.org/?realm=dg&position=149%2C-72&island=I1w67w">
              Decentraland
            </a>
            <br />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://oncyber.io/hodlhqvault"
            >
              OnCyber
            </a>
            <br />
            <a
              target="_blank"
              rel="noreferrer"
              className="text-[#AAA]"
            >
              Minecraft
            </a>
          </div>
        </div>
        <Link href="/gallery">Gallery</Link>
        <Link href="/dashboard">Dashboard</Link>
        {/*<div>Dashboard</div>*/}
      </div>
      <div
        className={
          "w-[220px] h-full relative flex items-center justify-end mr-10 " +
          (mobile ? "hidden" : "")
        }
      >
        <div className="ml-7 absolute">
          <ConnectButton
            stateTrans={props.stateTrans}
            stateTransSet={props.stateTransSet}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
