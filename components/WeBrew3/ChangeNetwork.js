import Web3 from "web3";

//STOP CALLING THIS FROM NOWHERE I FUCKING HATE REACT
const changeToMatic = () => {
    return new Promise((resolve, reject) => {
      if (globalThis.web3js != undefined) {
        let chainIdd = globalThis.ethereum.chainId;
        if (chainIdd != "0x89") {
          try {
            globalThis.ethereum
              .request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: globalThis.web3js.utils.toHex(137) }],
              })
              .then((d) => {
                resolve(d);
              })
              .catch((err) => {
                reject(err);
              });
          } catch (err) {
            if (err.code === 4902) {
              globalThis.ethereum
                .request({
                  method: "wallet_addEthereumChain",
                  params: [
                    {
                      chainName: "Polygon Mainnet",
                      chainId: globalThis.web3js.utils.toHex(137),
                      nativeCurrency: {
                        name: "MATIC",
                        decimals: 18,
                        symbol: "MATIC",
                      },
                      rpcUrls: ["https://rpc-mainnet.maticvigil.com/"],
                    },
                  ],
                })
                .then((d) => {
                  resolve(d);
                })
                .catch((err) => {
                  reject(err);
                });
            } else {
              reject("_");
            }
          }
        } else {
          resolve()
        }
      } else {
        reject("_");
      }
    });
  };

export {changeToMatic};