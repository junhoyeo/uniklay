# UniKlay

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
  walletProvider,
})

klaytnWallet.initialize() // Connect to wallet

klaytnWallet.address // 0x9c7377E72564EcD512a68672BA943AB48dBa0415
klaytnWallet.getKlaytnBalance()
```
