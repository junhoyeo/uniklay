import { getResult, prepare } from 'klip-sdk'

import { KlaytnWalletProvider } from './'
import { KlaytnWalletProviderType } from './KlaytnWalletProvider'

export class KlaytnWalletKlipProvider implements KlaytnWalletProvider {
  type = KlaytnWalletProviderType.Kilp
  bappName = ''

  constructor(bappName: string) {
    this.bappName = bappName
  }

  public async getKlaytnAddress() {
    const { request_key: requestKey } = await prepare.auth({
      bappName: this.bappName,
    })
    const { data } = await getResult(requestKey)
    const klaytnAddress = data?.klaytn_address

    if (klaytnAddress) {
      return klaytnAddress
    }
    return Promise.reject(JSON.stringify(data))
  }
}
