import Image from "next/image";
import Team from "public/team.png";
import {useState, useEffect, useCallback} from "react";

const Persos = () => {
  const [innerSize, setInnerSize] = useState([0,0]);
    
    const setScreenLengths = useCallback(() => {
        setInnerSize([globalThis.innerHeight,globalThis.innerWidth]);
    }, [])
    
   
    useEffect(() => {
      window.addEventListener("resize", setScreenLengths);
      setScreenLengths()
      return () => {
        window.removeEventListener("resize", setScreenLengths)
      };
    }, []);
  let mobile = 1134 > innerSize[1] || innerSize[0] > innerSize[1];
  return (
    <div className={`z-20 ${mobile ? "w-[300vw] fixed" : "w-11/12"} m-auto flex-1 flex justify-center items-end`} style={mobile ? {
      bottom:0,
      left: "-113vw"
     } : {}}>
      <img src={"team.png"} className={(mobile ? "w-full h-auto" : "w-full h-auto")}></img>
    </div>
  );
};

export default Persos;
