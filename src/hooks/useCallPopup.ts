import {useQuery} from "components/PopupManager/components/Manager/hooks/useQuery";
import {EQuery} from "components/PopupManager/interfaces";

export const useCallPopup = (popupName:string) => {
    const { queries, setParams } = useQuery(EQuery.POPUP)
    const popups = queries ? queries.split(',') : []

    const callPopup = () => {
        popups.push(popupName)
        setParams({[EQuery.POPUP]:popups.join(',')})
    }

    return { callPopup }
}