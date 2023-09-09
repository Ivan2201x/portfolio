'use client'

import { Card, Text, HStack, VStack, Image, Flex } from '@chakra-ui/react'
import { FaJs, FaReact, FaNodeJs } from 'react-icons/fa';

export default function Myskills() {
    return (
        <Flex>
            <Card
                maxW="500px"
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                ml='35%'
                mt='20'
                boxShadow='0px 4px 6px rgba(0, 0, 0, 0.5)'
            >
                <VStack spacing="2" p="2" alignItems="center">
                    <Text className='font-bold text-xl' color='blue.700' >My Skills</Text>
                    <HStack spacing="10" mt='2'>
                        <Image src='javaIcon.png' w={30} h={30} />
                        <FaJs size={30} color="#f7df1e" /> {/* Icono de JavaScript */}
                        <FaReact size={30} color="#61dafb" /> {/* Icono de React */}
                        <Image src='nextjsIcon.png' w={30} h={30} />
                        <FaNodeJs size={30} color="#68a063" /> {/* Icono de Node.js */}
                        <Image src='linuxIcon.png' w={30} h={30} />
                    </HStack>
                </VStack>
            </Card>
        </Flex>
    )
}