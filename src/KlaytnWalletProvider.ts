export enum KlaytnWalletProviderType {
  Klip = 'klip',
  Kaikas = 'kaikas',
}

export type KlaytnWalletProvider = {
  type: KlaytnWalletProviderType
  getKlaytnAddress: () => Promise<string>
}
