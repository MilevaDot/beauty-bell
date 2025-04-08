import { Outlet } from "react-router-dom"
import BaseLayout from "../../shared/layouts/BaseLayout"

interface BaseOutletProps{
    showNavbar?: boolean;
}

const BaseOutlet = ({showNavbar}:BaseOutletProps )=> {
    return (
        <BaseLayout showNavbar={showNavbar}>
            <Outlet />
        </BaseLayout>
    )
}

export default BaseOutlet