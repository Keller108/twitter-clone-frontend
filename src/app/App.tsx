import './App.css';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { WelcomePage } from "../pages/Welcome";
import { NotFound } from "../pages/NotFound";
import { HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, WELCOME_ROUTE } from "../shared/routes";
import { HomePage } from "../pages/Home";
import { Modal } from "../shared/ui/Modal";
import { useDispatch, useSelector } from "../shared/hooks";
import { useModalType } from '../shared/hooks';
import { modalClose } from '../services/actions/modal';

export function App() {
    const { isModalActive } = useSelector(store => store.modalStore);

    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const state = location.state && location.state.background;

    const closeModalHandler = () => {
        dispatch(modalClose());
        navigate(state);
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
                        path={REGISTER_ROUTE}
                        element={<Modal onClose={closeModalHandler}>
                            {component}
                        </Modal>}
                    />
                    <Route
                        path={LOGIN_ROUTE}
                        element={<Modal onClose={closeModalHandler}>
                            {component}
                        </Modal>}
                    />
            </Routes>}
        </div>
    )
}