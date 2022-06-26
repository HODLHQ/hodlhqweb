import Head from "next/head";
import Navbar from "components/Navbar";
import Image from "next/image";
import {useState, useEffect, useCallback} from "react";
import Link from "next/link";
import NFTCard from "components/WeBrew3/NFTCard";
const Vault = (props) => {
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
    let heightCard = "30"
    console.log("render")
  return (
    <div className="all flex w-full inset-0 ">
      <Head>
        <title>HODLHQ Gallery</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <div className="w-full container m-0 flex flex-col">
        <Navbar stateTrans={pagestate} stateTransSet={pagestateSet} />
        <div className={"flex justify-start flex-wrap mr-10 mb-10 mt-10 " +
        (mobile ? "ml-5" : "ml-10")}>
            <div className={titleStyle}>Lands</div>
            <div className="basis-full"></div>
            <NFTCard 
            content="https://img.seadn.io/files/70a343f9d0b039af2a7f0ca11a578263.jpg"
            link="https://opensea.io/assets/ethereum/0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258/77701"
            creator="Otherdeed for Otherside"
            name="#77701"
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="https://img.seadn.io/files/56c093bd7e3e026c5564ebbeba91cb46.png?fit=max&w=600"
            link="https://opensea.io/assets/ethereum/0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d/51042355038140769519506191114765231718328"
            creator="Decentraland"
            name="Greed Island"
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="https://img.seadn.io/files/d96d0f83258572f516f72dc47821451c.jpg?fit=max&w=600"
            link="https://opensea.io/assets/ethereum/0x5cc5b05a8a13e3fbdb0bb9fccd98d38e50f90c38/52059"
            creator="The Sandbox"
            name="LAND (39, -77)"
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="https://img.seadn.io/files/db420b0fe06fae717ece4d3b96e0a1e7.jpg?fit=max&w=600"
            link="https://opensea.io/assets/ethereum/0x5cc5b05a8a13e3fbdb0bb9fccd98d38e50f90c38/149978"
            creator="The Sandbox"
            name="LAND (38, 163)"
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="https://img.seadn.io/files/3ef79b98dc4c99c6ae76661a5402db05.jpg?fit=max&w=600"
            link="https://opensea.io/assets/ethereum/0x5cc5b05a8a13e3fbdb0bb9fccd98d38e50f90c38/52468"
            creator="The Sandbox"
            name="LAND (40, -76)"
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="https://img.seadn.io/files/cb5f5cd80fc98bc8484d7477b022c920.jpg?fit=max&w=600"
            link="https://opensea.io/assets/ethereum/0x5cc5b05a8a13e3fbdb0bb9fccd98d38e50f90c38/52463"
            creator="The Sandbox"
            name="LAND (35, -76)"
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="https://img.seadn.io/files/ccc09b339bc062947ed55151cb454a22.jpg?fit=max&w=600"
            link="https://opensea.io/assets/ethereum/0x5cc5b05a8a13e3fbdb0bb9fccd98d38e50f90c38/52055"
            creator="The Sandbox"
            name="LAND (35, -77)"
            height={mobile ? heightCard : undefined}
            />
            <div className="basis-full"></div>
            <div className={titleStyle}>ENS</div>
            <div className="basis-full"></div>
            <NFTCard 
            content="https://openseauserdata.com/files/95310d069f7d11e78e85e090b8837bd2.svg"
            link="https://opensea.io/assets/ethereum/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/75917908435499299404376578205678696455209561511100516205745345806563245729644"
            creator="ENS"
            name="coolclones.eth"
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="https://openseauserdata.com/files/0c64b0485e4fc820b5f58b25663faa4f.svg"
            link="https://opensea.io/assets/ethereum/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/90232026516590561727906141557033867803994281010599844377519768802114152056224"
            creator="ENS"
            name="coolxclones.eth"
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="https://img.seadn.io/files/f25b1a0b03da3148cab7cbde7b04a777.png?fit=max&auto=format&w=188"
            link="https://opensea.io/assets/ethereum/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/24704156718999591681563315132433537043654922521030857081801399707100631206128"
            creator="ENS"
            name="asuh.eth"
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="https://img.seadn.io/files/62363a13420eb2f6628295205d4cab0a.png?fit=max&auto=format&w=188"
            link="https://opensea.io/assets/ethereum/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/50730506561603465146810961911632735316870665645206347870747996685237876711887"
            creator="ENS"
            name="t0xin.eth"
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="https://img.seadn.io/files/3d28021153bd5fcbd7d407f1369536d5.png?fit=max&auto=format&w=188"
            link="https://opensea.io/assets/ethereum/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/35720551076309792242464942626066788083707050786699079061627107738378652641504"
            creator="ENS"
            name="bzrk.eth"
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="https://openseauserdata.com/files/f74e0bb15128e41c35acb1417c42fe4a.svg"
            link="https://opensea.io/assets/ethereum/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/51116755263987306549423843792774218303506769132153875246657557884380584621202"
            creator="ENS"
            name="notclonex.eth"
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="https://img.seadn.io/files/483e10da8acb63e7d28b1f85652d0c1e.png?fit=max&w=600"
            link="https://opensea.io/assets/ethereum/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/36377392903489951270973465659429144465858357703860589359433452684446374449323"
            creator="ENS"
            name="hodlhqvault.eth"
            height={mobile ? heightCard : undefined}
            />

            <NFTCard 
            content="https://img.seadn.io/files/226d7b46a4b5b18f11f411d0b27740c3.png?fit=max&w=600"
            link="https://opensea.io/assets/ethereum/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/106811720101894092514184924415865539543983258881617431537411073070697720969572"
            creator="ENS"
            name="hodlhq.eth"
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="https://openseauserdata.com/files/e2acf118ab1fe9d2d2c5612267e6f13c.svg"
            link="https://opensea.io/assets/ethereum/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/26054051887769880275632484977442406416584770794678511915932776627182529930855"
            creator="ENS"
            name="b🐵yc.eth"
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="https://openseauserdata.com/files/4ce1a04e44bb5b612a89c6605be2c6d8.svg"
            link="https://opensea.io/assets/ethereum/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/106015824043130730390903825424144191349057997288674278352447471106767672047531"
            creator="ENS"
            name="georgecloney.eth"
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="https://openseauserdata.com/files/343c690c2723a496f09a6a160c778162.svg"
            link="https://opensea.io/assets/ethereum/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/49584744944903234231125478250315141417386778887948052276876316563635006005593"
            creator="ENS"
            name="cool🐱.eth"
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="https://openseauserdata.com/files/baa5ec7e04f52c9210df59605a0de265.svg"
            link="https://opensea.io/assets/ethereum/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/15810782814639769942989692538250789162746299051838017091746318552231784999199"
            creator="ENS"
            name="clone❌.eth"
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="https://openseauserdata.com/files/afa9e58e77c963cd51cc129ab849d4f9.svg"
            link="https://opensea.io/assets/ethereum/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/18630582696429845468507877633448266089639823285469935180300294995645482444039"
            creator="ENS"
            name="dontcloneme.eth"
            height={mobile ? heightCard : undefined}
            />
            
            <div className="basis-full"></div>
            <div className={titleStyle}>Music</div>
            <div className="basis-full"></div>
            <NFTCard 
            content="https://tokens.gala.games/images/gala-music/gala-music/snoop-dogg-and-steve-aoki-present-alpha-doggz/super-freak.gif"
            link="https://opensea.io/assets/ethereum/0xc36cf0cfcb5d905b8b513860db0cfe63f6cf9f5c/282094082177457986211137549560935847297024"
            creator="Town Star"
            name="Super Freak"
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="vault/dance.png"
            link="https://opensea.io/assets/ethereum/0x208a40d3d8e4d438d95e0647a2e4e0d78e6525b5/0"
            creator="Steve Aoki "
            name="Piss On the Dance Floor"
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="vault/time.png"
            link="https://opensea.io/assets/ethereum/0x208a40d3d8e4d438d95e0647a2e4e0d78e6525b5/0"
            creator="TIMEPieces x Timbaland"
            name="Universal Love"
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="vault/feel.png"
            link="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/101324149589609765444097150160926508741381014360825123442161062352923616346612"
            creator="Snoop Dogg ft. October London"
            name="Feel the Rhythm"
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="vault/genesis.gif"
            link="https://opensea.io/assets/ethereum/0x332b3e3569ca93318166677165fa4bd9a2563f7a/121"
            creator="Kindred Spirits"
            name="Genesis Pass #121"
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="vault/high.png"
            link="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/101324149589609765444097150160926508741381014360825123442161062350724593091060"
            creator="Snoop Dogg"
            name="High"
            height={mobile ? heightCard : undefined}
            />
            <NFTCard 
            content="vault/punk.png"
            link="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/101324149589609765444097150160926508741381014360825123442161062404600662851717"
            creator="Champ Medici + Big We"
            name="She Bought a Cryptopunk"
            height={mobile ? heightCard : undefined}
            />
        </div>
      </div>
    </div>
  );
};

export default Vault;
