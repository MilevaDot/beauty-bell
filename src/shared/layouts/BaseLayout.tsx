import { ReactElement } from "react"
import Navbar from "../components/nav/Navbar"
import { Box } from "@chakra-ui/react"
interface BaseLayoutProps {
    children: ReactElement
    showNavbar?: boolean
}

const BaseLayout = ({ children, showNavbar = false }: BaseLayoutProps) => {
    return (
        <>
            {showNavbar && <Navbar />}
            <Box pt={16} >
            { children }
            </Box>
        </>
    )
}

export default BaseLayout
