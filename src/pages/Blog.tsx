import { Image, Box, Heading, HStack, Text, Grid} from '@chakra-ui/react'
import './Blog.css'

const Blog = () => {
  return (
    <>
    <Box className='title' >
        <h1>Bienvenidos al mundo de las uñas!!!</h1> 
    </Box>

    <Box className='Container' padding='5px'>
      <Grid
        templateColumns="repeat(3, 1fr)" // Tres columnas de igual tamaño
        gap="10px" // Espacio entre los elementos (cards)
        alignItems="flex-start"
      >
      
      <Box className='Card' width="250px" height="450px"
      // _hover={{
      //   transform: 'scale(1.05)', // Hace que la card crezca un poco
      //   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Añade sombra para efecto de elevación
      //   transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Hace que el cambio sea suave
      // }}
      >
        <HStack
        padding='5px'
        width='250px'
        height='220px'
        backgroundColor='white'
        borderRadius='5px'
        flexDirection='column'
       
        >
        <Image
        boxSize='100%'
        objectFit='cover'
        borderRadius={'20px'}
        src='src/assets/ojodegata.jpg' 
        />
        <Box >
          <Heading size='md' backgroundColor='white'>Felices Años</Heading>
          <Text fontSize='sm' backgroundColor='white' >Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Consequuntur totam quo deleniti, 
            voluptatibus sed voluptates, in tempore ipsum nihil 
            sequi delectus corrupti. Praesentium non esse eveniet 
            suscipit unde consectetur dignissimos.</Text>
        </Box>   
        </HStack>
      </Box>

      <Box className='Card' width="250px" height="450px">
      <HStack
        padding='5px'
        width='250px'
        height='220px'
        backgroundColor='white'
        borderRadius='5px'
        flexDirection='column'
        >
        <Image
        boxSize='100%'
        objectFit='cover'
        borderRadius={'10px'}
        src='src/assets/ojodegata.jpg' 
        />
        <Box>
          <Heading size='md' backgroundColor='white'>Felices Años</Heading>
          <Text fontSize='sm' backgroundColor='white'>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Consequuntur totam quo deleniti, 
            voluptatibus sed voluptates, in tempore ipsum nihil 
            sequi delectus corrupti. Praesentium non esse eveniet 
            suscipit unde consectetur dignissimos.</Text>
        </Box>   
      </HStack>
      </Box>

      <Box className='Card' width="250px" height="450px">
        <HStack
        padding='5px'
        width='250px'
        height='220px'
        backgroundColor='white'
        borderRadius='5px'
        flexDirection='column'
        >
        <Image
        boxSize='100%'
        objectFit='cover'
        borderRadius={'10px'}
        src='src/assets/ojodegata.jpg' 
        />
        <Box>
          <Heading size='md' backgroundColor='white'>Felices Años</Heading>
          <Text fontSize='sm' backgroundColor='white'>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Consequuntur totam quo deleniti, 
            voluptatibus sed voluptates, in tempore ipsum nihil 
            sequi delectus corrupti. Praesentium non esse eveniet 
            suscipit unde consectetur dignissimos.</Text>
        </Box>   
        </HStack>
      </Box>
      </Grid>
    </Box>
    </>
  )
}

export default Blog