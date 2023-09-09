'use client'
import { Center, Stack, Heading, Image, Text, Link, HStack } from '@chakra-ui/react';

export default function Home() {
    return (
        <Center>
            <Stack
                mt="70"
                direction={{ base: 'column', sm: 'row' }}
                bg='transparent'
                alignItems="center"
                spacing={{ base: '4', sm: '8' }}
            >
                <Image
                    maxW={{ base: '100%', sm: '400px' }}
                    src='/logo.png'
                    mr={{ base: '0', sm: '550' }}
                    borderRadius='30%'
                    boxShadow='0px 4px 6px rgba(0, 0, 0, 0.5)'
                />
                


                <Stack flex="1" alignItems="flex-start" textAlign="left">
                    <Heading size='4xl' color='blue.700'>Junior Web <br />Developer</Heading>
                    <Text py='4' color='black' fontSize="2xl" ml='2'>
                        Hi, I'm Ivan Puga.  <br />
                        A passionate starter Developer Junior <br />
                        from Ecuador. <br />
                    </Text>


                    <HStack spacing="8" mt='10'>
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

