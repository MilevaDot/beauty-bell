import { Box, Button, FormControl, Heading, Text } from "@chakra-ui/react"
import { FaLock, FaUser } from "react-icons/fa"
import InputLogin from "./InputLogin"
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <Box
            w='250px'
            margin='80px auto'
            display='flex'
            flexDirection='column'
            gap='1em'
            padding='1em'
            >
            <Heading as='h4' size='md' textAlign='center'>Iniciar Sesión</Heading>
            <FormControl borderBottom='1px solid black' display='flex' alignItems='center'>
                <FaUser />
                <InputLogin
                    inputType='text'
                    inputName='username'
                    inputPlaceholder='Usuario' />
            </FormControl>
            <FormControl borderBottom='1px solid black' display='flex' alignItems='center'>
                <FaLock />
                <InputLogin
                    inputType='password'
                    inputName='password'
                    inputPlaceholder='Contraseña' />
            </FormControl>
            <Link to='/register'>
                <Text textAlign='end' fontSize='0.7em'>Eres nuevo? Regístrate</Text>
            </Link>
            <Button
                backgroundColor='var(--button)'
                type='submit'
                _hover={{ backgroundColor: 'white', outline: '2px solid var(--button)' }}
                >
                Ingresar
            </Button>
        </Box>
    )
}

export default Login
