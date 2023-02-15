import { useSelector } from ".";
import { Login } from "../../features/Login";
import { Register } from "../../features/Register";
import { ModalType } from "../types";

export const useModalType = () => {
    const { modalType } = useSelector(store => store.modalStore);
    let component: JSX.Element | null = null;

    switch (modalType) {
        case ModalType.LOGIN: {
            component = <Login />
            break
        }
        case ModalType.REGISTER: {
            component = <Register />
            break
        }
        default: {
            component = null
        }
    }

    return component;
}