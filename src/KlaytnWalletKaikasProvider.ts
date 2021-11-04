import { KlaytnWalletProvider } from './'

declare global {
  interface Window {
    klaytn?: KlaytnProvider
  }
}

export class KlaytnWalletKaikasProvider implements KlaytnWalletProvider {
  klaytn: KlaytnProvider | undefined

  constructor() {
    this.klaytn = window.klaytn
  }

  public async getKlaytnAddress() {
    const accounts = await this.klaytn?.enable()
    if (accounts && accounts.length > 0) {
      return accounts[0]
    }
    return Promise.reject()
  }
}
