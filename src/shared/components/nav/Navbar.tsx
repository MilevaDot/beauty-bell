import { Box, HStack, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <HStack justify='space-around' backgroundColor='transparent' position='fixed' width='100%'>
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