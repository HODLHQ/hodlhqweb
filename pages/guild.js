import Head from "next/head";
import Navbar from "components/Navbar";
import Image from "next/image";
import {useState, useEffect, useCallback} from "react";
import Link from "next/link";
import NFTCard from "components/WeBrew3/NFTCard";
const Guild = (props) => {
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
    let titleStyle = "titleC text-[30px] mr-3 ml-3 mb-3"
    let heightCard = "25"
    
    console.log("render")
  return (
    <div className="all flex w-full min-h-[100vh] inset-0 ">
      <Head>
        <title>HODLHQ Gallery</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <div className="w-full container m-0 flex flex-col">
        <Navbar stateTrans={pagestate} stateTransSet={pagestateSet} />
        <div className={"flex justify-start flex-wrap mr-10 mb-10 mt-10 " +
        (mobile ? "ml-5" : "ml-10")}>
          
           <div className="basis-full"></div>
            <div className={titleStyle}>ICE Wearable</div><button onClick={()=>{window.open("https://docs.google.com/forms/d/e/1FAIpQLSdoTprwZGIRGBen1-i790QFZUZ1OIHYg5KfYfWzvLmdGXezmw/viewform", '_blank').focus();}} className="web3button whitespace-nowrap text-[#74d9ff] font-bold uppercase mb-5 ml-5">Request a delegation</button>
            <div className="basis-full"></div>
            <NFTCard 
            content="https://lh3.googleusercontent.com/OQb6qSMWx73mPCB6Zte68JKovm0weH91rPW_ZjRVVKF3luy843qYZlgglztLx72V3ghK3IjRg7I6YarcAdY_SXUsL5y-l71ut_VD=w600"
            link="https://opensea.io/assets/matic/0x451612c0e742e27f2cfb3888ad2813eec8dd1ba3/1158435208354129053677098304520374755507846049406040223797420752980"
            creator="Decentral Games"
            name="Joker Ruffle (ICE Level 2)"
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="https://lh3.googleusercontent.com/95SaZn_yC5dR6QN3aaKlU0-ZaFjCsQor6YnLoQemUIq_K2bLw-QKFLcJylXYQ8_ffDOraebN__gIlvBSqDz51jClxvezeqUQnuyiMA=w600"
            link="https://opensea.io/assets/matic/0x446c19903c267ae944eab6eca1f8603245be6b80/2106245833371143733958360553673408646377901908010982225086219550849"
            creator="Decentral Games"
            name="Hyron Shoes (ICE Level 1)"
            height={mobile ? heightCard : undefined}
            />
             <NFTCard 
            content="https://lh3.googleusercontent.com/R41CDvREZ5hPIG6zjzNwIDu5-0ANviGoocXdiAFTZ-h9i1cuiBB08i8xyoWU0mEaGiSQSdInUJ9w2GVBq2IlqUU3Dl5GjfXwxzeI=w600"
            link="https://opensea.io/assets/matic/0x451612c0e742e27f2cfb3888ad2813eec8dd1ba3/1158435208354129053677098304520374755507846049406040223797420752980"
            creator="Decentral Games"
            name="Boardies (ICE Level 1)"
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="https://lh3.googleusercontent.com/CJAiBj3h5m6C4_2r1Kh45-Wj665OFCmpHUyGS87vvkGa4cSpoa6KWiJ_zsrabxISvfNGjtWWREEER7aTiaebL_4T3RyZmupQmPFouw=w600"
            link="https://opensea.io/assets/matic/0x897243a54b03b46a17b55d5609465e9719a6ffa0/105312291668557186697918027683670432318895095400549111254310977580"
            creator="Decentral Games"
            name="Drip Shades (ICE Level 2)"
            height={mobile ? heightCard : undefined}
            />
            <div className="basis-full"></div>
            <div className={titleStyle}>Rovies</div><button onClick={()=>{window.open("https://docs.google.com/forms/d/e/1FAIpQLSdoTprwZGIRGBen1-i790QFZUZ1OIHYg5KfYfWzvLmdGXezmw/viewform", '_blank').focus();}} className="web3button whitespace-nowrap text-[#74d9ff] font-bold uppercase mb-5 ml-5">Request a delegation</button>
            <div className="basis-full"></div>
            <NFTCard 
            content="https://lh3.googleusercontent.com/YA0_OMF7i549gZLLlo59OylXV089pIXiQl2zD9hLnZD_OnHWQeYECLEeWYHgmCUftPVjuI9F0dflTtTZiC1cTABlqDBjHKy_LQrtnQ=w600"
            link="https://opensea.io/assets/matic/0xadd82df88f40bbc48f467413e9361e4969665237/241511"
            creator="Rovies"
            name="Rovi 80839 "
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="https://lh3.googleusercontent.com/o3iwGGgFBJDD9p6e8nnpmu7e3ZeWqTaOqHv2feLxbPvvrtcEWorEwNrJ7-3egVLSGbSDzSxcgHD-NmfAk7J5oRWn-K4fyrmQVeiBrg=w600"
            link="https://opensea.io/assets/matic/0xadd82df88f40bbc48f467413e9361e4969665237/194844"
            creator="Rovies"
            name="Rovi 20721 "
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="https://lh3.googleusercontent.com/rABKA6BBLgQjd42B-Tb9VAg1pbJ2PZMufP9LbWaxf8dro4YeA4iLSh_hkZphk6noRqxUXxqDcPHlnAfxM0ApTWqzYfywmUVHSME3=w600"
            link="https://opensea.io/assets/matic/0xadd82df88f40bbc48f467413e9361e4969665237/236601"
            creator="Rovies"
            name="Rovi 76593 "
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="https://lh3.googleusercontent.com/eWV8B9h-_3mGgCQtzMgqKSH_5NeJZ-iuQWEWN2ECAauKiu1YjTozFM6gQtNi1oVpEyPru5KLHoLtAzSD82hrN0RgJeT3gQON9u4Dbw=w600"
            link="https://opensea.io/assets/matic/0xadd82df88f40bbc48f467413e9361e4969665237/194714"
            creator="Rovies"
            name="Rovi 28713 "
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="https://lh3.googleusercontent.com/CKXGm6or-EQ6q-OJ96z21IFwhkpRJPNrN_2zRPc3kRhpPCcNJO3ZZeKfkrsc27O1IipCOpLTv1s2vxyTXE2jByhVWtWV5vVWxpk16Lc=w600"
            link="https://opensea.io/assets/matic/0xadd82df88f40bbc48f467413e9361e4969665237/236527"
            creator="Rovies"
            name="Rovi 03121"
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="https://lh3.googleusercontent.com/AJlbNwZCFljnX4T0Ng4gTTHnozydBDUc2In-hQhfPl70iQgfwvDvdMyu3lSKwQUQHxSqDASyQocVrILKjCzeldv7sneRoFATsOs5=w600"
            link="https://opensea.io/assets/matic/0xadd82df88f40bbc48f467413e9361e4969665237/194717"
            creator="Rovies"
            name="Rovi 79751 "
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="https://lh3.googleusercontent.com/Vg1Kg7i3Zx8IRxlGmkmvjAf3VRbFCgz6x8g7A-woRAwEh-4-Sp5GhwBHyFFlZW4_fLHZaVpBbsqWTwVZfOSpeSZj8Xmq01pmhW7EdA=w600"
            link="https://opensea.io/assets/matic/0xadd82df88f40bbc48f467413e9361e4969665237/241344"
            creator="Rovies"
            name="Rovi 63990 "
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="https://lh3.googleusercontent.com/j7dn9ylEwGhNaYrh788R_YpZ_2JyCVNneeFXdncN2cmCcZkzRHbFYXVR7SoPK5zBZ5uuiuVbNv0rTedk7gzzOasweirvsrOtPvP0-A=w600"
            link="https://opensea.io/assets/matic/0xadd82df88f40bbc48f467413e9361e4969665237/252644"
            creator="Rovies"
            name="Rovi 65488 "
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="https://lh3.googleusercontent.com/dZE6bjm5JNMEwiwTCBxFfg6kPL7wlQqCvfLAKW59kq6Xrjy94Rlr_Kn3DZuZeps-nnb9WDSvnYCdnavFCx7Uh8is7zzCsSoscrAYJQ=w600"
            link="https://opensea.io/assets/matic/0xadd82df88f40bbc48f467413e9361e4969665237/241395"
            creator="Rovies"
            name="Rovi 54371 "
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="https://lh3.googleusercontent.com/l0YUPtJFvbeua5M7PvbPl4QMGjk78ZUYkZT84z6CCBLzsu0BWdsdC3ozGq7VbV7q2lzsXP0aFHYQypkea3qyviPkMqOrVYT0FEXSbJk=w600"
            link="https://opensea.io/assets/matic/0xadd82df88f40bbc48f467413e9361e4969665237/253262"
            creator="Rovies"
            name="Rovi 79235 "
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="https://lh3.googleusercontent.com/rW-yZfjJjeveMFbFjT6JqQ1N6tj0DjsrrFtS5YYSKTwE8PXkYZJc1NmNUvrqqcyKrH267ZRJ4aAmrhkzS_66tzf2c3Mw4SNXi7SF=w600"
            link="https://opensea.io/assets/matic/0xadd82df88f40bbc48f467413e9361e4969665237/240062"
            creator="Rovies"
            name="Rovi 11956 "
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="https://lh3.googleusercontent.com/u8iZZzIiFyc4oiaArZHcaB4OIIr9kRLr00r1LKj6zLcGEcL9ik908ekbGH6lLRs7zH0RZG60pD-79qQ6ba090Q3cSzyh4DplZlPbQ48=w600"
            link="https://opensea.io/assets/matic/0xadd82df88f40bbc48f467413e9361e4969665237/194718"
            creator="Rovies"
            name="Rovi 60294 "
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="https://lh3.googleusercontent.com/OmXZfpx2t5qcxwn9z0n7uzzJkVVZMYzUcxs2_VATxdVOpbpYvq2m_aN3uNZB57fvbcqsZwVhVeZ--7JPb_TxAyE_r9ttunjxgswKxtA=w600"
            link="https://opensea.io/assets/matic/0xadd82df88f40bbc48f467413e9361e4969665237/194794"
            creator="Rovies"
            name="Rovi 63821 "
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="https://lh3.googleusercontent.com/cYQF9cbTXxoKtQhMqDPDVGvpvc2W1ckbaTrjrx7Z3JUG9u63fuDFdgJvCUViQWWAsb9dRtsKQzj35EqpCaxHiwpXtUKzW5aXN-qA=w600"
            link="https://opensea.io/assets/matic/0xadd82df88f40bbc48f467413e9361e4969665237/235917"
            creator="Rovies"
            name="Rovi 90554 "
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="https://lh3.googleusercontent.com/eYTkMZaSFKgxynqB3h5LD-1Xw999nIfsRNjlLl9PvfBB7FXcT4LcPioQrqVkCSqBWp7hrZEBQD_wz8AbSO_HTZ-Ll0fbltOFeCexsA=w600"
            link="https://opensea.io/assets/matic/0xadd82df88f40bbc48f467413e9361e4969665237/194808"
            creator="Rovies"
            name="Rovi 27123 "
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="https://lh3.googleusercontent.com/yl_QyfGox2ygIv1lAkB2p4LspxfNFu4U_4vyblrn-kl2x03UrBG0UbyYGrn_s8ykn_0k1WMXkUUXc9xbgfwbI7CaaJZXNWUX8IIH=w600"
            link="https://opensea.io/assets/matic/0xadd82df88f40bbc48f467413e9361e4969665237/236450"
            creator="Rovies"
            name="Rovi 50954 "
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="https://lh3.googleusercontent.com/mFy3Xm-Mb2ifB1az7kcDB-ipfS7onS_zc4ogHL60wiF4YsFiqQqRHrEQY00Gf3zcDyud1jyeiyOmNOaZYBXbeEbfJIBPwg9PDLVwWA=w600"
            link="https://opensea.io/assets/matic/0xadd82df88f40bbc48f467413e9361e4969665237/236004"
            creator="Rovies"
            name="Rovi 76615 "
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="https://lh3.googleusercontent.com/RRmuC0B60V7tEzBTu1mltcSCiyC3FlOuINmaD1_qcUGl3gsf4Gu1aUCWMd3ojvqsdtPMqubliEAYo2Z2wX8INqBtLx8FAsKK7kwxJ30=w600"
            link="https://opensea.io/assets/matic/0xadd82df88f40bbc48f467413e9361e4969665237/214607"
            creator="Rovies"
            name="Rovi 23628 "
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="https://lh3.googleusercontent.com/RfjeW9I_YylBLhYRIOuzM4JWrXNuvucQHEDlUjxpQeD4td6Iw3I3noHotEYzrehqb-7ouhR4iVO7Ox7dms5Jgz5VhZw52B6RYSni=w600"
            link="https://opensea.io/assets/matic/0xadd82df88f40bbc48f467413e9361e4969665237/240061"
            creator="Rovies"
            name="Rovi 18845 "
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="https://lh3.googleusercontent.com/PU-O3TvVxPKJs8kCbHo4Wylehda9q5w2-lM1-3rdApIzaqp7oLAldGQ6p679vrWhsTicygSbxP74P6YDm5aMhgGMG6PDDExhW3hv8w=w600"
            link="https://opensea.io/assets/matic/0xadd82df88f40bbc48f467413e9361e4969665237/235961"
            creator="Rovies"
            name="Rovi 95182 "
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="https://lh3.googleusercontent.com/jmbjc5cdSWZiNZNTYjpYBLmimNzThajcxWEuh7LBjAEqe4Ypd0bvLUv5uzU9xGyIaEk2xLeV8xWNcKdAgL8-ixVeJRjl3PxTRL1mcZY=w600"
            link="https://opensea.io/assets/matic/0xadd82df88f40bbc48f467413e9361e4969665237/241485"
            creator="Rovies"
            name="Rovi 79554 "
            height={mobile ? heightCard : undefined}
            />
        </div>
      </div>
    </div>
  );
};

export default Guild;
