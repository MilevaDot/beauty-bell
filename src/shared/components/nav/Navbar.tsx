import { Box, HStack, Image } from "@chakra-ui/react"
import { useState } from "react"
import { Link } from "react-router-dom"
import './navbar.css'


const Navbar = () => {
    const [color, setColor] = useState(false)

    const changeColor = () => {
        if ( window.scrollY >= 200 ) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)

    return (
        <>
            <HStack
                justify='space-around'
                backgroundColor='transparent'
                position='fixed'
                width='100%'
                zIndex={9999}
                className={color ? 'navbar-bg' : ''}
                >
                <Link to='/'>
                    <Image src='src\assets\logo-removebg-preview.png' alt='Logo' w='140px'/>
                </Link>
                <Box display='flex' gap='20px' color='var(--background)'>
                    <Link to='/'>NOSOTROS</Link>
                    <Link to='/'>SERVICIOS</Link>
                    <Link to='/'>BLOG</Link>
                    <Link to='/login'>INGRESAR</Link>
                </Box>
            </HStack>
        </>
    )
}

export default Navbar