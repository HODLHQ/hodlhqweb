import {useState, useEffect} from "react";

const Bg = (props) => {
  const [innerHeight, setInnerHeight] = useState(0);
  const [innerWidth, setInnerWidth] = useState(0);
  useEffect(() => {
    setInnerHeight(globalThis.innerHeight);
    setInnerWidth(globalThis.innerWidth);
    window.addEventListener('resize', () => {   
      setInnerHeight(globalThis.innerHeight);
      setInnerWidth(globalThis.innerWidth);
    })
  },[])
  return (
    <div
      className="-z-10 fixed inset-0 font-bold flex text-[#fff] opacity-50 justify-center items-center mb-[20vh] hover:text-[#0295cd]"
      style={{
        fontSize: innerHeight > innerWidth ? "10vw" : "25vh",
      }}
    >
      HODLHQ.ETH
    </div>
  );
};

export default Bg;
