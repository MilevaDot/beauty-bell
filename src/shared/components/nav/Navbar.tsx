import { Box, HStack, Image } from "@chakra-ui/react"
import { useState, useEffect } from "react"
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

    useEffect(()=>{
        window.addEventListener('scroll', changeColor)
        return ()=>{
            window.addEventListener('scroll', changeColor)
        }
    },[] )
    

    return (
        <>
            <HStack
                justify='space-around'
                backgroundColor='transparent'
                position='fixed'
                width='100%'
                className={color ? 'navbar-bg' : ''}
                >
                <Link to='/'>
                    <Image src='src\assets\logo-removebg-preview.png' backgroundColor='transparent'  alt='Logo' w='220px' className="logo"/ >
                </Link>
                <Box display='flex' gap='20px' color='var(--background)' backgroundColor='transparent'>
                    <Link to='/'>NOSOTROS</Link>
                    <Link to='/'>SERVICIOS</Link>
                    <Link to='/blog'>BLOG</Link>
                    <Link to='/login'>INGRESAR</Link>
                </Box>
            </HStack>
        </>
    )
}

export default Navbar