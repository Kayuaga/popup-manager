import { KeyNames, CallbackRef } from '../interfaces'
import Listener from './listener'

export class Callbacks {
  callbacks: Record<KeyNames, CallbackRef[]> = {
    [KeyNames.ESC]: [],
  }

  listener: Listener
  capturedListener: Listener

  constructor() {
    this.listener = new Listener(false, this.callbacks)
    this.capturedListener = new Listener(true, this.callbacks)
    this.add = this.add.bind(this)
    this.remove = this.remove.bind(this)
  }

  add(keyName: KeyNames, callbackItem: CallbackRef): () => void {
    this.callbacks[keyName].push(callbackItem)

    if (callbackItem.current.isCaptured) {
      this.capturedListener.add()
    } else {
      this.listener.add()
    }

    return () => this.remove(keyName, callbackItem)
  }

  remove(keyName: KeyNames, callbackItem: CallbackRef): void {
    const index = this.callbacks[keyName].findIndex((item) => item === callbackItem)
    this.callbacks[keyName].splice(index, 1)

    if (callbackItem.current.isCaptured) {
      this.capturedListener.remove()
    } else {
      this.listener.remove()
    }
  }
}

export default new Callbacks()
