import Head from "next/head";
import Navbar from "components/Navbar";
import Image from "next/image";
import {useState, useEffect, useCallback} from "react";
import Link from "next/link";
import OGCard from "components/WeBrew3/OGCard";
import NFTCard from "components/WeBrew3/NFTCard";
const OGs = (props) => {
    const [pagestate, pagestateSet] = useState(0);
    const [innerSize, setInnerSize] = useState([0,0]);
    
    const setScreenLengths = useCallback(() => {
        setInnerSize([globalThis.innerHeight,globalThis.innerWidth]);
    }, [])
    let mobile = 1134 > innerSize[1] || innerSize[0] > innerSize[1];
    console.log(mobile)
    useEffect(() => {
      window.addEventListener("resize", setScreenLengths);
      setScreenLengths()
      return () => {
        window.removeEventListener("resize", setScreenLengths)
      };
    }, []);
    let imageCard = "h-[30vh] pr-10 mb-10"
    let imageWidth = "100%"
    let imageClass = "rounded-[25px] imageGallery"
    let titleStyle = "titleC mr-3 ml-3 mb-3"
    let heightCard = "30"
    console.log("render")
  return (
    <div className="all flex min-h-[100vh] w-full inset-0 ">
      <Head>
        <title>HODLHQ Gallery</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <div className="w-full container m-0 flex flex-col">
        <Navbar stateTrans={pagestate} stateTransSet={pagestateSet} />
            <div className={"flex justify-start flex-wrap mb-10 mt-5 " + (mobile ? "mr-3 ml-5" : "ml-10 mr-10")}>
            <div className={titleStyle+" mb-5 text-[30px]"}>OGs</div>
            <div className="basis-full"></div>
            <div className={"flex justify-evenlty " + (mobile ? "mb-5" : "mb-[15vh]")}>
              <div className={titleStyle+" text-[10px]"}>OG&apos;s are members of the web3 community that took it upon themselves to support the HQ and those within it.<br/> Currently you can only get this rank by buying our 1 of 100 DCL hat that comes with a physical version,<br/> or by earning it by buidling!</div>
              <div className="relative ml-10">
                <div className={(mobile ? "h-[15vh] w-[15vh]" : "absolute h-[20vh] w-[20vh]") } style={{
                  top: "-80%",
                }}>
                  <NFTCard 
                  content="https://lh3.googleusercontent.com/nXUYIPNgw5GOIwlJAPi9-BwyMlc820Z8b6BISXdld-nvgGO2E6mrsLoVdKRfmuiad-wz02RPo9SpDY2bYcphBbjJLOP9h0a2q2B8qA=w600"
                  link="https://market.decentraland.org/contracts/0x9cd35964358247217339be23110d9f676dfb496c/items/0"
                  creator="HODLHQ"
                  name="OGCap"
                  height={mobile ? "15" : "20"}
                  />
                </div>
              </div>
            </div>
            <div className="basis-full"></div>
            <OGCard 
            id={1}
            name={"HODLCEO"}
            image={"https://lh3.googleusercontent.com/pWO8zb9vbAiEzXbVPnmKs6jFxDkdFJjvYMbhvqsTDId4limIUL4PWNUYRoM-BAEGrY3cdORMaS7Cm31cwWgNN38O8TsEYVeZDKpvBg=w600"}
            size={mobile ? "20" : "30"}
            />
            <OGCard 
            id={2}
            name={"ArmenTsatou"}
            image={"https://lh3.googleusercontent.com/FK38wYeHbIrql79VCVsuIe6qUJ90nNX2Pl39smU2pfi1G6wGIwqQy2aQSWDSASFKHz7PJ2c9s9Z6hffoZOoZ3icULCZQeCrcoZ-zylU=w600"}
            size={mobile ? "20" : "30"}
            />
            <OGCard 
            id={3}
            name={"MetaGing"}
            image={"https://lh3.googleusercontent.com/ftk-IDBr7WfAu-jBoG58dSn_DijuECvqihDmApcgCSOaJkVyC6aeDjikLMKQ1JpUu2kA5e_OOlwjzXF8UuU8Lwlm2aihi3jx_CyNgw=w600"}
            size={mobile ? "20" : "30"}
            />
            <OGCard 
            id={4}
            name={"BigMouth"}
            image={"https://pbs.twimg.com/profile_images/1514623036045017106/YLoOStsz_400x400.jpg"}
            size={mobile ? "20" : "30"}
            />
            <OGCard 
            id={5}
            name={"MichiTodd"}
            image={"https://lh3.googleusercontent.com/ndkdLyq68Ol1WE-E_tJ0aqDjyqtULWWK7BhSA0PqGK1vR4C6BYB79iT6d2NpCt9muI8JOdGQWPb407fmjt39zO21xpsj4mghOaeLrm4=w600"}
            size={mobile ? "20" : "30"}
            />
            <OGCard 
            id={6}
            name={"Adam"}
            image={"https://lh3.googleusercontent.com/MS1ZC5SETGLHJGqhdmfaNKw1YuK-MghxZFuwcsJH4g9YGn_I95XVcjGLMajqUN-IapuZ9Gb_hBCHKau7BT5shVMsyj-ksWcMQVi5X4c=w600"}
            size={mobile ? "20" : "30"}
            />
            <OGCard 
            id={7}
            name={"DewmOne"}
            image={"https://lh3.googleusercontent.com/HVERBiSU3yFKu-LMROwmp95rv-oM44hqjaQrMpgbDmFQQjfVv-X6ZHB4dTRBB77jTsmbRBGtkiZ6Xm8oJuJELqopx1fGHB3N6p1Iag=w600"}
            size={mobile ? "20" : "30"}
            />
            <OGCard 
            id={8}
            name={"xCryptoBro"}
            image={"https://lh3.googleusercontent.com/cWGbocYHsGMyHwSTd8qxnwAqJtsi8JVIU_lgadWbgrGRoClgqpstPsDCTRDKtLsub1Yi1RqyLCfhuJotyovQG1Ku2MdZWka5S7aStA=w600"}
            size={mobile ? "20" : "30"}
            />
            <OGCard 
            id={9}
            name={"Shadow_weave"}
            image={"https://lh3.googleusercontent.com/i0Cyfmc3Hn2M0SjPch7p8V6EIeSNQXkUDUwLF3RDjlZ_Ahkmd6G8VIheMHbaglFjgioDr3NHxflKNOfkQVqmP2-p6wy2QaG4g2CozX8=w600"}
            size={mobile ? "20" : "30"}
            />
            <OGCard 
            id={10}
            name={"TayVP"}
            image={"https://lh3.googleusercontent.com/bK4gAbKMzfCVd82QA9squBRDyD7v-h74z_C1NZOHVbLQFQj2vs7ustd8JIrpHK4jmdiOW9p_NHFbiuX7jwL2994PtQzpG5EpHBjlcME=w600"}
            size={mobile ? "20" : "30"}
            />
            <OGCard 
            id={11}
            name={"0xCryptonian"}
            image={"https://lh3.googleusercontent.com/zRjhdbUedm1tXOZo1Jmiz_IF3d5uqvrDc2h4s2e0Ra3S8h4vHqkH3oQ380lu3yVb7hEF7UcLb2FsPuBp6l6PX9gmkNw0gdPm0KmpEnY=w600"}
            size={mobile ? "20" : "30"}
            />
            <OGCard 
            id={12}
            name={"Artfigure"}
            image={"https://lh3.googleusercontent.com/fs7PV_LuFfLNe50o-pnkwZMKXj1I5WbyaxuUtbGj8r1sH5bsnsq2CzUV-kKGP5c0EIZ2f4FkpTg2y4UsLXKfiuG0gKJAajR8DLqUeQ=w600"}
            size={mobile ? "20" : "30"}
            />
            <OGCard 
            id={13}
            name={"Tcvdh"}
            image={"https://lh3.googleusercontent.com/oRv-A3iFd4kiWkuI2qSEX4z6CeL5PlQ_kQqURAvDcKKSd9NvIeHxF8alzbDOsyAFu2N2EMM1mfhXA2vemafdJ2HslmOHsop6MDfIltw=w600"}
            size={mobile ? "20" : "30"}
            />
            <OGCard 
            id={14}
            image={"https://lh3.googleusercontent.com/i59Y1L4Oj1nHWJPrhR9_PkCUKWKVkvnCE8p6ezvJ8Zo4nBrkL5Y5hnTEt2QOSRqUlrHGqFFeKDRqvZlYwdiAvbvmyksBBWMv9q_UUA=w600"}
            size={mobile ? "20" : "30"}
            />
            <OGCard 
            id={15}
            link={"og/Boboch"}
            image={"https://lh3.googleusercontent.com/1PcB8LylzLqq59oq3p0y6UDTX8wIOeDDIOF3AB6_Z0pJkLlrNwEr7c52rdvgQ8ZgPWsRG4t97ECjz4TzBDgmAlODpzVmYQFHZ1IMiSM=w600"}
            size={mobile ? "20" : "30"}
            />
            <OGCard 
            id={16}
            name={"DreamDCL"}
            image={"https://lh3.googleusercontent.com/aN45UYTibCySoVTnBFS5XsoCxD7pwSrVArIUQGC6aOVwnBRwnZxAIHGBM2pkbfVydwGV6sG0nIbYQ_k3ImHACv58BEovcFbayUPW=w600"}
            size={mobile ? "20" : "30"}
            />
        </div>
      </div>
    </div>
  );
};

export default OGs;
