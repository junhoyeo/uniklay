export enum KlaytnWalletProviderType {
  Klip = 'klip',
  Kaikas = 'kaikas',
}

export type KlaytnWalletProvider = {
  type: KlaytnWalletProviderType
  initialize: () => Promise<void>
  getKlaytnAddress: () => Promise<string>
}
