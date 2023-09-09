'use client'
import { Card, Stack, CardBody, Heading, Text, Image } from '@chakra-ui/react'

export default function Aboutme() {
    return (
        <Card
            maxW='700'
            h='300'
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            mt='10%'
            ml='26%'
            mb='20%'
            boxShadow='0px 4px 6px rgba(0, 0, 0, 0.5)'
        >
            <Stack>
                <CardBody>
                    <Heading id='About Me'size='xl'>About me</Heading>

                    <Text py='2' className='text-justify'>
                        My name is Ivan Jose Puga Macias, I'm 21 years old, I live in Ecuador and I'm a student of Computer Science Engineering in my 6th semester.
                        I am currently working as a Junior Backend Developer/Consultant in a small company. My aspiration is to become a full stack developer.
                    </Text>
                </CardBody>
            </Stack>
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '300px' }}
                src='IvanFoto.png'
                alt='Caffe Latte'
            />
        </Card>
    )
}