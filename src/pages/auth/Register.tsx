import { Box, Button, FormControl, FormLabel, Heading } from "@chakra-ui/react"
import InputRegister from "./inputRegister"

const Register = () => {
    return (
        <Box
            w='452px'
            margin='140px auto'
            display='flex'
            flexDirection='column'
            gap='1em'
            padding='1em'
            >
            <Heading as='h4' size='md' textAlign='center'>Crear cuenta</Heading>
            <FormControl display='flex' alignItems='center' justifyContent='space-between' gap='20px'>
                <FormLabel w='100px'>Nombres</FormLabel>
                <InputRegister
                    inputType='text'
                    inputName='firstname'
                    inputPlaceholder='Mario Luigui'
                    />
            </FormControl>
            <FormControl display='flex' alignItems='center' justifyContent='space-between' gap='20px'>
                <FormLabel w='100px'>Apellidos</FormLabel>
                <InputRegister
                    inputType='text'
                    inputName='lastname'
                    inputPlaceholder='Pérez Paucar'
                    />
            </FormControl>
            <FormControl display='flex' alignItems='center' justifyContent='space-between' gap='20px'>
                <FormLabel w='100px'>Usuario</FormLabel>
                <InputRegister
                    inputType='email'
                    inputName='email'
                    inputPlaceholder='correo@micorreo.com'
                    />
            </FormControl>
            <FormControl display='flex' alignItems='center' justifyContent='space-between' gap='20px'>
                <FormLabel w='100px'>Contraseña</FormLabel>
                <InputRegister
                    inputType='password'
                    inputName='password'
                    inputPlaceholder='********'
                    />
            </FormControl>
            <FormControl display='flex' alignItems='center' justifyContent='space-between' gap='20px'>
                <FormLabel w='100px'>DNI</FormLabel>
                <InputRegister
                    inputType='number'
                    inputName='dni'
                    inputPlaceholder='12345678'
                    />
            </FormControl>
            <Button
                backgroundColor='var(--button)'
                type='submit'
                _hover={{ backgroundColor: 'white', outline: '2px solid var(--button)' }}
                >
                Registrarse
            </Button>
        </Box>
    )
}

export default Register