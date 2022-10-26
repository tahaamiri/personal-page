import { Routes, Route } from "react-router-dom";
import { HomePage } from './views/pages/homePage/HomePage.index';
import { ReactComponent as Up } from '../src/assets/icons/escalator-up.svg';
import './App.css';

function App() {
    return (
        <div className="relative">
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
            <Up className='absolute bottom-0 right-1 cursor-pointer w-10 h-auto fill-gray-400' onClick={() => window.scrollTo(0, 0)}/>
        </div>
    );
}

export default App;
