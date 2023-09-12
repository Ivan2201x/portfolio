'use client'
import { Card, CardBody, Stack, Heading, Image, Text, Link } from '@chakra-ui/react';
import { useEffect, useState } from 'react';


export default function Certificates() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const certifSection = document.getElementById('certificates');
            if (certifSection) {
                const certifRect = certifSection.getBoundingClientRect();
                setIsVisible(certifRect.top <= window.innerHeight * 0.75);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Heading 
                opacity={isVisible ? 1 : 0}
                transition='opacity 1s ease-in' 
                mt='15%' 
                ml='24%' 
                className='text-slate-500' size='2xl'>
                Certificates
            </Heading>
            <Card
                id='certificates'
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                maxW='65%'
                h='300px'
                mt='3%'
                ml='17%'
                mb='5%'
                opacity={isVisible ? 1 : 0}
                transition='opacity 1s ease-in'
                boxShadow='0px 4px 6px rgba(0, 0, 0, 0.5)'
            >
                <Stack>
                    <CardBody>
                        <Heading size='md'></Heading>

                        <Text py='2' className='text-justify'>
                            Coming soon...
                        </Text>
                    </CardBody>
                </Stack>
            </Card>
        </>
    )
}
