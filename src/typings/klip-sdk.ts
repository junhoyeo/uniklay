declare module 'klip-sdk' {
  type klipSDK = typeof import('./klip-sdk.module').KlipSDKModule
  export = klipSDK
}
