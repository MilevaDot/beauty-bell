import { Box, Button, FormControl, Heading, Input, Text } from "@chakra-ui/react"
import { FaLock, FaUser } from "react-icons/fa"
import './login.css'

const Login = () => {
    return (
        <Box
            w='250px'
            margin='200px auto'
            display='flex'
            flexDirection='column'
            gap='1em'
            padding='1em'
            >
            <Heading as='h4' size='md' textAlign='center'>Iniciar Sesión</Heading>
            <FormControl borderBottom='1px solid black' display='flex' alignItems='center'>
                <FaUser />
                <Input
                    type='text'
                    name='username'
                    placeholder='Usuario'
                    required
                    border='none'
                    outline='none'
                    focusBorderColor='transparent'
                    />
            </FormControl>
            <FormControl borderBottom='1px solid black' display='flex' alignItems='center'>
                <FaLock />
                <Input
                    type='password'
                    name='password'
                    placeholder='Contraseña'
                    required
                    border='none'
                    outline='none'
                    focusBorderColor='transparent' />
            </FormControl>
            <Text textAlign='end' fontSize='0.7em'>Eres nuevo? Regístrate</Text>
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
