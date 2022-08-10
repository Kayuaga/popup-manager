import {useCallPopup} from "../../../hooks/useCallPopup";

export const usePresenter = () => {
    const {callPopup} = useCallPopup('bar')

    return {onClick: callPopup}
}