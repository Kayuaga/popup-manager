import { useSearchParams } from 'react-router-dom'

import { EQuery } from '../../../interfaces'


interface IReturn<T> {
  queries: T
  setParams: (T : any) => void
}

export const useQuery = <T extends string>(queryName: T): IReturn<T> => {
  const [params,setParams] = useSearchParams()
  const queries = params.get(queryName) as T
  return { queries, setParams }
}
