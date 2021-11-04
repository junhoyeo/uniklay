export enum KlaytnWalletProviderType {
  Kilp = 'klip',
  Kaikas = 'kalkas',
}

export type KlaytnWalletProvider = {
  type: KlaytnWalletProviderType
  getKlaytnAddress: () => Promise<string>
}
