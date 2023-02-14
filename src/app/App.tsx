import { Routes, Route } from "react-router-dom";
import { WelcomePage } from "../pages/Welcome";
import { NotFound } from "../pages/NotFound";
import { HOME_ROUTE, WELCOME_ROUTE } from "../shared/routes";
import { HomePage } from "../pages/Home";
import './App.css';

export function App() {
    return (
        <div className="app">
            <Routes>
                <Route index path={HOME_ROUTE} element={<HomePage />} />
                <Route path={WELCOME_ROUTE} element={<WelcomePage />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    )
}