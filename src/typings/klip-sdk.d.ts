declare module 'klip-sdk' {
  export module prepare {
    export function auth(params: {
      bappName: string
      successLink?: string
      failLink?: string
    }): Promise<{
      request_key: string
    }>
  }

  export type Status =
    | 'prepared'
    | 'requested'
    | 'completed'
    | 'canceled'
    | 'error'

  export type TransactionStatus = 'success' | 'pending' | 'fail'

  export function getResult(request_key: string): Promise<{
    status: Status
    expiration_time: number
    request_key: string
    data?: {
      klaytn_address?: string
    }
    result?: {
      tx_hash: string
      status: TransactionStatus
    }
  }>
}
