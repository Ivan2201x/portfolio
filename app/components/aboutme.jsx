'use client'
import { Card, Stack, CardBody, Heading, Text, Image } from '@chakra-ui/react'

export default function Aboutme() {
    return (
        <Card
            maxW='900'
            h='400'
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            mt='10%'
            ml='20%'
            mb='20%'
            boxShadow='0px 4px 6px rgba(0, 0, 0, 0.5)'
        >
            <Stack>
                <CardBody>
                    <Heading id='About Me'size='2xl' className='text-sky-800'>About me</Heading>

                    <Text py='2' className='text-justify text-xl'>
                        My name is Ivan Jose Puga Macias, I'm 21 years old, I live in Ecuador and I'm a student of Computer Science Engineering in my 6th semester.
                        I am currently working as a Junior Back-end Developer/Consultant in a small company. My aspiration is to become a full stack developer.
                    </Text>
                </CardBody>
            </Stack>
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '350px' }}
                src='IvanFoto.png'
            />
        </Card>
    )
}