import { Avatar, Box, Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import './home.css'
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'

const Home = () => {
    return (
        <>
            <Box className='videoContainer'>
                <video autoPlay loop muted playsInline className='video'>
                    <source src='src\assets\libro.mp4' type='video/mp4'/>
                </video>
                <Box className='contenido' position='absolute'>
                    <Heading size='4xl' color='var(--button)' textAlign='center'>Cuidado y belleza de tus uñas</Heading>
                </Box>
            </Box>

            <Box margin='80px 80px 40px 80px'>
                <Heading size='md'>Nosotros</Heading>
                <Box width='600px'>
                    <Heading
                        size='2xl'
                        color='var(--button)'
                        >
                        Cuidado, Protección, Salud, Estética y Belleza
                    </Heading>
                </Box>
            </Box>
            <Box margin='0px 80px 80px 80px' display='flex' justifyContent='space-between'>
                <Box width='50%'>
                    <HStack
                        padding='10px 16px'
                        width='fit-content'
                        backgroundColor='var(--background)'
                        borderRadius='10px'
                        >
                        <Avatar
                            size='lg'
                            src='src/assets/luz_avatar.jpg' />
                        <Box>
                            <Heading size='md'>Luz Ilizarbe</Heading>
                            <Text fontSize='sm'>C.E.O y fundadora</Text>
                        </Box>
                    </HStack>
                </Box>
                <Box width='50%'>Nuestros equipo está conformado por las chicas más capaces de todo el país. Creemos firmemente que el cuidado y belleza de las uñas es parte importante de nuestras manos así como de nuestra marca personal. Es por ello que en Beauty Bell estamos comprometidos con la salud integral de las uñas de todos nuestros clientes.</Box>
            </Box>

            <Box margin='80px 80px 40px 80px'>
                <Heading size='md'>Servicios</Heading>
                <Box>
                    <Heading
                        size='2xl'
                        color='var(--button)'
                        >
                        Cuidado, Protección, Salud, Estética y Belleza
                    </Heading>
                </Box>
                <HStack margin='50px auto' justify='center' wrap='wrap' gap='2em'>
                    <Card maxW='sm'>
                        <CardBody position='relative' overflow='hidden' className='cardContainer'>
                            <Box className='boxHover inactive'>
                                <Box height='100%' w='100%' display='flex' alignItems='center' justifyContent='center' color='white'>
                                    <Heading>Gel</Heading>
                                </Box>
                            </Box>
                            <Image
                                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                borderRadius='lg'
                                className='cardImage'
                                />
                        </CardBody>
                    </Card>
                    <Card maxW='sm'>
                        <CardBody position='relative' overflow='hidden' className='cardContainer'>
                            <Box className='boxHover inactive'>
                                <Box height='100%' w='100%' display='flex' alignItems='center' justifyContent='center' color='white'>
                                    <Heading>Esmaltado</Heading>
                                </Box>
                            </Box>
                            <Image
                                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                borderRadius='lg'
                                className='cardImage'
                                />
                        </CardBody>
                    </Card>
                    <Card maxW='sm'>
                        <CardBody position='relative' overflow='hidden' className='cardContainer'>
                            <Box className='boxHover inactive'>
                                <Box height='100%' w='100%' display='flex' alignItems='center' justifyContent='center' color='white'>
                                    <Heading>Ojo de gato</Heading>
                                </Box>
                            </Box>
                            <Image
                                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                borderRadius='lg'
                                className='cardImage'
                                />
                        </CardBody>
                    </Card>
                </HStack>
            </Box>
            <Box backgroundColor='var(--background)' padding='20px 80px'>
                <Heading>¿Por qué Beauty bell?</Heading>
                <Text padding='20px 0px'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni possimus sunt eum animi modi accusamus eius, omnis incidunt, totam velit enim ex cum corrupti dolorem! Excepturi et similique totam? Velit!
                    Excepturi perferendis reiciendis dolores! Et labore amet, cum totam aut voluptates voluptatibus magni autem est ratione suscipit error ad provident sit! Nihil facilis animi eligendi amet voluptatem unde debitis ab.
                    Eligendi reprehenderit, aut sunt, itaque cupiditate ad beatae dignissimos assumenda consequuntur excepturi animi cumque labore neque ab quisquam architecto nam atque molestias iusto tempora aspernatur. Reprehenderit, recusandae. Itaque, incidunt ipsa!
                    Quam quasi praesentium blanditiis assumenda voluptas illum eius atque non odit fuga est, temporibus nemo, nostrum quaerat facilis asperiores officia id sunt, ea porro aspernatur quod nulla placeat quia. Eligendi?
                </Text>
            </Box>
            <Box margin='80px 80px 40px 80px'>
                <Heading size='md'>Servicios</Heading>
                <Box>
                    <Heading
                        size='2xl'
                        color='var(--button)'
                        >
                        Cuidado, Protección, Salud, Estética y Belleza
                    </Heading>
                </Box>
                <HStack margin='50px auto' justify='center' wrap='wrap' gap='2em'>
                    <Card maxW='sm'>
                        <CardBody position='relative' overflow='hidden' className='cardContainer'>
                            <Box className='boxHover inactive'>
                                <Box height='100%' w='100%' display='flex' alignItems='center' justifyContent='center' color='white'>
                                    <Heading>Gel</Heading>
                                </Box>
                            </Box>
                            <Image
                                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                borderRadius='lg'
                                className='cardImage'
                                />
                        </CardBody>
                    </Card>
                    <Card maxW='sm'>
                        <CardBody position='relative' overflow='hidden' className='cardContainer'>
                            <Box className='boxHover inactive'>
                                <Box height='100%' w='100%' display='flex' alignItems='center' justifyContent='center' color='white'>
                                    <Heading>Esmaltado</Heading>
                                </Box>
                            </Box>
                            <Image
                                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                borderRadius='lg'
                                className='cardImage'
                                />
                        </CardBody>
                    </Card>
                    <Card maxW='sm'>
                        <CardBody position='relative' overflow='hidden' className='cardContainer'>
                            <Box className='boxHover inactive'>
                                <Box height='100%' w='100%' display='flex' alignItems='center' justifyContent='center' color='white'>
                                    <Heading>Ojo de gato</Heading>
                                </Box>
                            </Box>
                            <Image
                                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                borderRadius='lg'
                                className='cardImage'
                                />
                        </CardBody>
                    </Card>
                </HStack>
            </Box>
            <Box backgroundColor='var(--background)' padding='40px 80px'>
                <Box display='flex' justifyContent='space-around'>
                    <Box width='300px'>
                        Mantente informado/a sobre nosotros. Sé parte de nuestra familia siguiendo nuestras redes sociales
                    </Box>
                    <Box display='flex' alignItems='center' >
                        <Text fontSize='40px'>Somos Beauty Bell</Text>
                    </Box>
                </Box>
                <Box marginTop='60px' display='flex' alignItems='center' justifyContent='center' gap='1em'>
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                    <FaTiktok />
                </Box>
            </Box>
        </>
    )
}

export default Home