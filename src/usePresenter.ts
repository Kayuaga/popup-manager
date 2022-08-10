
import {useCallPopup} from "./hooks/useCallPopup";
import {useLocation, useNavigate} from "react-router-dom";

export const usePresenter = () => {
    const {callPopup}=useCallPopup('foo')
    const location = useLocation();
    const navigate = useNavigate()
    // goBack should be rewritten
    const close = ()=> navigate(-1)

    return {callFoo: callPopup, close, location}
}