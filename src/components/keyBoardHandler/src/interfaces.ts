export type VoidCallback = () => void

export enum KeyNames {
  ESC = 'esc',
}

export enum KeyCodes {
  ESC = 27,
}

export type Callback = {
  callback: VoidCallback
  isCaptured: boolean
  keyName: KeyNames
}

export type CallbackRef = {
  current: {
    callback: VoidCallback
    isCaptured: boolean
  }
}
