import { Route, Routes } from "react-router-dom"
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"
import NotFound from "../pages/NotFound"
import Home from "../pages/Home"
import BaseOutlet from "./outlets/BaseOutlet"

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={ <BaseOutlet /> }>
                <Route path='/' element={ <Home /> } />
                <Route path='/login' element={ <Login /> } />
                <Route path='/register' element={ <Register /> } />
                <Route path='*' element={ <NotFound /> } />
            </Route>
        </Routes>
    )
}

export default AppRoutes