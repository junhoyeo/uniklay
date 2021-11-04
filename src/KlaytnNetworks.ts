export type KlaytnNetwork = {
  name: string
  chainID: number
  rpcURL: string
  explorerURL: string
}

export type KlaytnNetworkStage = 'testnet' | 'mainnet'

export const KlaytnNetworks = {
  testnet: {
    name: 'Klaytn Baobab',
    chainID: 1001,
    rpcURL: 'https://api.baobab.klaytn.net:8651',
    explorerURL: 'https://baobab.scope.klaytn.com',
  },
  mainnet: {
    name: 'Klaytn Cypress',
    chainID: 8217,
    rpcURL: ' https://api.cypress.ozys.net:8651',
    explorerURL: 'https://scope.klaytn.com',
  },
}
