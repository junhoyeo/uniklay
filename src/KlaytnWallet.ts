import Caver from 'caver-js'

import { KlaytnWalletProvider } from './'
import { KlaytnNetwork, KlaytnNetworks, KlaytnNetworkStage } from './KlaytnNetworks'

export type KlaytnWalletOptions =
  | {
      networkStage: 'testnet'
      networkRpcURL?: string
      walletProvider: KlaytnWalletProvider
    }
  | {
      networkStage: 'mainnet'
      networkRpcURL: string
      walletProvider: KlaytnWalletProvider
    }

export class KlaytnWallet {
  provider: KlaytnWalletProvider
  network: KlaytnNetwork
  caver: Caver
  address: string | undefined

  constructor({
    networkStage,
    networkRpcURL,
    walletProvider,
  }: KlaytnWalletOptions) {
    this.provider = walletProvider
    this.network =
      networkStage === 'testnet'
        ? KlaytnNetworks.testnet
        : KlaytnNetworks.mainnet
    if (networkRpcURL) {
      this.network.rpcURL = networkRpcURL
    }
    this.caver = new Caver(this.network.rpcURL)
  }

  public async initialize() {
    await this.provider.initialize()
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
