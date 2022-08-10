import {useCallPopup} from "../../../hooks/useCallPopup";

export const usePresenter = () => {
    const {callPopup} = useCallPopup('foo')

    return {onClick: callPopup}
}