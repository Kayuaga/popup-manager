import { FC } from 'react'

interface IComponent {
  close: () => void
}

export enum EQuery {
  POPUP = 'popups',
}

export interface IConfig {
  [key: string]: FC<IComponent>
}
