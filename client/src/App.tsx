import './App.module.scss';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

// ------------------- Containeurs  -----------------------
import Header from './components/containers/Header/Index';
import Footer from './components/containers/Footer/Index';

// ---------------------- pages  ---------------------------
import Home from './components/pages/Home/Index';
import About from './components/pages/About/Index';
import NotFound from './components/pages/NotFound/Index';

function GeneralLayout() {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<GeneralLayout/>}>
                    <Route index element={<Home/>}/>
                </Route>  

                <Route path="/en" element={<GeneralLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                </Route>

                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}