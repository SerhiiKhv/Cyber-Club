import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Включили <Router>

import { MainPage } from "./Pages/MainPage";
import { Layout } from "./Layout";
import { ClubPage } from "./Pages/SinglePageClub/ClubPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path='/clubPage' element={<ClubPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
