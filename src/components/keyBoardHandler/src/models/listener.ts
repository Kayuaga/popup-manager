import { KeyNames, KeyCodes, CallbackRef } from '../interfaces'

export default class Listener {
  hasCallbacks = false
  isCaptured = false
  callbacks: Record<KeyNames, CallbackRef[]>

  constructor(isCaptured: boolean, callbacks: Record<KeyNames, CallbackRef[]>) {
    this.isCaptured = isCaptured
    this.callbacks = callbacks
    this.add = this.add.bind(this)
    this.remove = this.remove.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)
    this.call = this.call.bind(this)
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.keyCode === KeyCodes.ESC) {
      this.call(KeyNames.ESC)
      return
    }
  }

  call(keyName: KeyNames): void {
    const callbacks = this.callbacks[keyName]

    if (callbacks.length === 0) {
      return
    }

    const callback = callbacks[callbacks.length - 1]

    if (callback.current.isCaptured === this.isCaptured) {
      callback.current.callback()
    }
  }

  add(): void {
    if (this.hasCallbacks) {
      return
    }

    this.hasCallbacks = true

    window.addEventListener('keydown', this.onKeyDown, { capture: this.isCaptured })
  }

  remove(): void {
    const keyNames = Object.keys(this.callbacks) as KeyNames[]

    this.hasCallbacks = keyNames.some((keyName: KeyNames) => {
      const callbacks = this.callbacks[keyName]

      const lastItem = callbacks[callbacks.length - 1]

      if (!lastItem) {
        return false
      }

      return lastItem.current.isCaptured === this.isCaptured
    })

    if (this.hasCallbacks) {
      return
    }

    window.removeEventListener('keydown', this.onKeyDown, { capture: this.isCaptured })
  }
}
