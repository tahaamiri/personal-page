import { Routes, Route, Link } from "react-router-dom";
import { HomePage } from './views/pages/homePage/HomePage.index';
import './App.css';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </>
    );
}

export default App;
