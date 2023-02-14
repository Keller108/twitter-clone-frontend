import { Routes, Route, useLocation } from "react-router-dom";
import { WelcomePage } from "../pages/Welcome";
import { NotFound } from "../pages/NotFound";
import { HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, WELCOME_ROUTE } from "../shared/routes";
import { HomePage } from "../pages/Home";
import './App.css';
import { Modal } from "../shared/ui/Modal";

export function App() {
    const location = useLocation();
    const state = location.state && location.state.background;

    return (
        <div className="app">
            <Routes>
                <Route index path={HOME_ROUTE} element={<HomePage />} />
                <Route path={WELCOME_ROUTE} element={<WelcomePage />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            {state && isActive && <Routes>
                    <Route
                        path={`/welcome/${REGISTER_ROUTE}`}
                        element={<Modal onClose={handleCloseModal}>
                            {component}
                        </Modal>}
                    />
                    <Route
                        path={`/welcome/${LOGIN_ROUTE}`}
                        element={<Modal onClose={handleCloseModal}>
                            {component}
                        </Modal>}
                    />
                </Routes>
            }
        </div>
    )
}