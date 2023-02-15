import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import { WelcomePage } from "../pages/Welcome";
import { NotFound } from "../pages/NotFound";
import { HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, WELCOME_ROUTE } from "../shared/routes";
import { HomePage } from "../pages/Home";
import { Modal } from "../shared/ui/Modal";
import { useDispatch, useSelector } from "../shared/hooks";
import { useModalType } from '../shared/hooks';

export function App() {
    const { isModalActive } = useSelector(store => store.modalStore);

    const dispatch = useDispatch();
    const location = useLocation();

    const state = location.state && location.state.background;

    const closeModal = () => {
        dispatch(() => closeModal());
    };

    const component = useModalType();

    return (
        <div className="app">
            <Routes location={state || location}>
                <Route index path={HOME_ROUTE} element={<HomePage />} />
                <Route path={WELCOME_ROUTE} element={<WelcomePage />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            {state && isModalActive && <Routes>
                    <Route
                        path={`/welcome/${REGISTER_ROUTE}`}
                        element={<Modal onClose={closeModal}>
                            {component}
                        </Modal>}
                    />
                    <Route
                        path={`/welcome/${LOGIN_ROUTE}`}
                        element={<Modal onClose={closeModal}>
                            {component}
                        </Modal>}
                    />
                </Routes>
            }
        </div>
    )
}