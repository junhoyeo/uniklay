# UniKlay

<a href="https://www.npmjs.org/package/uniklay">
  <img src="https://img.shields.io/npm/v/uniklay?color=brightgreen&label=npm%20package" alt="Current npm package version." />
</a>

Unified interface module for Klip/Kaikas to interact with the Klaytn blockchain

```ts
import {
  KlaytnWalletKlipProvider,
  KlaytnWalletKaikasProvider,
} from 'uniklay'

const walletProvider = walletProvider === 'Klip'
  ? new KlaytnWalletKlipProvider({ // Klip
      bappName: 'UniKlay BApp',
    })
  : new KlaytnWalletKaikasProvider() // Kaikas

const klaytnWallet = new KlaytnWallet({
  networkStage: 'mainnet',
  networkRpcURL: 'https://your-klaytn-cypress-node.com',
  walletProvider,
})

klaytnWallet.initialize() // Connect to wallet

klaytnWallet.address // 0x9c7377E72564EcD512a68672BA943AB48dBa0415
klaytnWallet.getKlaytnBalance()
```
