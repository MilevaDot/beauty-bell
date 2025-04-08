import { Route, Routes } from "react-router-dom"
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"
import NotFound from "../pages/NotFound"
import Home from "../pages/Home"
import BaseOutlet from "./outlets/BaseOutlet"
import Blog from "../pages/Blog"

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={ <BaseOutlet showNavbar={false} /> }>
                <Route path='/login' element={ <Login /> } />
                <Route path='/register' element={ <Register /> } />
                <Route path='*' element={ <NotFound /> } />
            </Route>
            <Route element={<BaseOutlet showNavbar={true} />}>
                <Route path='/blog' element={ <Blog /> } />
                <Route path='/' element={ <Home /> } />
            </Route>
        </Routes>
    )
}

export default AppRoutes