import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Включили <Router>

import { MainPage } from "./Pages/MainPage";
import { Layout } from "./Layout";
import { ClubPage } from "./Pages/SinglePageClub/ClubPage";
import {Price} from "./Pages/PagesInfo/Price/Price";
import {AboutUs} from "./Pages/PagesInfo/AboutUs/AboutUs";
import {PhotoClub} from "./Pages/PagesInfo/PhotoClub/PhotoClub";
import {Contacts} from "./Pages/PagesInfo/Contacts/Contacts";

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path='/clubPage' element={<ClubPage />} />
                    <Route path='/price' element={<Price />} />
                    <Route path='/aboutUs' element={<AboutUs />} />
                    <Route path='/photoClub' element={<PhotoClub />} />
                    <Route path='/contacts' element={<Contacts />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
