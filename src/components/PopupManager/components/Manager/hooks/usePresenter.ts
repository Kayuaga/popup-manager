import {useCallback} from 'react'

import {useQuery} from './useQuery'
import {EQuery} from '../../../interfaces'

interface IPresenter {
    popups: string[]
    goBack: () => void
}

export const usePresenter = (): IPresenter => {

    const {queries: popupQuery, setParams} = useQuery<string>(EQuery.POPUP)

    const popups = popupQuery ? popupQuery.split(',') : []

    const goBack = useCallback(async () => {
        popups.pop()
        setParams({[EQuery.POPUP]: Boolean(popups.length) ? popups.join(',') : []})

    }, [popups])

    return {popups, goBack}
}
