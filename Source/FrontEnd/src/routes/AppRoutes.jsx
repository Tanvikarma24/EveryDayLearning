import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UserRegister from "../pages/UserRegister";
import FoodPartnerRegister from "../pages/FoodPartnerRegister";
import FoodPartnerLogin from "../pages/FoodPartnerLogin";
import UserLogin from "../pages/UserLogin"

const AppRoute = () => {
    return (
        <Router>
                 <Routes>
                    <Route path="/user/register" element={<UserRegister />} />
                    <Route path="/user/login" element={<UserLogin />} />
                    <Route path="/foodpartner/register" element={<FoodPartnerRegister />} />
                    <Route path="/foodpartner/login" element={<FoodPartnerLogin />} />
                </Routes>
        </Router>
    )
}

export default AppRoute