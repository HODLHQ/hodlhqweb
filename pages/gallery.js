import Head from "next/head";
import Navbar from "components/Navbar";
import Image from "next/image";
import {useState, useEffect} from "react";
const Gallery = (props) => {
    const [pagestate, pagestateSet] = useState(0);
    let imageCard = "h-[30vh] pr-10 mb-10"
    let imageWidth = "100%"
    let imageClass = "rounded-[25px] imageGallery"
  return (
    <div className="all flex w-full inset-0 ">
      <Head>
        <title>HODLHQ Gallery</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <div className="w-full container m-0 flex flex-col">
        <Navbar stateTrans={pagestate} stateTransSet={pagestateSet} />
        <div className="flex justify-around flex-wrap m-10 ">
            <div className={imageCard}>
                <img src={"gallery/0.gif"} className={imageClass} height="100%" layout=""  />
            </div>
            <div className={imageCard}>
                <img src={"gallery/1.gif"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/2.png"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/3.png"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/4.png"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/5.png"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/6.png"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/7.png"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/8.png"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/9.png"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/10.png"} className={imageClass} height="100%" layout=""  />
            </div>
            <div className={imageCard}>
                <img src={"gallery/11.gif"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/12.png"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/13.png"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/14.png"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/15.png"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/16.png"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/17.png"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/18.png"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/19.png"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/20.png"} className={imageClass} height="100%" layout=""  />
            </div>
            <div className={imageCard}>
                <img src={"gallery/21.png"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/22.png"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/23.png"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/24.png"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/25.png"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/26.png"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/27.png"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/28.png"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/29.png"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/30.png"} className={imageClass} height="100%" layout=""  />
            </div>
            <div className={imageCard}>
                <img src={"gallery/31.gif"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/32.png"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/33.png"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/34.png"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/35.png"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/36.png"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/37.png"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/38.jpg"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/39.jpg"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/40.jpeg"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/41.png"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/42.png"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/43.png"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/44.jpg"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/45.png"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/46.jpg"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/47.jpg"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/48.jpg"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/49.jpg"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/50.jpg"} className={imageClass} height="100%" layout="" />
            </div>
            <div className={imageCard}>
                <img src={"gallery/51.jpg"} className={imageClass} height="100%" layout="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
