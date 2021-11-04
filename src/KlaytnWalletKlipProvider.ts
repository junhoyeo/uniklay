import { KlaytnWalletProvider } from './'
import { KlaytnWalletProviderType } from './KlaytnWalletProvider'
import { KlipSDKModule } from './typings/klip-sdk.module'

type KlaytnWalletKlipProviderOptions = {
  bappName: string
}

export class KlaytnWalletKlipProvider implements KlaytnWalletProvider {
  type = KlaytnWalletProviderType.Klip
  bappName = ''
  klipSDK: typeof KlipSDKModule | undefined

  constructor({ bappName }: KlaytnWalletKlipProviderOptions) {
    this.bappName = bappName
  }

  public async initialize() {
    this.klipSDK = await import('klip-sdk')
  }

  public async getKlaytnAddress() {
    if (!this.klipSDK) {
      return Promise.reject(
        new Error('KlaytnWalletKlipProvider is not initialized'),
      )
    }
    const { request_key: requestKey } = await this.klipSDK.prepare.auth({
      bappName: this.bappName,
    })
    const { data } = await this.klipSDK.getResult(requestKey)
    const klaytnAddress = data?.klaytn_address

    if (klaytnAddress) {
      return klaytnAddress
    }
    return Promise.reject(JSON.stringify(data))
  }
}
