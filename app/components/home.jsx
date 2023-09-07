'use client'
import { Center, Stack, Heading, Image, Text, Link, HStack } from '@chakra-ui/react'
import './home.css'

export default function Home() {
    return (
        <Center>
            <Stack
                mt="70"
                direction={{ base: 'column', sm: 'row' }}
                bg='transparent'
                alignItems="center"
                spacing={{ base: '4', sm: '8' }} // Aumenta el espacio entre elementos en pantallas más grandes
            >
                <Image
                    maxW={{ base: '100%', sm: '400px' }}
                    src='/logo.png'
                    mr={{ base: '0', sm: '550' }} // Mueve la imagen más a la izquierda en pantallas más grandes
                    borderRadius='30%'
                    boxShadow='0px 4px 6px rgba(0, 0, 0, 0.5)' // Ajusta la sombra según tus preferencias
                />

                <Stack flex="1" alignItems="flex-start" textAlign="left"> {/* Alinea el texto a la izquierda */}
                    <Heading size='4xl' color='blue.700'>Junior Web <br />Developer</Heading> {/* Aumenta el tamaño del encabezado */}
 
                    <Text py='4' color='black' fontSize="2xl"> {/* Aumenta el tamaño de las letras */}
                        Hi, I'm Ivan Puga.  <br />
                        A passionate and starter Developer Junior <br />
                        from Ecuador. <br />
                    </Text>

                    <HStack spacing="8" mt='10'> {/* Mueve los iconos de las redes hacia abajo */}
                        <Link href='https://github.com/Ivan2201x' isExternal>
                            <Image src='/githubIcon.png' boxSize='35px' className='icon-hover' />
                        </Link>
                        <Link href='https://www.linkedin.com/in/iv%C3%A1n-puga-macias/' isExternal>
                            <Image src='/linkdinIcon.png' boxSize='35px' className='icon-hover' />
                        </Link>
                    </HStack>
                </Stack>
            </Stack>
        </Center>
    )
}
