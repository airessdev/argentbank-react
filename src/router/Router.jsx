import { BrowserRouter, Navigate, Route, Routes, } from "react-router-dom";

import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import User from '../pages/user/user'
import PrivateRoute from '../components/PrivateRoute'


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate replace to="/Home" />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route
                    path="/user"
                    element={
                        <PrivateRoute>
                            <User />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;