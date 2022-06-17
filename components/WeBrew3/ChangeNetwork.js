import Web3 from "web3";

const changeToMatic = async () => {
    let chainId = await globalThis.web3js.eth.net.getId()
    if (chainId != 80001) {
        try {
            await globalThis.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: globalThis.web3js.utils.toHex(80001) }]
            });
        } catch (err) {
            if (err.code === 4902) {
                await globalThis.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                    {
                    chainName: 'Polygon Mainnet',
                    chainId: globalThis.web3js.utils.toHex(80001),
                    nativeCurrency: { name: 'MATIC', decimals: 18, symbol: 'MATIC' },
                    rpcUrls: ['https://rpc-mumbai.maticvigil.com/']
                    }
                ]
                });
            }
        }
    }
}

export {changeToMatic};