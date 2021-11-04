import { KlaytnWalletProvider } from './'
import { KlaytnWalletProviderType } from './KlaytnWalletProvider'

declare global {
  interface Window {
    klaytn?: KlaytnProvider
  }
}

export class KlaytnWalletKaikasProvider implements KlaytnWalletProvider {
  type = KlaytnWalletProviderType.Kaikas
  klaytn: KlaytnProvider | undefined

  constructor() {
    this.klaytn = window.klaytn
  }

  public async initialize() {}

  public async getKlaytnAddress() {
    const accounts = await this.klaytn?.enable()
    if (accounts && accounts.length > 0) {
      return accounts[0]
    }
    return Promise.reject()
  }
}
