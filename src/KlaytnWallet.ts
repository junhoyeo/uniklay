import Caver from 'caver-js'

import { KlaytnWalletProvider } from './'
import { KlaytnNetwork, KlaytnNetworks, KlaytnNetworkStage } from './KlaytnNetworks'

export type KlaytnWalletOptions = {
  networkStage?: KlaytnNetworkStage
  walletProvider: KlaytnWalletProvider
}

export class KlaytnWallet {
  provider: KlaytnWalletProvider
  network: KlaytnNetwork
  caver: Caver
  address: string | undefined

  constructor({ networkStage, walletProvider }: KlaytnWalletOptions) {
    this.provider = walletProvider
    this.network = networkStage
      ? KlaytnNetworks[networkStage]
      : KlaytnNetworks.testnet
    this.caver = new Caver(this.network.rpcURL)
  }

  public async initialize() {
    const klaytnAddress = await this.provider.getKlaytnAddress()
    this.address = klaytnAddress
    return klaytnAddress
  }

  public async getKlaytnBalance(): Promise<string | undefined> {
    if (!this.address) {
      return undefined
    }
    return this.caver.klay.getBalance(this.address)
  }
}
