import { HStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <HStack justify='end'>
                <Link to='/'>Home</Link>
                <Link to='/'>About us</Link>
                <Link to='/'>Contact us</Link>
                <Link to='/login'>Sign in</Link>
                <Link to='/register'>Sign up</Link>
            </HStack>
        </>
    )
}

export default Navbar